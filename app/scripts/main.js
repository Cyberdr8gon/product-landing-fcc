
let menuOpen = false;

document.getElementById("menu-icon").addEventListener("click", function() {
  if(menuOpen) {
    document.getElementById("menu").style.display = "none";
    menuOpen = false;
  } else {
    document.getElementById("menu").style.display = "block";
    menuOpen = true;
  }
})
