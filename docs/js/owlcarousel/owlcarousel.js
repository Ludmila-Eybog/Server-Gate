// убеждаемся, что вся стр-ца загружена, все картинки загружены, плагин с каруселью загружен
$(document).ready(function () {
    // через селектор jquery находит элемент по id #carousel1 (или по классу .owl-carousel) и к нему применяется метод Карусель .owlCarousel
    $("#carousel1").owlCarousel({
        items: 7,
        nav: true,
        loop: true,
        margin: 10,
        dots: false,
        navSpeed: 800,
        // interval: 2000,
        // navText: ['', ''],

        // COUNTER of Carousel- счетчик слайдов /см. ниже/
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter, //When the translation of the stage has finished.
        // -------------------

        responsive: {
            0: {
                items: 1
            },
            390: {
                items: 1,
                stagePadding: 35
            },
            500: {
                items: 1,
                stagePadding: 75
            },
            650: {
                items: 2,
                stagePadding: 55
            },
            900: {
                items: 3,
                loop: true,
                stagePadding: 55
            },
            1024: {
                items: 3,
                loop: false,
                stagePadding: 0
            }
        }
    });

    // через селектор jquery находит элемент по id #carousel2 (или по классу .owl-carousel) и к нему применяется метод Карусель .owlCarousel
    $("#carousel2").owlCarousel({
        items: 8,
        nav: true,
        loop: true,
        margin: 0,
        dots: false,
        navSpeed: 800,
        responsive: {
            1024: {
                items: 3
            },
            1250: {
                items: 4
            }
        }
    });

    // через селектор jquery находит элемент по id #carousel2 (или по классу .owl-carousel) и к нему применяется метод Карусель .owlCarousel
    $("#carousel3").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 10,
        dots: false,
        navSpeed: 800,

        // COUNTER of Carousel- счетчик слайдов /см. ниже/
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter, //When the translation of the stage has finished.
        // -------------------

        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });

    // COUNTER of Carousel - счетчик слайдов /см. выше/
    function counter(event) {

        var element = event.target; // DOM element, in this example .owl-carousel

        var owlItems = $(element).find('.owl-item').length;
        // console.log(owlItems);

        var items = event.item.count; // Number of items
        // var item = event.item.index + 1 ; // Position of the current item      - исходный код

        var cloned = (owlItems - items) / 2;

        // var item = event.item.index + 1 ; // Position of the current item       --- мой вариант ---
        var item = event.item.index - cloned + 1; // Position of the current item       --- мой вариант ---


        // it loop is true then reset counter from 1
        if (item > items) {
            item = item - items;
        }

        if (item <= 0) {
            item = item + items;
        }

        $(element).parent().find('.counter').html(`<span>${item}</span>` + "/" + items) // - мой вариант
        // $(element).parent().find('.counter').html("item " + item + " of " + items)      - исходный код

        window.e = event;
    }
    // -------------------  End COUNTER of Carousel

    // ВЫПАДАЮЩЕЕ ОКНО в Carousel1
    // With the above scripts loaded, you can call `tippy()` with a CSS
    // selector and a `content` prop:
    tippy('.card-top_gear', {
        placement: 'bottom',
        content: 'Сконфигурируйте свой сервер на основе данной модели',
        duration: 100,
        delay: [200, 200],
    });
    // -------------------  End ВЫПАДАЮЩЕЕ ОКНО в Carousel1

    // ОТКЛЮЧЕНИЕ КАРУСЕЛИ

    // $('#carousel2').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    // $('#carousel2').find('.owl-stage-outer').children().unwrap();

    // find element
    $owl = $('body').find('#carousel2');

    // set the owl-carousel otions
    var carousel_Settings = {
        touchDrag: true,
        mouseDrag: true
    };

    function initialize() {
        //   var containerWidth = $('body').find('.navbar').outerWidth();
        //   if(containerWidth <= 767) {
        // Добавляем проверку размера экрана     --- мой вариант ---
        if ($(window).width() >= 1024) {
            // initialize owl-carousel if window screensize is less the 767px
            $owl.owlCarousel(carousel_Settings);
            $owl.addClass('owl-carousel', 'owl-loaded', 'owl-drag'); //  --- мой вариант ---
            $owl.removeClass('owl-dots'); //  --- мой вариант ---
        } else {
            // destroy owl-carousel and remove all depending classes if window screensize is bigger then 767px
            $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $owl.find('.owl-stage-outer').children().unwrap();
        }
    }

    // initilize after window resize
    var id;
    $(window).resize(function () {
        clearTimeout(id);
        // id = setTimeout(initialize, 500);
        id = setTimeout(initialize, 200);
    });

    // initilize onload
    initialize();

    // -------------------  End ОТКЛЮЧЕНИЕ КАРУСЕЛИ

});