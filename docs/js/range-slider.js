// объявляем input 
let inpSlider = document.querySelector('[data-input-slider]')
let inpValue = 0
let maxRange = 0
let srokLizing = 12

const totalAmountPl = document.querySelector('[data-total]')
const advancePl = document.querySelector('[data-advance]')
const monthlyPayPl = document.querySelector('[data-monthly]')
const periods = document.querySelectorAll('[data-period]')

// По клику на "радио"-кнопку кнопка становится активной
for (let period of periods) {
  period.addEventListener('click', () => {
    clearActiveClasses()
    period.classList.add('active')
    srokLizing = +period.innerHTML.slice(0, 2)
    fSetPosition(inpValue)
  })
}

// объявляем слайдер-ползунок
$('[data-range-slider]').ionRangeSlider({
  type: 'single',
  min: 0,
  max: 4000000,
  from: 1600000,
  // to: 500,
  // step: 100,
  // grid: true,
  skin: "round",
  // prefix: '$',
  // prettify: true,

  onStart: function (data) {
    // Called right after range slider instance initialised - Отображение первоначального значения в поле ввода
    inpSlider.value = data.from
    inpValue = data.from
    maxRange = data.max

    fSetPosition(data.from)
  },
  // hasGrid: true,

  onChange: function (data) {
    // Called every time handle position is changed - дергаем бегунок
    inpValue = data.from
  },

  onFinish: function (data) {
    // Called then action is done and mouse is released
    fSetPosition(data.from)
  },

  // onUpdate: function (data) {
  // Called then slider is changed using Update public method
  // },
})

// делаем доступ к обмену данными между слайдером-ползунком и инпутом (полем ввода)
let my_range = $('[data-range-slider]').data('ionRangeSlider')

// значение из слайдера(бегунок) передаем в input(поле ввода)
function setInput(value) {
  inpSlider.value = value
}

// значение из input (поле ввода) передаем в слайдер(бегунок)
function setSl(value) {
  if (value >= maxRange) {
    value = maxRange
    inpSlider.value = value
  }

  my_range.update({
      from: value,
    },
    fSetPosition(value)
  )
}

function toRazr(value) {
  let strNum3 = String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  return strNum3
}

function fChange(position, value) {
  position.innerHTML = `${toRazr(value)} ₽`
}

function fSetPosition(inpValue) {
  let totalAmount = Math.ceil(inpValue * 1.15)
  let payment = Math.ceil((totalAmount / 100) * 30)
  let monthlyPayment = Math.ceil((totalAmount - payment) / srokLizing)

  // Передаем данные с бегунка в текстовое поле - правая колонка с итогами
  fChange(totalAmountPl, totalAmount)
  fChange(advancePl, payment)
  fChange(monthlyPayPl, monthlyPayment)
}

function fPeriod12() {
  srokLizing = 12
  period24.classList.remove('active')
  period12.classList.add('active')
  fSetPosition(inpSlider.value)
}

function fPeriod24() {
  srokLizing = 24
  period12.classList.remove('active')
  period24.classList.add('active')
  fSetPosition(inpSlider.value)
}

function clearActiveClasses() {
  periods.forEach((period) => {
    period.classList.remove('active')
  })
}