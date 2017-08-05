// Add custom js here
/* Open the sidenav */
var button_clicked = false;
function toggleNav() {
    if (!button_clicked) {
        document.getElementById("mySidenav").style.width = "100%";
    }
    if (button_clicked) {
        document.getElementById("mySidenav").style.width = "0";
    }
    button_clicked = !button_clicked;
}