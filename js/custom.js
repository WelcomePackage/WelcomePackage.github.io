// Add custom js here
/* Open the sidenav */
var button_clicked = false;
function toggleNav() {
    if (!button_clicked) {
        $("#mySidenav a").css('opacity', '1');
        $("#mySidenav").css('width', '100% ');
    }
    if (button_clicked) {
        $("#mySidenav a").css('opacity', '0');
        $("#mySidenav").css('width', '0');
    }
    button_clicked = !button_clicked;
}