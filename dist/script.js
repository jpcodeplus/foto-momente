document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach((carousel) => {
      let isDown = false;
      let startX;
      let scrollLeft;
  
      carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });
  
      carousel.addEventListener("mouseleave", () => {
        isDown = false;
        carousel.classList.remove("active");
      });
  
      carousel.addEventListener("mouseup", () => {
        isDown = false;
        carousel.classList.remove("active");
      });
  
      carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Multipliziert die Bewegung für schnelleres Scrollen
        carousel.scrollLeft = scrollLeft - walk;
      });
  
      // Textauswahl deaktivieren
      carousel.addEventListener("dragstart", (e) => e.preventDefault());
    });
  });
  