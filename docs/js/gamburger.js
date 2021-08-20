(function () {

    "use strict";

    var toggles = document.querySelectorAll("[data-menu-toggle]");

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
    // const bodyElement = document.querySelector('body')
    const htmlElement = document.querySelector('html')
    // const overlayElement = document.querySelector('#overlay')    
    const mobileMenuToggle = document.querySelector('[data-menu-toggle]')
    const mobileMenu = document.querySelector('[data-mobile-nav]')

    // когда кликаем, эл-там добавляется 'active'
    mobileMenuToggle.addEventListener('click', function () {

        if (this.classList.contains('active')) {
            mobileMenu.classList.add('active')
            // overlayElement.classList.add('active')           
            // bodyElement.classList.add('noscroll', 'active-menu')

            // скролим до конца вверх-влево экрана (чтобы гамбургер был виден полностью)
            window.scrollTo(0, 0);

            htmlElement.classList.add('noscroll', 'active-menu')

        } else {
            mobileMenu.classList.remove('active')
            // overlayElement.classList.remove('active')           
            // bodyElement.classList.remove('noscroll', 'active-menu')
            htmlElement.classList.remove('noscroll', 'active-menu')
        }
    })

    //     Запрещаем скролл у html, когда открыто мобильное меню
    mobileMenu.addEventListener(' ', function () {

        this.classList.remove('active')
        // overlayElement.classList.remove('active')          
        mobileMenuToggle.classList.remove('active')
        // bodyElement.classList.remove('noscroll')
        htmlElement.classList.remove('noscroll')
    })

    // при изменении ширины окна-экрана убираем 'active' и 'noscroll'
    window.addEventListener('resize', function () {
        mobileMenu.classList.remove('active')
        // overlayElement.classList.remove('active')      
        mobileMenuToggle.classList.remove('active')
        // bodyElement.classList.remove('noscroll')
        htmlElement.classList.remove('noscroll')
    })
})();


// По клику на ссылку она становится активной
const links = document.querySelectorAll('[data-link]')

for (let link of links) {
    link.addEventListener('click', () => {
        clearActiveClasses()
        link.classList.add('active')
    })
}

function clearActiveClasses() {
    links.forEach((link) => {
      link.classList.remove('active')
    })
  }