const navbarItems = document.querySelector(".navbar-items");
const menuToggle = document.getElementById("menubar-click");

menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
        navbarItems.classList.add("show");
    } else {
        navbarItems.classList.remove("show");
    }
});
