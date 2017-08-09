
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
    var quickAccessWidth;
    var quickAccessOpened = false;
    
    $('.quick-access-icon').click(function () {
        var windowWidth = $(window).width();
        if (windowWidth <= 768) {
            quickAccessWidth = '80%';
        }
        else if (windowWidth > 768 && windowWidth <= 992) {
            quickAccessWidth = '60%';
        }
        else if (windowWidth > 992 && windowWidth <= 1200) {
            quickAccessWidth = '50%';
        }
        else if (windowWidth > 1200) {
            quickAccessWidth = '40%';
        }
        if (!quickAccessOpened) {
            $('.quick-access').animate({
                'width': quickAccessWidth,
                'padding': '20px'
            });

        } else {
            $('.quick-access').animate({
                'width': '0',
                'padding': '0'
            });
        }
        $(this).toggleClass('actvie-quick-access');
        quickAccessOpened = !quickAccessOpened;
    });

    $('.quick-access-link').click(function () {
        if (!quickAccessOpened) {
            $('.quick-access').animate({
                'width': quickAccessWidth,
                'padding': '20px'
            });

        } else {
            $('.quick-access').animate({
                'width': '0',
                'padding': '0'
            });
        }
        $('.quick-access-icon').toggleClass('actvie-quick-access');
        quickAccessOpened = !quickAccessOpened;
    });
});
