AOS.init({
    once: true,
});

document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu-icon");
    var menuLinks = document.getElementById("menu-links");

    menuIcon.addEventListener("click", function () {
        menuLinks.classList.toggle("show");
    });
});