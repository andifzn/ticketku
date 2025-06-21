let dropdown = document.getElementById("dropdown");
let dropdown_content = document.querySelector(".dropdown-content");
let hamburgerMenu = document.getElementById("hamburger-menu")

dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown_content.classList.toggle("active");
})

hamburgerMenu.addEventListener('click', () => {
    let navbarMenu = document.querySelector(".navbar-menu");
    navbarMenu.classList.toggle('navbar-menu-active')
})
