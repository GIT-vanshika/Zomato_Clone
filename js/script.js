document.addEventListener("DOMContentLoaded", function () {
  // Smooth hover effect on menu items
  const navLinks = document.querySelectorAll("header ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#ffcccb";
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = "white";
    });
  });

  // Search Input Animation
  const searchInput = document.querySelector("input");
  searchInput.addEventListener("focus", function () {
    this.style.width = "60%";
    this.style.transition = "0.4s ease-in-out";
  });

  searchInput.addEventListener("blur", function () {
    this.style.width = "50%";
  });

  // Fade-in Animation for Main Section
  const mainSection = document.querySelector("main");
  mainSection.style.opacity = "0";
  mainSection.style.transform = "translateY(20px)";
  setTimeout(() => {
    mainSection.style.transition = "1s";
    mainSection.style.opacity = "1";
    mainSection.style.transform = "translateY(0)";
  }, 300);
});
