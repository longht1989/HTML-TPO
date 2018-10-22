/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // affix site header
    var headerHeight = $('.site-header').height();
    $('.site-header').affix({
        offset: headerHeight
    })
    // go to top
    $("#go-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    // toggle header menu
    $('.sprites-menu').click(function() {
        $(this).toggleClass('is-active');
        $(".sprites-search").removeClass('is-active');
        $("#search").slideUp();
        $("#category").slideToggle();
        // $(".menu__listing").toggleClass('m-show');
    });
    $('.sprites-search').click(function() {
        $(this).toggleClass('is-active');
        $(".sprites-menu").removeClass('is-active');
        $("#category").slideUp();
        $("#search").slideToggle();
        // $(".menu__listing").toggleClass('m-show');
    });
    // aminate fade in index section
    window.sr = ScrollReveal({ reset: true });
    // ScrollReveal({ distance: '90px' });
    sr.reveal('.smooth', { easing: 'ease-in' });
    sr.reveal('.sr-left', { origin: 'left' });
    sr.reveal('.sr-top', { origin: 'top' });
    sr.reveal('.sr-right', { origin: 'right' });
    sr.reveal('.sr-bottom', { origin: 'bottom' });
    // hover action video featured
    var videosource = $(".cover__listing li").attr('data-video');
    $(".cover__listing li").hover(
        function() {
            var videosource = $(this).attr('data-video');
            $('.bg-video').replaceWith('<div class="bg-video"><video id="video_background" preload="auto" autoplay="true" loop="loop" muted="" volume="0"><source src="' + videosource + '.webm" type="video/webm" /><source src="' + videosource + '.ogv" type="ogg ogv" ; codecs="theora, vorbis" /><source src="' + videosource + '.mp4" type="video/mp4"></video></div>');
            $('.bg-mask').css("opacity", "0.5");
            $(".bg-video").css('opacity', 0).animate({ opacity: 1 }, 1000);
        },
        function() {
            $('.bg-video').replaceWith('<div class="bg-video"></div>');
            $('.bg-mask').css("opacity", "0.9");
        });
    //scroll animated
    $(".cover__listing li a").click(function() {
        var zoneid = $(this).attr('data-href');
        $('html, body').animate({
            scrollTop: $("#" + zoneid).offset().top - $('.site-header').height()
        }, 500);
    });
});