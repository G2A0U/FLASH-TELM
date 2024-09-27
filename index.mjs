let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");
const video = document.getElementById('video'); // Changez 'myVideo' par 'video'

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

// Fonction pour démarrer la vidéo avec le son
const startVideoWithSound = () => {
  video.play(); // Démarre la vidéo
};

// Ajouter l'événement click pour démarrer la vidéo
document.addEventListener('click', startVideoWithSound);
