// AOS.init({disable: 'mobile'});
// $(window).on('scroll', function() {
//     var $this = $(this),
//         $header = $('.header');
//     var sectionStep = $('#step').offset().top - 100;
//     if ($this.scrollTop() >= sectionStep) {
//         $('.tab-item__media').addClass('media-animation');
//     }
//     if ($this.scrollTop() > 1) {
//         $header.addClass('scroll-nav');
//     }
//     else{
//         $header.removeClass('scroll-nav');
//     }
// });
// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
// $(document).mouseup(function (e){
//     var div = $('.header-phone');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $('.header-phone ul').removeClass('is-open');
//     }
// });
// $(function() {
//     var headerHeight = $('header').outerHeight(); // Target your header navigation here
//     $('.header-nav a').click(function(e) {
//         var targetHref   = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
//         }, 1000);
//         $('.header-nav__button').find('.icon').toggleClass('hidden');
//         $('.header-nav, .header-overlay').toggleClass('is-hidden');
//         $('body').toggleClass('scroll');
//         e.preventDefault();
//     });
// });
// $('.header-nav__button').on('click', function () {
//    var $this = $(this);
//     $this.find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.footer-nav').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-overlay').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-phone__btn').on('click', function () {
//     var $this = $(this);
//     $this.next().toggleClass('is-open');
// });
// function popupOpen() {
//     var $popupButton = $('.btn-popup');
//     $popupButton.on('click', function (e) {
//         var $this = $(this);
//         var popupButtonData = $this.data('popup');
//         $('.popup').removeClass('active');
//         $('div[data-popup = '+popupButtonData+']').addClass('active');
//         $('body').addClass('scroll');
//     });
// }
// popupOpen();
// $('.popup-close').on('click', function (e) {
//     var $this = $(this);
//     $this.parent().parent().removeClass('active');
//     $('.popup-overlay').removeClass('active');
//     $('body').removeClass('scroll');
// });
// $('.popup-overlay').on('click', function (e) {
//     var $this = $(this);
//     $this.removeClass('active');
//     $('.popup').removeClass('active');
//     $('body').removeClass('scroll');
// });
// function tabsInner(){
//     var tabItemNav = $('.tab-nav a');
//     var tabItem = $('.tab-item' );
//     tabItemNav.on('click', function(e){
//         e.preventDefault();
//         var $this = $(this),
//             tabItemId = $this.attr('href');
//         tabItemNav.removeClass('active');
//         $this.addClass('active');
//         tabItem.removeClass('active');
//         $('.tab-item__media').removeClass('media-animation');
//         $(tabItemId).addClass('active');
//         function explode(){
//             $('.tab-item__media').addClass('media-animation');
//         }
//         setTimeout(explode, 500);
//     });
// }
// tabsInner();
//
// if ($('.reviews-item').length > 3) {
//     $('.reviews-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.reviews-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.reviews-item:gt(2)').toggle();
// });
// if ($('.product-item').length > 3) {
//     $('.product-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.catalog-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.product-item:gt(2)').toggle();
// });
$('.solutions-item__tab-nav a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $thisData = $this.data('tab');
    $this.parents('.solutions-item__tab-nav').find('a').removeClass('active');
    $this.toggleClass('active');
    $this.parents('.solutions-item__tab-nav').next().find('.solutions-item__tab-item').removeClass('active');
    $this.parents('.solutions-item__tab-nav').next().find('div[data-tab = '+$thisData+']').toggleClass('active');
});
if ($(window).width() < 425) {
    $('.footer-item__title').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next().slideToggle();
    });
}
$('.hero-info__title span').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active').next().toggleClass('active');
});

const SwiperDefault = new Swiper('.js-swiper', { runCallbacksOnInit: false, speed: 350, threshold: 1, slidesPerView: 1.15, slidesPerGroup: 1, centeredSlides: true,
    breakpoints: { 992: { loop: true, slidesPerView: 1.5, pagination: { dynamicBullets: false, } } },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
    pagination: { el: '.swiper-pagination', dynamicBullets: true, clickable: true, } });
    const SwiperTimeline = new Swiper('.js-swiper-timeline', { runCallbacksOnInit: false, speed: 350, threshold: 1, slidesPerView: 1.1, slidesPerGroup: 1, centeredSlides: true,
    breakpoints: { 992: { slidesPerView: 1, pagination: { dynamicBullets: true, } } },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
    pagination: { el: '.swiper-pagination', dynamicBullets: true, clickable: true, }
});
$(window).on('scroll', function() {
    var $this = $(this);
    function scrollAnimate(){
        var st = $(this).scrollTop();
        $('.hero-media span').each(function (e) {
            // var offset = $(this).offset().top - 50;
            var offset = $(this).data('offset');
            var translate = "translate3d(0px,-"+ Math.round((st - offset) / 5 ) + "px, 0px)";
            $(this).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
        console.log(st);
    }
    scrollAnimate();
});
