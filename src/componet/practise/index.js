// Function that greets the user when the button is clicked
function greetUser() {
    const name = document.getElementById("name").value; // Get the value entered in the input field
    const greetingMessage = document.getElementById("greetingMessage"); // Get the element to display the greeting message

    // Check if the name is not empty
    if (name.trim() !== "") {
        greetingMessage.innerHTML = `Hello, ${name}! Welcome to the Greeting Program.`;
    } else {
        greetingMessage.innerHTML = "Please enter your name!";
    }
}
