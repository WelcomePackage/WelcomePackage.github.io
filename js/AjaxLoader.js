$.ajax({
    url: "../../pages/Template/g-nav.html",
    success: function (result) {
        document.getElementById('g-nav').innerHTML = result;
    }
});
$.ajax({
    url: "../../pages/Template/g-footer.html",
    success: function (result) {
        document.getElementById('g-footer').innerHTML = result;
    }
});
//$.ajax({
//    url: "../Template/GroupsQuickAccess.html",
//    success: function (result) {
//        document.getElementById('g-gr-q-access').innerHTML = result;
//    }
//});