// Add custom js here
/* Open the sidenav */
$(document).ready(function () {
    var acc = $("#mySidenav a");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
});
$("#mySidenav a").click(function () {
    debugger;
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.animate({display:"none"},2000);
    } else {
        panel.animate({ display: "block" },2000);
    }
});


var button_clicked = false;
function toggleNav() {
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