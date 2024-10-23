// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value.split(','); // Convert to array
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><br>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p  contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p  contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3  contenteditable=\"true\">Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
