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
    mobileMenu.addEventListener('click ', function () {
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

// --------------------------
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

// --------------------------
// По клику на search (лупу) активен инпут, добав. кнопка cross и вертик. бордер у инпута (при расширении <1024px)

const searchIcon = document.querySelector('[data-search-icon]')
const searchInput = document.querySelector('[data-search-input]')
const searchCross = document.querySelector('[data-search-cross]')
const searchActive = document.querySelector('[data-search-active]')
const logo = document.querySelector('.header-logo')
console.log('logo', logo)

searchIcon.addEventListener("click", openSearch);
searchCross.addEventListener('click', closeSearch)

let inputText = ''

function openSearch(event) {
    // запретила отправку формы при нажатии на кнопку лупа, инпут не закрывается 
    event.preventDefault()

    const screenWidth = window.screen.width
    const searchInputText = document.querySelector('[data-search-input]')

    // забираем и отправляем содержимое инпута
    inputText = searchInputText.value


    if (screenWidth < 1024) {
        searchInput.classList.remove('hidden')
        searchInput.classList.add('header-search__input-active')
        searchCross.classList.add('header-search__cross')
        searchActive.classList.add('header-search-active')
    }

    if (screenWidth < 600) {
        searchInput.classList.remove('hidden')
        searchInput.classList.add('header-search__input-active')
        searchCross.classList.add('header-search__cross')
        searchActive.classList.add('header-search-active')

        logo.style.display = 'none'
    }

    // очищаем поле инпута
    searchInput.value = ""
}

function closeSearch(event) {
    // запретила отправку формы по нажатию на кнопку cross при закрытии инпута
    event.preventDefault()

    // очищаем поле инпута
    searchInput.value = ""

    searchInput.classList.add("hidden")
    searchInput.classList.remove('header-search__input-active')
    searchCross.classList.remove('header-search__cross')
    searchActive.classList.remove('header-search-active')
    
    logo.style.display = 'flex'
}