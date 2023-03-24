
const toggler = document.querySelector(".navbar-toggler-icon")
const allNavs = document.getElementById("navbarSupportedContent")
const mainTog = document.querySelector("#main-toggler ul")
const closeBtn = document.querySelector("#main-toggler button")

function toggleInvoke() {
    mainTog.style.display = "block"
    console.log("clicked")
}

toggler.addEventListener('click', () => {
    toggleInvoke()
})

closeBtn.addEventListener('click', () => {
    mainTog.style.display = "none"
})
