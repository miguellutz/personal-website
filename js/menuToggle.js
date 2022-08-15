function toggleMenu() {
  const nav = document.getElementById("primaryNav");
  nav.classList.toggle("open");
}

let burgerMenu = document.getElementById('hamburgerBtn');

burgerMenu.onclick = toggleMenu;
