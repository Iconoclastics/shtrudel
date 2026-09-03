function changeText() {
    const text = document.getElementById("text");

    text.style.opacity = "0";

    setTimeout(function() {
        text.textContent = "Ты только что изменил сайт с помощью JavaScript!";
        text.style.opacity = "1";
    }, 400);
}


// Получаем все разделы и кнопки меню
const sections = document.querySelectorAll(".container");
const menuLinks = document.querySelectorAll(".sidebar a");


// Следим за прокруткой страницы
window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });


    // Меняем активную кнопку
    menuLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
