let lang = document.querySelector('option').getAttribute('value')

let h1 = document.querySelector('h1')
let h1Ru = h1.cloneNode(true)
const parentH1 = document.querySelector('.main-screen__heading')
const parentPrice = document.querySelector('.main-screen__block')
const parentReserve = document.querySelector('.main-screen__reserv')
let span = document.querySelector('h1 > span')

let price = document.querySelector('.main-screen__block p')
const priceRu = price.cloneNode(true)
let reserve = document.querySelector('.main-screen__reserv p')
const reserveRu = reserve.cloneNode(true)

const language = {
  ru: {
    'h1': 'Эксклюзивная фотосессия при полете на вертолете',
    'price': 'Стоимость',
    'reserve': 'Забронировать место'
  },
  en: {
    'h1': 'Exclusive photo sessionwhile flying by helicopter',
    'price': 'Price',
    'reserve': 'Book your place'
  },
}

function handleSelect(elm) {
  if(elm.value === "EN") {
    h1.textContent = language.en.h1.split(' ')[0]
    span.textContent = language.en.h1.slice(9, 27)
    h1.append(span)
    h1.append(language.en.h1.slice(28, 35))
    let br = document.createElement('br')
    h1.append(br)
    h1.append(language.en.h1.slice(36, 49))
    price.textContent = language.en.price
    reserve.textContent = language.en.reserve
  } else if(elm.value === "RU") {
    h1.textContent = language.ru.h1.split(' ')[0]
    span.textContent = language.ru.h1.slice(12, 24)
    h1.append(span)
    h1.append(language.ru.h1.slice(24, 35))
    let br = document.createElement('br')
    h1.append(br)
    h1.append(language.ru.h1.slice(35, 49))
    price.textContent = language.ru.price
    reserve.textContent = language.ru.reserve
  }
}