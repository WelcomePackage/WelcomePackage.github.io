


$(document).ready(function () {
    $.ajax({
        url: "../../KB/Template/p-links.html",
        success: function (result) {
            document.getElementById('p-links').innerHTML = result;
        }
    });
    //$.ajax({
    //    url: "../../../Pages/Template/g-footer.html",
    //    success: function (result) {
    //        document.getElementById('g-footer').innerHTML = result;
    //    }
    //});
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