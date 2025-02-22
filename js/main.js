﻿
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

function gotop() {
    $('html,body').animatescroll();
}
/************************************************************************/

/************************************************************************/
$(document).ready(function () {
    /*****VARIABLES********/
    var quickAccessWidth;
    var quickAccessOpened = false;
    /*****VARIABLES********/


    /*****EVENTS********/
    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        if (offset > 250) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
    $("#mySidenav a").click(function () {
        $("#mySidenav a ul").removeClass("active-sub-nav");
        this.classList.toggle("active-sub-nav");
    });
    $('.quick-access-icon').click(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            quickAccessWidth = '70%';
        }
        else if (windowWidth >= 768 && windowWidth <= 992) {
            quickAccessWidth = '50%';
        }
        else if (windowWidth > 992 && windowWidth <= 1200) {
            quickAccessWidth = '40%';
        }
        else if (windowWidth > 1200) {
            quickAccessWidth = '15%';
        }

        if (!quickAccessOpened) {
            $('.quick-access ul').hide();
            $('.quick-access').animate({
                'width': quickAccessWidth,
                'padding': '20px'
            },
                function () {
                    $('.quick-access ul').fadeIn();
                });

        } else {
            $('.quick-access ul').hide();
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

        $($(this).attr('data-toggle'))
            .animatescroll({
                padding: 50,
                easing: 'easeInOutBack',
                scrollSpeed: 2000
            });
    });
    $('.tooltips').mouseenter(function () {
        $('.tooltips').tooltip();
    });

    //$('.gotop').click(function() {
    //    gotop();
    //});
    /*****EVENTS********/

});

/**********************************************************************************/
