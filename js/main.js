const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navMenu = document.querySelector(".navlinks")
const navLinks = document.querySelector(".navlinks a")
const html=document.querySelector("html")

navOpen.addEventListener("click", function(){
    navMenu.style.top="65%"
    navOpen.style.display="none"
    navClose.style.display="block"
    html.style.overflowY="hidden"
})

navClose.addEventListener("click", function(){
    navMenu.style.top="-47%"
    navOpen.style.display="block"
    navClose.style.display="none"
    html.style.overflowY="scroll"
})

navlinks.forEach (navLink =>{
    navLink.addEventListener("click", function(){
        navMenu.style.top="-57%"
        navOpen.style.display="block"
        navClose.style.display="none"
        html.style.overflowY="scroll"
    })
})