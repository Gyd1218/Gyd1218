

document.addEventListener("DOMContentLoaded", function () {
  let percentage = 0; // Initialize the percentage
  const percentageElement = document.getElementById('percentage');

  function updatePercentage() {
      percentageElement.textContent = percentage + '%'; // Update the text content
      percentage++;
      
      if (percentage > 100) {
          percentage = 0; // Reset to 0 after reaching 100
      }
  }

  setInterval(updatePercentage, 100); // Update every 100ms
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function () {
        // Get the email input value
        const email = document.getElementById("email").value;

        // Check if email is entered
        if (email.trim() === "") {
            alert("Please enter your email address.");
        } else {
            alert("Thank you for contacting us!");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".support-section").style.animationPlayState = "running";
});


