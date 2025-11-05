// Select all elements that have the data attribute
const groups = document.querySelectorAll("[data-js-group]");

// Track whether Ctrl is currently pressed
let ctrlHeld = false;

document.addEventListener("keydown", (e) => {
    if (e.code === "ControlLeft" && !ctrlHeld) {
        ctrlHeld = true;
        groups.forEach((el) => el.classList.add("active"));
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ControlLeft") {
        ctrlHeld = false;
        groups.forEach((el) => el.classList.remove("active"));
    }
});
