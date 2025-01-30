function greetUser() {
    // Ask for the user's name
    const userName = prompt("What's your name?");
    
    // Check if the user entered a name
    if (userName) {
      // Display a greeting message
      document.getElementById('greetingMessage').innerHTML = `Hello, ${userName}! Welcome to our website.`;
    } else {
      // If no name is entered
      document.getElementById('greetingMessage').innerHTML = 'Hello, stranger! Welcome to our website.';
    }
  }
  