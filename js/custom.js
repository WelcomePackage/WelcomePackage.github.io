// Add custom js here
/* Open the sidenav */
var button_clicked = false;
function toggleNav() {
        debugger; 
    if (!button_clicked) {
        $("#mySidenav").css('width', '100% ');
        $("#mySidenav a").animate({opacity:'1'},200);
        //$("#mySidenav a").css('opacity', '1');
    }
    if (button_clicked) {
        //$("#mySidenav a").animate({opacity:'0'},500);
        $("#mySidenav a").css('opacity', '0');
        $("#mySidenav").css('width', '0');
    }
    button_clicked = !button_clicked;
}