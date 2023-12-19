document.addEventListener("DOMContentLoaded", () => initApp());

function initApp() {
    toggleMenuButton();
}

function toggleMenuButton() {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".left-section");

  menuButton.addEventListener("click", (e) => {
    e.target.closest(".menu-toggle").classList.toggle("change");
    menu.classList.toggle("show-on");
  });
}
