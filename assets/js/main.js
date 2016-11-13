$(function() {
    FastClick.attach(document.body);
});

$('.jumbo').each(function () {
    var imgUrl = $(this).data('img');
    if (imgUrl) {
        console.log(imgUrl);
        $(this).css("background-image", "url("+imgUrl+")");
    }
});
