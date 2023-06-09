var  menu = document.getElementById("TopNav")
var icon = document.getElementById("aicon")

function myFunction() {
  menu.classList.toggle("hide")
}

function closeMenu(e) {
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList += " hide"
  }
}

window.addEventListener("click", closeMenu)
