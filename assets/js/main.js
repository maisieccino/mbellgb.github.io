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
resizeBackground = () => {
    var jumbo = $('.jumbo-home');
    if (jumbo.exists()) {
        jumbo.height(resizeFactor * jQuery(window).height());
    }
}
resizeBackground();
$(window).resize(() => resizeBackground);

// Red dots on titles
var jumboTitle = $('.jumbo:not(.no-dot) h1');
if ($(jumboTitle).length) {
    jumboTitle.html(jumboTitle.html().replace(/\.$/,''));
    jumboTitle.html(jumboTitle.html() + '<span class="red">.</span>');
}

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

$('.modal-close').click(function () {
  $(this).parent().fadeOut();
});

$(".stickerView path, .stickerView ellipse").click(function () {
  const id = $(this).attr("id");
  const sticker = stickers[id];
  console.log(sticker.img);
  $("#stickerDetailName").text(sticker.name);
  $("#stickerDetailDescription").text(sticker.description || "");
  $("#stickerDetailDate").text(`Date obtained: ${sticker.date || "Unknown"}`);
  $("#stickerDetailImg").toggleClass("invisible", !sticker.img);
  $("#stickerDetailImg").attr("src", sticker.img || "");
  $(".sticker-modal").fadeIn();
});
