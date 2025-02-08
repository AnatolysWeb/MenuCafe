// script.js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".menu-item");
    items.forEach(item => {
        item.addEventListener("click", function() {
            alert("Has seleccionado " + this.querySelector("h2").textContent);
        });
    });
});
