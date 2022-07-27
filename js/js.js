addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector (".btn-menu")
    if (btn_menu){ 
        btn_menu.addEventListener("click", () => {
            const nav_bar = document.querySelector(".navbar")
            nav_bar.classList.toggle("show")
        })
    }
})


/* DESCRIPTION PANEL*/ 
const about = document.querySelector(".description-panel");
const btns = document.querySelectorAll(".panel");
const articles = document.querySelectorAll(".description");



about.addEventListener("click", function (e) {
const id = e.target.dataset.id;
if (id) {
// remove selected from other buttons
btns.forEach(function (btn) {
btn.classList.remove("active");
});

e.target.classList.add("active");
// hide other articles
articles.forEach(function (article) {
article.classList.remove("active");
});

const element = document.getElementById(id);
element.classList.add("active");
}
});