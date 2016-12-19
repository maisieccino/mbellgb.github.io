$(function() {
    FastClick.attach(document.body);
});

// $('.jumbo').each(function () {
//     var imgUrl = $(this).data('img');
//     if (imgUrl) {
//         console.log(imgUrl);
//         $(this).css("background-image", "url("+imgUrl+")");
//     }
// });


// This fixes the weird page jumping thing on mobile browsers.
// http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
var jumbo = $('.jumbo-home');
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    jumbo.height(jQuery(window).height());
}
resizeBackground();

$('#entry-button').click(function() {
    console.log("ouch");
    $('html, body').animate({
        scrollTop: $('.main').offset().top
    }, 1000);
});

$('.menu-button').click(function() {
    $(this).toggleClass('active');
    $('body').toggleClass('active');
});

$('.container').click(function () {
    $('.menu-button').removeClass('active');
    $('body').removeClass('active');
});
