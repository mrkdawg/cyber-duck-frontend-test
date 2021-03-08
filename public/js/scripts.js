(function() {

  init();

  function init() {
    initMenuToggles();
    initScrollToTop();
  }

  function initMenuToggles() {
    const toggles = [
      {
        button: document.querySelector("button.search"),
        area: document.querySelector(".search-area")
      },
      {
        button: document.querySelector("button.nav"),
        area: document.querySelector("nav")
      }
    ]; 
    toggles.forEach(item => {
      item.button.addEventListener("click", () => {
        item.button.classList.toggle("open");
        item.area.classList.toggle("show");
      });
    });
  }

  function initScrollToTop() {
    const toTopButton = document.querySelector("button.button-scrolltotop");
    toTopButton.addEventListener("click", () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0
      });
    });
  }

})();