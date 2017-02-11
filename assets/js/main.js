$(function() {
    FastClick.attach(document.body);
});

$.fn.exists = function() {
    return this.length !== 0;
}

// $('.jumbo').each(function () {
//     var imgUrl = $(this).data('img');
//     if (imgUrl) {
//         console.log(imgUrl);
//         $(this).css("background-image", "url("+imgUrl+")");
//     }
// });


// This fixes the weird page jumping thing on mobile browsers.
// http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
jQuery(window).resize("resizeBackground");
var resizeFactor = function() {
    var width = jquery(window).width;

    if (width > 2500) {
        return 0.9;
    }
    else if (width < 750) {
        return 0.7;
    }
    else return 0.8;
};
function resizeBackground() {
    var jumbo = $('.jumbo-home');
    if (jumbo.exists()) {
        jumbo.height(resizeFactor * jQuery(window).height());
    }
}
resizeBackground();

// Red dots on titles
var jumboTitle = $('.jumbo h1');
jumboTitle.html(jumboTitle.html().replace(/\.$/,''));
jumboTitle.html(jumboTitle.html() + '<span class="red">.</span>');

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
