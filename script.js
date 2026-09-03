function changeText() {
    const text = document.getElementById("text");

    text.style.opacity = "0";

    setTimeout(function() {
        text.textContent = "Ты только что изменил сайт с помощью JavaScript!";
        text.style.opacity = "1";
    }, 400);
}


const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
