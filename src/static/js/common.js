AOS.init({disable: 'mobile'});
if ($(window).width() > 768) {
    $('.solutions-item__tab-nav a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $thisData = $this.data('tab');
        $this.parents('.solutions-item__tab-nav').find('a').removeClass('active');
        $this.toggleClass('active');
        $this.parents('.solutions-item__tab-nav').next().find('.solutions-item__tab-item').removeClass('active');
        $this.parents('.solutions-item__tab-nav').next().find('div[data-tab = '+$thisData+']').toggleClass('active');
    });
}
if ($(window).width() < 425) {
    $('.footer-item__title').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next().slideToggle();
    });
}
if ($(window).width() < 992) {
    $('.header-nav .menu-item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.find('.sub-menu').toggleClass('active');
    });
}
$(document).on('focus','.header-search', function (e) {
    $('.header-search').css('width', 'auto');
    $('.header-search').css('padding-left', '0');
});
$('.hero-info__title span').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active').next().toggleClass('active');
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active').parents('header').toggleClass('active');
    $('.page-content').toggleClass('active');
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
    var st = $(this).scrollTop();
    $('.hero-media span:nth-child(2), .hero-media span:nth-child(4)').css({
        'transform': 'translateY('+ (st/2)/40 +'%)'
    });
    $('.hero-media span:nth-child(1), .hero-media span:nth-child(3)').css({
        'transform': 'translateY(-'+ (st/2)/40 +'%)'
    });
    $('.hero-logo__item:nth-child(1)').css({
        'transform': 'translateX('+ (st/2)/100 +'%)'
    });
    $('.hero-logo__item:nth-child(2)').css({
        'transform': 'translateX(-'+ (st/2)/100 +'%)'
    });
    $('.bg-svg').css({
        'transform': 'translateY('+ (st/3)/100 +'%)'
    });

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
