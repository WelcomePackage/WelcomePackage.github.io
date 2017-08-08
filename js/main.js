
/************************************************************************/

var button_clicked = false;
function toggleNav(x) {
    x.classList.toggle("bars-change");
    if (!button_clicked) {
        $("#mySidenav").css('width', '100% ');
        $("#mySidenav a").css('opacity', '1');
    }
    if (button_clicked) {
        $("#mySidenav a").css('opacity', '0');
        $("#mySidenav").css('width', '0');
    }
    button_clicked = !button_clicked;
}
/************************************************************************/

/************************************************************************/
$(document).ready(function () {
    $("#mySidenav a").click(function () {
        //debugger
        $("#mySidenav a ul").removeClass("active-sub-nav");
        this.classList.toggle("active-sub-nav");
    });
    $('.gotop').click(function () {
        $('html,body').animatescroll();

    });
});
