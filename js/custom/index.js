$.ajax({
    url: "../../Pages/Template/Header.html",
    success: function (result) {
        document.getElementById('g-nav').innerHTML = result;
    }
});
$.ajax({
    url: "../../Pages/Template/Footer.html",
    success: function (result) {
        document.getElementById('g-footer').innerHTML = result;
    }
});

$(document).ready(function() {
    $('.gotop').click(function() {
        $('body').animatescroll();
    });
    $('.center-heading h2').css('right', $('.center-heading').width() / 2 - $('.center-heading h2').width()/2);
    $('.banner').css('height', $(window).height()+'px');
    $(window).resize(function() {
        $('.center-heading h2').css('right', $('.center-heading').width() / 2 - $('.center-heading h2').width() / 2);
    });


});


