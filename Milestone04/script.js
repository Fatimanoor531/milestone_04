// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
if (form) {
    // Handle Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Display collected data
        var resumeHTML = "\n      <h2>Editable Resume</h2>\n      <h3>Personal Information</h3>\n      <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "<span></p>\n      <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "<span></p>\n      <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "<span></p>\n      <h3>Education</h3>\n      <p contenteditable=\"true\"><strong>Education:</strong> ").concat(education, "</p>\n      <h3>Experience</h3>\n      <p contenteditable=\"true\"><strong>Experience:</strong> ").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p contenteditable=\"true\"><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.log("The resume display element is missing");
        }
    });
}
