const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navMenu = document.querySelector(".navlinks")
const navLinks = document.querySelectorAll(".navlinks a")
console.log(navLinks)
const html = document.querySelector("html")

navOpen.addEventListener("click", function(){
    navMenu.style.top="65%"
    navOpen.style.display="none"
    navClose.style.display="block"
    html.style.overflowY="hidden"
})

function closeNav(){
    navMenu.style.top="-47%"
    navOpen.style.display="block"
    navClose.style.display="none"
    html.style.overflowY="scroll"
}

// navClose.addEventListener("click", function(){
//     navMenu.style.top="-47%"
//     navOpen.style.display="block"
//     navClose.style.display="none"
//     html.style.overflowY="scroll"
// })

navLinks.forEach (navLink =>{
    navLink.addEventListener("click", function(){
        navMenu.style.top="-57%"
        navOpen.style.display="block"
        navClose.style.display="none"
        html.style.overflowY="scroll"
    })
})
