var skillsButton = document.getElementById("toggle-skills-button");
var skill = document.getElementById("skills");
skillsButton.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
