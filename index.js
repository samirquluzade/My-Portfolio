$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navbar").css("background" , "black");
        }
        else{
            $(".navbar").css("background" , "transparent");
        }
    })
});
$("#ab").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#know").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#elaqe").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#ab1").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#know1").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#elaqe1").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#home1").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
$("#buttoncontact").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
});
