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
});