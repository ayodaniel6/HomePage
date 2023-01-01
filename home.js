const navMenu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".open");

const close = document.querySelector(".close");


hamburger.addEventListener('click', () => {
    const visible = navMenu.getAttribute("data-visible");
    if (visible === 'true'){
        navMenu.setAttribute("data-visible",'false')
    }else {
        navMenu.setAttribute("data-visible",'true')
    }
})

close.addEventListener('click', () => {
    const visible = navMenu.getAttribute("data-visible");
    if (visible === 'true'){
        navMenu.setAttribute("data-visible",'false')
    }else {
        navMenu.setAttribute("data-visible",'true')
    }
})

