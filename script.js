// Initialize variable 'i' to track current question index
let i = 0;

// Array containing questions
let question = ["1. Enter your Name", "2. Enter your Surname", "3. Enter your Age", "4. Birthday (YYYY-MM-DD)", "5. Profession", "6. Email", 
                "7. Contact No", "8. Address", "9. Are you interested in volunteering for our upcoming fundraiser?", 
                "10. What days and times are you typically available to volunteer?",
                "11. Would you like to receive updates about future volunteer opportunities?",
                "12. Is there anything else you'd like to tell us about your volunteer experience or interests?"];

// Initialize variables to store partial and full responses
let partOut = "";
let full = "";

// Display initial question
let que = document.getElementById("que");
que.innerHTML = `<p>${question[i]}</p>`;

// Event listener for 'Next' button
document.getElementById("next").addEventListener("click", function () {
    // Check if there are more questions
    if (i < 12) {
        this.textContent = "Next"; // Update button text
        one(1);// Call function to handle response
        i++;// Increment question index
        document.getElementById("progress").value = i;// Update progress bar
    }
});

// Event listener for 'Skip' button
document.getElementById("skip").addEventListener("click", function () {
    // Check if there are more questions
    if (i < 12) {
        one(0);// Call function to handle response (skipped)
        i++;// Increment question index
        document.getElementById("progress").value = i;// Update progress bar
    }
});

// Function to handle user response
function one(num) {
    let tag = document.getElementById("content");// Get content tag
    let out = "";// Initialize output
    let content = "";// Initialize content

    // Prompt user for response if 'num' is not 0
    if (num != 0) {
        out = prompt(question[i]);// Prompt user with current question
        content = `<p>${question[i]}: ${out}`;// Create content with response
    } else {
        content = `<p>${question[i]}: ${out}`;// Create content for skipped question
    }

    // Update next question display
    if (i != 11) {
        que.innerHTML = `<p>${question[i + 1]}</p>`;
    } else {
        que.innerHTML = `<p>Finished</p>`;
    }

    // Store partial response
    partOut += content;
    // Store full response
    full += content;

    // Display partial response after every 4 questions
    if ((i + 1) % 4 == 0) {
        tag.innerHTML = partOut;
        partOut = "";// Reset partial response
    }
    // Display full response when all questions are answered
    if (i == 11) {
        tag.innerHTML = full;
    }
}
