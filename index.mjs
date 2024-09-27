let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");
const video = document.getElementById('video');

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  // Utiliser les coordonnées du doigt si c'est un appareil tactile
  if (isTouchDevice()) {
    mouseX = e.touches[0].pageX;
    mouseY = e.touches[0].pageY;
  } else {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition); // Gestion des mouvements tactiles

// Démarrer la vidéo avec le son lors du premier clic ou toucher
const startVideoWithSound = () => {
  video.muted = false; // Active le son
  video.play(); // Démarre la vidéo
  document.removeEventListener('click', startVideoWithSound); // Supprime l'écouteur après le premier clic
  document.removeEventListener('touchstart', startVideoWithSound); // Supprime l'écouteur après le premier toucher
};

// Ajouter l'événement click et touchstart pour démarrer la vidéo
document.addEventListener('click', startVideoWithSound);
document.addEventListener('touchstart', startVideoWithSound);
