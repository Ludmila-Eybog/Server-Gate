(function () {

    "use strict";

    var toggles = document.querySelectorAll(".gamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }
    //-показать мобильное меню
    const bodyElement = document.querySelector('body')
    // const overlayElement = document.querySelector('#overlay')
    const mobileMenuToggle = document.querySelector('#menu-toggle')
    const mobileMenu = document.querySelector('.mobile-nav')

    // когда кликаем, эл-там добавляется 'active'
    mobileMenuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            mobileMenu.classList.add('active')
            // overlayElement.classList.add('active')
            bodyElement.classList.add('noscroll')
        } else {
            mobileMenu.classList.remove('active')
            // overlayElement.classList.remove('active')
            bodyElement.classList.remove('noscroll')
        }
    })

    //     Запрещаем скролл, когда открыто мобильное меню
    mobileMenu.addEventListener('click', function () {
        this.classList.remove('active')
        // overlayElement.classList.remove('active')
        mobileMenuToggle.classList.remove('active')
        bodyElement.classList.remove('noscroll')
    })

    // при изменении ширины окна-экрана убираем 'active' и 'noscroll'
    window.addEventListener('resize', function () {
        mobileMenu.classList.remove('active')
        // overlayElement.classList.remove('active')
        mobileMenuToggle.classList.remove('active')
        bodyElement.classList.remove('noscroll')
    })
})();



