// скрываем-показываем секцию при клике на галочку
'use strict' // - строгий режим

// ищем все node-элементы (узлы DOM) c дата-атрибутом и записываем в переменную
const check = document.querySelectorAll('[data-hide]')

// получаем ширину экрана и записываем ее в переменную
let windowInnerWidth = window.innerWidth

// отслеживаем изменение ширины окна через событие onresize объекта window, запускаем ф-цию start
window.onresize = start

function start() {
  windowInnerWidth = window.innerWidth
  // всем найденным нодам добавляем прослушиватель
  check.forEach(el => {
    // проверяем ширину экрана
    // если ширина экрана меньше, чем 1024px, то добавляем прослушиватель, иначе убираем прослуш-ль
    if (windowInnerWidth < 1024) {
      el.addEventListener("click", checkClick);
    } else {
      el.removeEventListener("click", checkClick)
    }
  });
}

function checkClick(event) {
  //  остановила распространение события с помощью метода stopPropagation() объекта Event:
  event.stopPropagation()

  // сохраняем в переменную contentBlock значение (1,2,3.....) атрибута hide 
  let contentBlock = event.target

  let contentBlockNumber = contentBlock.dataset.hide

  // ищем дата-атрибут в другом блоке с тем же значением, который только что нашли (1,2,3.....) в предыд.строке
  let toggleBlock = document.querySelector(`[data-section="${contentBlockNumber}"]`)

  if (toggleBlock.classList.contains('hidden')) {
    toggleBlock.classList.remove('hidden')
    // поворачиваем галочку
    contentBlock.classList.remove('title4-down')
    contentBlock.classList.add('title4-up')
  } else {
    toggleBlock.classList.add("hidden")
    // поворачиваем галочку
    contentBlock.classList.remove('title4-up')
    contentBlock.classList.add("title4-down")
  }
  // toggleBlock.classList.toggle("hidden");
}





// -------  "счетчик" (передать значение переменной из одной функции в другую)  ???? -------
const cpuList = document.querySelectorAll('[data-cpu]')
console.log('cpuList', cpuList)
const ramList = document.querySelectorAll('[data-ram]')
const hddList = document.querySelectorAll('[data-hdd]')
const raidIntegrList = document.querySelectorAll('[data-raid-integr]')
const raidBuiltList = document.querySelectorAll('[data-raid-built]')
const cardBuiltList = document.querySelectorAll('[data-card-built]')
const pcieList = document.querySelectorAll('[data-pcie]')
const adddevList = document.querySelectorAll('[data-adddev]')
const powerList = document.querySelectorAll('[data-power]')
const connectList = document.querySelectorAll('[data-connect]')
const osList = document.querySelectorAll('[data-os]')

let inputCpuValue = ''
let inputRamValue = ''
let inputHddValue = ''
let inputRaidIntegrValue = ''
let inputRaidBuiltValue = ''
let inputCardBuiltValue = ''
let inputPcieValue = ''
let inputAdddevValue = ''
let inputPowerValue = ''
let inputConnectValue = ''
let inputOsValue = ''

cpuList.forEach(cpuItem => cpuItem.addEventListener("click", cpuClick))

function cpuClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  console.log('Был клик')
  // забираем и отправляем содержимое инпута
  inputCpuValue = event.target.value
}

ramList.forEach(ramItem => ramItem.addEventListener("click", ramClick))

function ramClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputRamValue = event.target.value
}

hddList.forEach(hddItem => hddItem.addEventListener("click", hddClick))

function hddClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputHddValue = event.target.value
}

raidIntegrList.forEach(raidIntegrItem => raidIntegrItem.addEventListener("click", raidIntegrClick))

function raidIntegrClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputRaidIntegrValue = event.target.value
}

raidBuiltList.forEach(raidBuiltItem => raidBuiltItem.addEventListener("click", raidBuiltClick))

function raidBuiltClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputRaidBuiltValue = event.target.value
}

cardBuiltList.forEach(cardBuiltItem => cardBuiltItem.addEventListener("click", cardBuiltClick))

function cardBuiltClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputCardBuiltValue = event.target.value
}

pcieList.forEach(pcieItem => pcieItem.addEventListener("click", pcieClick))

function pcieClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputPcieValue = event.target.value
}

adddevList.forEach(adddevItem => adddevItem.addEventListener("click", adddevClick))

function adddevClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputAdddevValue = event.target.value
}

powerList.forEach(powerItem => powerItem.addEventListener("click", powerClick))

function powerClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputPowerValue = event.target.value
}

connectList.forEach(connectItem => connectItem.addEventListener("click", connectClick))

function connectClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  inputConnectValue = event.target.value
}

osList.forEach(osItem => osItem.addEventListener("click", osClick))

function osClick(event) {
  console.log('event.target', event.target)
  // event.preventDefault()
  console.log('Был клик')

  inputOsValue = event.target.value
}