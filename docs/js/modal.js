// ;  // нужна для сборщика функций (файлов)
// (function () {
'use strict' // - строгий режим

var modal = document.querySelector('[data-modal]')

//-показать модальное окно
const formElement = document.querySelector('[data-leasing-form]')
const leasingBtn = document.querySelectorAll('[data-leasing-btn]')
const bodyElement = document.querySelector('body')
const htmlElement = document.querySelector('html')
const overlayElement = document.querySelector('[data-overlay]')

for (var i = leasingBtn.length - 1; i >= 0; i--) {
  var item = leasingBtn[i]

  // когда кликаем, эл-там добавляется 'active'
  item.addEventListener('click', openModal)
}

function openModal(e) {
  e.preventDefault()
  document.querySelector('[data-modal]').classList.add('active')
  overlayElement.classList.add('active')
  //     Запрещаем скролл у body, когда открыто мобильное окно
  bodyElement.classList.add('noscroll')
  // htmlElement.classList.add('noscroll')

  // плавность открытия окна
  setTimeout(() => {
    document.querySelector('[data-modal]').classList.add('animation')
    overlayElement.classList.add('animation')
  }, 0)
}

//-скрыть модальное окно
const closeModalCross = document.querySelector('[data-cross]')

closeModalCross.addEventListener('click', closeModal)

function closeModal() {
  overlayElement.classList.remove('active')
  bodyElement.classList.remove('noscroll')
  // htmlElement.classList.remove('noscroll')

  // плавность скрытия окна
  setTimeout(() => {
    modal.classList.remove('active')
    overlayElement.classList.remove('active')
  }, 500)

  modal.classList.remove('animation')
  overlayElement.classList.remove('animation')

  return true
}

// при изменении ширины окна-экрана убираем 'active' и 'noscroll'
window.addEventListener('resize', function () {
  // bodyElement.classList.remove('noscroll')
  // htmlElement.classList.remove('noscroll')
  // overlayElement.classList.remove('active') 
})
// })()

// FORM VALIDATE - Проверка отправки формы
// Обращаюсь к Форме, т.е. ее НАХОЖУ и применяю метод .VALIDATE, который описан в библиотеке Jquery, которую мы добавили скриптом
// метод - функция, которой(ей) мы передаем параметры, которые помогут провести валидацию
// Создаем правила:
// Параметры: rules (правила), которые пишутся для каждого input, который выбирается по имени, например, email

$('[data-leasing-form]').validate({
  rules: {
    // name: {
    //   required: true
    // },
    name: 'required', // равнозначно с предыдущей записью
    phone: {
      required: true,
      digits: true // только цифры
    },
    email: {
      required: true, // отвечает за заполненность поля, д.б. обязательно заполнено
      email: true // корректность заполнения поля, присутствует ли символ @
    },
    agreement: {
      required: true
    }
  },

  messages: {
    // этот метод будет показывать сообщение, если какое-либо поле заполнено неверно
    name: {
      required: 'Введите Ваше имя'
    },
    phone: {
      required: 'Введите Ваш номер телефона',
      digits: 'Введите цифры'
    },
    email: {
      required: 'Введите Ваш e-mail',
      email: 'Отсутствует символ @' // или "Адрес д.б. вида name@domain.com"
    },
    agreement: {
      required: 'Поле обязательно к заполнению.'
    }
  },

  // Если все прошло успешно, скрипт доходит до функции отправки submitHandler, где функция ajaxFormSubmit в качестве аргумента будет принимать мою форму тег form
  submitHandler: function (form) {
    //  после успешной валидации добавили функцию отправки
    ajaxFormSubmit();
  }
});

//  Функция AJAX запроса на сервер
// ( AJAX-запрос хорош тем, что при отправке формы на сервер страница не перезагрузится, т.е. мы останемся на той же стр-це)
function ajaxFormSubmit() {
  let string = $('[data-leasing-form]').serialize(); //Сохраняем методом .serialize() в виде строки-string данные, введенные в форму.

  // Формируем ajax запрос
  $.ajax({
    type: 'POST', //Тип запроса - POST
    url: '/php/mail.php', // Куда отправляем запрос
    data: string, // Какие данные отправляем, в данном случае отправляем переменную string

    // Функция, если все прошло успешно
    success: function (html) {
      $('[data-leasing-form]').slideUp(800); // плавно исчезает методом .slideUp(800) моя форма
      $('[data-form-answer]').html(html); // в див прописывается ответ
    }
  });
  // Чтобы по Submit больше ничего не выполнялось - делаем возврат false, чтобы прервать цепочку срабатывания остальных функций
  return false;
}
//  ----------------------------------

// Прикрепление файла :
// При клике пользователем на input с id="myfile", js начинает отслеживать его изменение. Дальше в дело вступает if (если). Если этот (this) input не пустой (то есть какой-то файл был выбран), то стоящий по соседству выше элемент (у нас это label) получит текст «Выбрано файлов» + кол-во файлов, которое выбрал пользователь. Если пользователь ничего не выбрал, то label получит текст «Выберите файлы»:
$('#myfile').change(function () {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
  else $(this).prev().text('Выберите файлы');
});