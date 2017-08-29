$.ajax({
    url: "../../../Pages/Template/g-nav.html",
    success: function (result) {
        document.getElementById('g-nav').innerHTML = result;
    }
});
$.ajax({
    url: "../../../Pages/Template/g-footer.html",
    success: function (result) {
        document.getElementById('g-footer').innerHTML = result;
    }
});