function createSlowSnow() {
    const container = document.getElementById("slowSnow");
    const totalSnow = 160;

    for (let i = 0; i < totalSnow; i++) {
        const flake = document.createElement("div");
        flake.classList.add("snowflake");

        const size = 4 + Math.random() * 10;
        const left = Math.random() * 100;
        const duration = 18 + Math.random() * 12;
        const delay = Math.random() * 20;

        flake.style.width = size + "px";
        flake.style.height = size + "px";
        flake.style.left = left + "%";
        flake.style.animationDuration = duration + "s";
        flake.style.animationDelay = delay + "s";

        container.appendChild(flake);
    }
}

document.addEventListener("DOMContentLoaded", createSlowSnow);
