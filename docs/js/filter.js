(function () {

  "use strict";

  //-показать мобильное меню
  const htmlElementFilter = document.querySelector('html')
  const mobileFilterMenu = document.querySelector('[data-filter-menu]')
  const mobileFilterOpen = document.querySelector('[data-filter-open]')
  const mobileFilterClose = document.querySelector('[data-filter-close]')  

  // когда кликаем по открывающей кнопке, эл-там добавляется 'active', т.е. открываем модальное окно
  mobileFilterOpen.addEventListener('click', () => {

    mobileFilterOpen.classList.add("active")
    mobileFilterMenu.classList.remove('hidden') 
    mobileFilterClose.classList.add('active') 
  })

  // когда кликаем по закрывающей кнопке, у эл-тов убираем 'active', т.е. закрываем модальное окно
  mobileFilterClose.addEventListener('click', function () {

    mobileFilterMenu.classList.add('hidden')
    mobileFilterOpen.classList.remove('active') 
    htmlElementFilter.classList.remove('noscroll')
  })

  // при изменении ширины окна-экрана убираем 'active' и 'noscroll'
  window.addEventListener('resize', function () {
    mobileFilterMenu.classList.remove('active')
    mobileFilterOpen.classList.remove('active')
    htmlElementFilter.classList.remove('noscroll')
  })

  // Фильтрация заказов
  const containerEl = document.querySelector('[data-filter-section]');
  const mixer = mixitup(containerEl);

  // При клике на эл-т FilterItem в мобильном меню
  let filterItems = document.querySelectorAll("[data-filter-item]");

  // Циклом перебираем FilterItem(ы) и ищем эл-т, по которому кликнули
  for (let i = filterItems.length - 1; i >= 0; i--) {
    filterItems[i].addEventListener("click", (e) => {
      e.preventDefault();

      clearActiveClasses()

      filterItems[i].classList.add("active")
      mobileFilterMenu.classList.add("hidden")
    })
  }

  function clearActiveClasses() {
    filterItems.forEach((filterItem) => {
      filterItem.classList.remove('active')
    })
  }
})();