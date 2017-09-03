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
            $('#main').animatescroll({ padding: 50 });
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
    $('.btn-box-close').click(function () {
        $('.icon-box-2').animate({ 'height': 0 + 'px' }, 1000);
        //$('.icon-box-1').animate({ 'height': 200 + 'px' }, 1000);


        $('.icon-box-1').css('display', 'none');
        $('.icon-box-1').css('height', 'auto');
        var htEng = $('.icon-box-1').css('height');
        $('.icon-box-1').css('height', 0);
        $('.icon-box-1').css('display', 'block');
        $('.icon-box-1').animate({ 'height': htEng }, 1000);
    });
    $('.icon-box-1 a').click(function () {
        $('.icon-box-1').animate({ 'height': 0 + 'px' }, 1000);
        switch ($(this).attr('id')) {
            case 'eng-bt':
                {
                    $('#eng-bx').css('display', 'none');
                    $('#eng-bx').css('height', 'auto');
                    var htEng = $('#eng-bx').css('height');
                    $('#eng-bx').css('height', 0);
                    $('#eng-bx').css('display', 'block');
                    $('#eng-bx').animate({ 'height': htEng }, 1000);
                    break;
                }
            case 'arch-bt':
                {
                    $('#arch-bx').css('display', 'none');
                    $('#arch-bx').css('height', 'auto');
                    var htArch = $('#arch-bx').css('height');
                    $('#arch-bx').css('height', 0);
                    $('#arch-bx').css('display', 'block');
                    $('#arch-bx').animate({ 'height': htArch }, 1000);
                    break;
                }

            default:
        }
    });
});


