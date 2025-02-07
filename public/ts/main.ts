const backdrop = document.querySelector(".backdrop")! as HTMLInputElement;
const sideDrawer = document.querySelector(".mobile-nav")! as HTMLInputElement;
const menuToggle = document.querySelector(
    "#side-menu-toggle"
)! as HTMLInputElement;

function backdropClickHandler() {
    backdrop.style.display = "none";
    sideDrawer.classList.remove("open");
}

function menuToggleClickHandler() {
    backdrop.style.display = "block";
    sideDrawer.classList.add("open");
}

backdrop.addEventListener("click", backdropClickHandler);
menuToggle.addEventListener("click", menuToggleClickHandler);
