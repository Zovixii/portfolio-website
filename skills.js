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
