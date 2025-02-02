// Function to add fade-in animation to elements
function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 300); // Stagger the animation for each element
  });
}

// Function to add hover animation to info boxes
function addHoverEffect() {
  const infoBoxes = document.querySelectorAll('.info-box');
  infoBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.05)';
      box.style.transition = 'transform 0.3s ease';
    });
    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
    });
  });
}

// Function to animate the header text
function animateHeader() {
  const header = document.querySelector('header');
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';

  setTimeout(() => {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
    header.style.transition = 'opacity 1s ease, transform 1s ease';
  }, 500);
}

// Initialize all animations when the page loads
window.onload = () => {
  fadeInElements();
  addHoverEffect();
  animateHeader();
};