$.ajax({
    url: "../Template/Header.html",
    success: function (result) {
        document.getElementById('g-nav').innerHTML = result;
    }
});
$.ajax({
    url: "../Template/Footer.html",
    success: function (result) {
        document.getElementById('g-footer').innerHTML = result;
    }
});
$.ajax({
    url: "../Template/Groups-QuickAccess.html",
    success: function (result) {
        document.getElementById('g-gr-q-access').innerHTML = result;
    }
});