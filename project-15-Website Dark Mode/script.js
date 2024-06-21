let icon = document.querySelector("img");

icon.addEventListener("click", () => {
    if (icon.src.includes("moon.png")) {
        icon.src = "dark theme icon/sun.png";
        document.body.style.background = '#333';
        document.body.style.color = '#fff';
    } else {
        icon.src = "dark theme icon/moon.png";
        document.body.style.background = '#fff';
        document.body.style.color = '#333';
    }
});