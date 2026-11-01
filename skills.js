window.addEventListener("DOMContentLoaded", () =>
{
    const initButton = document.getElementById("initButton");
    const skillsBox = document.getElementById("skillsBox");
})



initButton.addEventListener("click", function(event)
{
    initButton.classList.add("blackedOut", "disappear")
    setTimeout(() =>
    {
        initButton.classList.add("hidden");
    }, 1000)
    skillsBox.classList.add("transformed")
})

class Skill
{
    constructor(id, name, category, proficiency, experience, description)
    {
        this.id = id;
        this.name = name;
        this.category = category;
        this.proficiency = proficiency;
        this.experience = experience;
        this.description = description;
    }
}


const Skills =
[
    new Skill(1, "HTML", "tech", 4, 2, "HyperText Markup Language is the code behind the words of the internet. It's how you're reading this text!"),
    new Skill(2, "CSS", "tech", 5, 2, "CSS is the visual framework on every website, it makes things look smooth, connected, animated, and color oriented."),
    new Skill(3, "Javascript", "tech", 2, 0.5, "Javascript makes websites function, it can sort lists, dynamically adjust webpages, and respond to user input."),
    new Skill(4, "Rocket League", "gaming", 5, 4, "Rocket League is my favorite game, I play it all the time and I'm among the top 0.5% best players in the world."),
    new Skill(5, "Team Fortress 2", "gaming", 4, 5.5, "Team Fortess 2 is the original class-based hero shooter FPS game. I love the game for it's goofy nature, and I'm pretty good at it too."),
    new Skill(6, "Flute", "music", 5, 10, "The flute is my instrument. I've played it for a decade and I'm extremely good at it, I've played in many orchestras and I've received multiple solos and concertos."),
    new Skill(7, "Baritone Saxophone", "music", 4, 3.5, "The bari sax is part of the low saxophones, it's got a rich and deep sound to it which is why I wanted to play it. I'm a decent jazz musician."),
    new Skill(8, "Bass Guitar", "music", 3, 2, "The bass guitar is definitely a fun instrument to play. I love the deep sounds it can create and I enjoy being the anchor bassline in a song.")
]

function reloadList()
{

}
