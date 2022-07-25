addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector (".btn-menu")
    if (btn_menu){ 
        btn_menu.addEventListener("click", () => {
            const nav_bar = document.querySelector(".navbar")
            nav_bar.classList.toggle("show")
        })
    }
})