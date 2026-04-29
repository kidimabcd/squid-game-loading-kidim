const btn = document.getElementById("playMusic");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    music.play();
    btn.textContent = "🔊 Musik Diputar";
});
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("playMusic");
    const music = document.getElementById("bgMusic");

    // set volume
    music.volume = 1;

    btn.addEventListener("click", () => {
        music.play();
        btn.textContent = "🔊 Musik Diputar";
    });
});
