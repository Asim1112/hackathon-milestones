// Get references to the form and display area
let form = document.getElementById("resume-form") as HTMLFormElement;
let resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let education = (document.getElementById("education") as HTMLTextAreaElement).value;
    let experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    let skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(','); // Convert to array

    // Generate the resume content dynamically
    let resumeHTML = `
        <h2><br>Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error(`The resume display element is missing.`);
    }
});