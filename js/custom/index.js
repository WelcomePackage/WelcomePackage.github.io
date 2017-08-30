$.ajax({
    url: "../../Pages/Template/g-nav.html",
    success: function (result) {
        document.getElementById('g-nav').innerHTML = result;
    }
});
$.ajax({
    url: "../../Pages/Template/g-footer.html",
    success: function (result) {
        document.getElementById('g-footer').innerHTML = result;
    }
});

$(document).ready(function () {
    $('.gotop').click(function () {
        $('body').animatescroll();
    });
    $('.center-heading h2').css('right', $('.center-heading').width() / 2 - $('.center-heading h2').width() / 2);
    $('.banner').css('height', $(window).height() + 'px');
    $(window).resize(function () {
        $('.center-heading h2').css('right', $('.center-heading').width() / 2 - $('.center-heading h2').width() / 2);
    });
    var isScrolled = false;
    $(window).scroll(function () {
        if (!isScrolled) {
            $('#main').animatescroll({padding : 50});
            isScrolled = true;
        }
        if ($(window).scrollTop() === 0) {
            isScrolled = false;
        }
    });
    $(".banner img").animate({
        'bottom': 450 + 'px',
        //'right': 100+'px'
    });
    $('.icon-box').click(function () {
        
        $(this).hide();
    });
});


