const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.view-btn');
const pageContent = document.getElementById('page-content');

// **(1) Position the popup relative to the viewport:**
popup.style.position = "fixed"; // Stay fixed on the screen
popup.style.top = "50%"; // 50% from the top of the viewport
popup.style.left = "50%"; // 50% from the left of the viewport
popup.style.transform = "translate(-50%, -50%)"; // Center horizontally and vertically

// **(2) Keep page content visible with full opacity (unchanged):**
pageContent.style.display = "block";
pageContent.style.opacity = 1;

// **(3) Layer the popup visually above the page content (unchanged):**
popup.style.zIndex = 9999;

// **(4) Event listener to close the popup (unchanged):**// Set a higher z-index than pageContent

// Event listener to close the popup when clicking outside of it (unchanged)
window.addEventListener('click', (event) => {
    if (popup.style.display !== "none" && !popup.contains(event.target) && !closeBtn.contains(event.target)) {
        popup.style.display = "none";
    }
});

// **Show the popup on page load with a fade-in effect**
popup.style.display = "block";
popup.style.opacity = 0; // Start as transparent
setTimeout(() => { // Delay to create a fade-in effect
    popup.style.opacity = 1; // Fade in the popup
}, 0);

// Close the popup with a fade-out effect (unchanged)
closeBtn.addEventListener('click', function() {
    popup.style.opacity = 0; // Fade out the popup
    setTimeout(() => { // Delay to complete fade-out before hiding
        popup.style.display = "none";
    }, 400);
});