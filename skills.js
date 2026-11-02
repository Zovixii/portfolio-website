window.addEventListener("DOMContentLoaded", () =>
{
    const initButton = document.getElementById("initButton");
    const skillsBox = document.getElementById("skillsBox");
    const skillsContent = document.getElementById("skillsContent");
    const filterButtons = [...document.querySelectorAll(".filterButtons")];
    const sortButtons = [...document.querySelectorAll(".sortButtons")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    reloadList(Skills, categoryFilter, sortFilter);

    initButton.addEventListener("click", () =>
    {
        initButton.disabled = true;
        initButton.setAttribute("aria-expanded", "true");
        initButton.classList.add("disappear");

        function showSkills()
        {
            initButton.hidden = true;
            skillsBox.hidden = false;

            function finishOpening()
            {
                skillsContent.classList.add("contentVisible");
                skillsBox.classList.remove("transformed");
            }

            if(reducedMotion.matches)
            {
                finishOpening();
            }
            else
            {
                skillsBox.addEventListener("animationend", finishOpening, { once: true });
                skillsBox.classList.add("transformed");
            }
        }

        if(reducedMotion.matches)
        {
            showSkills();
        }
        else
        {
            setTimeout(showSkills, 250);
        }
    });

    filterButtons.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            filterButtons.forEach(filterButton =>
            {
                filterButton.classList.remove("filterButtonActive");
                filterButton.setAttribute("aria-pressed", "false");
            });

            button.classList.add("filterButtonActive");
            button.setAttribute("aria-pressed", "true");
            categoryFilter = button.dataset.category;

            reloadList(Skills, categoryFilter, sortFilter);
        });
    });

    sortButtons.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            sortButtons.forEach(sortButton =>
            {
                sortButton.classList.remove("sortButtonActive");
                sortButton.setAttribute("aria-pressed", "false");
            });

            button.classList.add("sortButtonActive");
            button.setAttribute("aria-pressed", "true");
            sortFilter = button.textContent.trim();

            reloadList(Skills, categoryFilter, sortFilter);
        });
    });
});

let categoryFilter = "All";
let sortFilter = "Name";
let renderCount = 0;


class Skill
{
    constructor(id, name, category, proficiency, yearsExperience, description)
    {
        this.id = id;
        this.name = name;
        this.category = category;
        this.proficiency = proficiency;
        this.yearsExperience = yearsExperience;
        this.description = description;
    }
}


const Skills =
[
    new Skill(1, "HTML", "Tech", 4, 2, "HyperText Markup Language is the code behind the words of the internet. It's how you're reading this text!"),
    new Skill(2, "CSS", "Tech", 5, 2, "CSS is the visual framework on every website, it makes things look smooth, connected, animated, and color oriented."),
    new Skill(3, "Javascript", "Tech", 2, 0.5, "Javascript makes websites function, it can sort lists, dynamically adjust webpages, and respond to user input."),
    new Skill(4, "Rocket League", "Gaming", 5, 4, "Rocket League is my favorite game, I play it all the time and I'm among the top 0.5% best players in the world."),
    new Skill(5, "Team Fortress 2", "Gaming", 4, 5.5, "Team Fortess 2 is the original class-based hero shooter FPS game. I love the game for it's goofy nature, and I'm pretty good at it too."),
    new Skill(6, "Flute", "Music", 5, 10, "The flute is my instrument. I've played it for a decade and I'm extremely good at it, I've played in many orchestras and I've received multiple solos and concertos."),
    new Skill(7, "Baritone Saxophone", "Music", 3, 3.5, "The bari sax is part of the low saxophones, it's got a rich and deep sound to it which is why I wanted to play it. I'm a decent jazz musician."),
    new Skill(8, "Bass Guitar", "Music", 2, 2, "The bass guitar is definitely a fun instrument to play. I love the deep sounds it can create and I enjoy being the anchor bassline in a song.")
]

function createSkillCard(skill)
{
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.dataset.skillId = skill.id;

    card.innerHTML = `
        <p class="cardTitle">${skill.name}</p>
        <p class="categoryBadge">${skill.category}</p>
        <p class="experienceTag">Experience: ${skill.yearsExperience} years</p>
        <p>${skill.description}</p>
        <p class="proficiencyLabel">Proficiency: ${skill.proficiency}/5</p>
        <div class="proficiencyMeter" aria-hidden="true"></div>
    `;

    const dotsContainer = card.querySelector(".proficiencyMeter");

    for(let i = 0; i < 5; i++)
    {
        const dot = document.createElement("span");
        dot.classList.add("dot");

        if(i < skill.proficiency)
        {
            dot.classList.add("activeDot");
        }

        dotsContainer.appendChild(dot);
    }

    return card;
}

function reloadList(Skills, categoryFilter, sortFilter)
{
    const container = document.getElementById("skillCards");
    const skillsBox = document.getElementById("skillsBox");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldAnimate = !reducedMotion && !skillsBox.hidden;
    const currentRender = ++renderCount;

    const previousCards = new Map();
    const previousPositions = new Map();

    [...container.children].forEach(card =>
    {
        card.getAnimations().forEach(animation => animation.cancel());
        previousCards.set(card.dataset.skillId, card);

        if(shouldAnimate)
        {
            previousPositions.set(card.dataset.skillId, card.getBoundingClientRect());
        }
    });

    const filteredSkills = Skills
        .filter(skill => categoryFilter === "All" || skill.category === categoryFilter)
        .sort((a, b) =>
        {
            switch(sortFilter)
            {
                case "Proficiency":
                    return b.proficiency - a.proficiency;

                case "Experience":
                    return b.yearsExperience - a.yearsExperience;

                case "Name":
                    return a.name.localeCompare(b.name);

                default:
                    return 0;
            }
        });

    const visibleIds = new Set(filteredSkills.map(skill => String(skill.id)));

    previousCards.forEach((card, id) =>
    {
        if(!visibleIds.has(id))
        {
            card.remove();
        }
    });

    filteredSkills.forEach(skill =>
    {
        const card = previousCards.get(String(skill.id)) || createSkillCard(skill);
        container.appendChild(card);
    });

    document.getElementById("showCounter").textContent =
        `Currently showing ${filteredSkills.length} out of ${Skills.length} cards.`;

    if(shouldAnimate)
    {
        requestAnimationFrame(() =>
        {
            if(currentRender !== renderCount)
            {
                return;
            }

            [...container.children].forEach(card =>
            {
                const previousPosition = previousPositions.get(card.dataset.skillId);

                if(previousPosition)
                {
                    const newPosition = card.getBoundingClientRect();
                    const changeX = previousPosition.left - newPosition.left;
                    const changeY = previousPosition.top - newPosition.top;

                    if(Math.abs(changeX) > 1 || Math.abs(changeY) > 1)
                    {
                        card.animate(
                        [
                            { transform: `translate(${changeX}px, ${changeY}px)` },
                            { transform: "translate(0, 0)" }
                        ],
                        {
                            duration: 350,
                            easing: "cubic-bezier(0.215, 0.610, 0.355, 1)"
                        });
                    }
                }
                else
                {
                    card.animate(
                    [
                        { opacity: 0, transform: "translateY(12px)" },
                        { opacity: 1, transform: "translateY(0)" }
                    ],
                    {
                        duration: 280,
                        easing: "ease-out"
                    });
                }
            });
        });
    }
}
