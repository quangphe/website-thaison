document.getElementById("headerMenuBtn").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.toggle("show");
    document.getElementById("headerBg").classList.toggle("active");
    document.getElementById("menuMain").classList.toggle("active");
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.remove("show");
    document.getElementById("headerBg").classList.remove("active");
    document.getElementById("menuMain").classList.remove("active");
});

const menuItem = document.querySelectorAll(".header_ts_1_0_0__menuItem");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

document.addEventListener("scroll", function() {
    myLazy('img.lazy', 'src');
    myLazy('source.lazy', 'srcset');
    myLazy('.lazy-bg', 'img-bg');
    myLazy('.load', 'loaded');
    myLazy('.slide_run', 'slide');
    onScroll('.header_1_1_0__list a', 'section', 'active');
});
LazyShowScreen('img.lazy', 'src')

scrollClick('.header_1_1_0__list a, a[href="#pageReg"]');