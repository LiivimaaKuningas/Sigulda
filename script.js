// Select the blood container
const bloodContainer = document.querySelector('.blood-container');

// Function to create a single blood drop
function createBloodDrop() {
    const bloodDrop = document.createElement('div');
    bloodDrop.classList.add('blood-drop');

    // Randomize position and animation duration
    bloodDrop.style.left = Math.random() * 100 + 'vw';
    bloodDrop.style.animationDuration = Math.random() * 2 + 2 + 's';

    // Add the drop to the container
    bloodContainer.appendChild(bloodDrop);

    // Remove the drop after the animation ends
    bloodDrop.addEventListener('animationend', () => {
        bloodDrop.remove();
    });
}

// Create blood drops at intervals
setInterval(createBloodDrop, 500);


const backgroundMusic = document.getElementById('background-music');

// Set initial volume (0 to 1, where 1 is 100%)
backgroundMusic.volume = 1;

// Example: Mute/Unmute Toggle
document.addEventListener('click', () => {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
    } else {
        backgroundMusic.muted = true;
    }
});
