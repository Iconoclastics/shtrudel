function changeText() {
    const text = document.getElementById("text");

    text.style.opacity = "0";

    setTimeout(function() {
        text.textContent = "Ты только что изменил сайт с помощью JavaScript!";
        text.style.opacity = "1";
    }, 400);
}
