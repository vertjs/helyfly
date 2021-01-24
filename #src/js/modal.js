const d = document.querySelector('#date')
const datepickerToggle = document.querySelector('.datepicker-toggle')
const inputs = document.querySelectorAll('.modal input')
const agree = document.querySelector('.label__after')
const modal = document.querySelector('.modal')
const exit = document.querySelector('.close')
let p = document.createElement('p')
datepickerToggle.append(p)
const label = document.querySelector("label[for='agree']")

d.addEventListener('input', handleInputDate) // ввести дату

exit.addEventListener('click', handleClose) // закрыть модальное окно

function handleInputDate(event) {
  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.')
  }
  p.textContent = convertDate(event.target.value)
}

function handleClose(e) {
  modal.classList.toggle('on', false)
}

const form = document.querySelector('.modal form')
const subm =  document.querySelector('.submit')

subm.addEventListener('click', (e) => { // подтвердить бронирование
  e.preventDefault()
  let arr = []
  Array.from(inputs).filter(el => {
    el.classList.toggle('empty', !el.value)
    el.id === 'date' ? el.parentElement.classList.toggle('empty', !el.value) : ''
    !document.querySelector('.label__after').classList.contains('check') ? 
    document.querySelector('.label__after').classList.add('red') : ''

    el.value ? arr.push(el) : ''
  })
  if(arr.length === inputs.length) {
    modal.classList.toggle('on', false) 
    Array.from(inputs).forEach(el => el.value = null)
    agree.classList.toggle('check', false)
    document.querySelector('.datepicker-toggle p').textContent = null
  }
})

agree.addEventListener('click', handleAgree) // согласиться с условиями
label.addEventListener('click', (e) => { // согласиться с условиями
  e.preventDefault()
  agree.classList.toggle('check')
}) 

function handleAgree(e) {
  e.target.classList.toggle('check')
}

const email = document.querySelector('#email')
const mobile = document.querySelector('#mobile')

const card = document.querySelector('#card')
const expires = document.querySelector('#expires')
const cvv = document.querySelector('#cvv')


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const CARD_REGEX =  /(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm;
const EXPIRES_REGEX = /^(0[1-9]|1[0-2])\D{3}([0-9]{4}|[0-9]{2})$/;


email.addEventListener('change', handleInput) // проверка полей для email & mobile
mobile.addEventListener('change', handleInput)
card.addEventListener('change', handleInput)
expires.addEventListener('change', handleInput)
cvv.addEventListener('input', addEncrypt)
expires.addEventListener('input', addSlash)

function handleInput(event) {
  let {value} = event.target
  let {id} = event.target

  switch(id) {
    case 'email':
      !EMAIL_REGEX.test(value) ? noteError(event) : '';
      break;
    case 'mobile':
      !PHONE_REGEX.test(value) ? noteError(event) : '';
      break;
    case 'expires':
      !EXPIRES_REGEX.test(value) ? noteError(event) : '';
      break;
    case 'cvv':
      !CVV_REGEX.test(value) ? noteError(event) : '';
      break;
    case 'card':
      !CARD_REGEX.test(value) ? noteError(event) : ''
      break;
  }

  function noteError(event) {
    event.preventDefault()   
    event.target.setCustomValidity('Поле заполнено неверно')
    event.target.reportValidity()
  }
}

function addEncrypt(event) {
  let re = /[0-9]/gi;
  let {value} = event.target
  event.target.value = value.replace(re,'*')
}

function addSlash(event) {
  let {value} = event.target
  value.length === 2 ? event.target.value += ' / ' : ''
}