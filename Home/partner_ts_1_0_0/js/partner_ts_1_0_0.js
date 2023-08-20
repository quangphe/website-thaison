var slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    autoHeight: true,
    nav: false,
    navPosition: 'bottom',
    controlsContainer: '#slider-nav',
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 3,
        }
    },
});