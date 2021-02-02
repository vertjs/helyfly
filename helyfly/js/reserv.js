const btn = document.querySelector('.main-screen__reserv')
const page = document.querySelector('.page')
let glass = document.createElement('div')
glass.classList.add('glass')
btn.addEventListener('click', handleReserv)

function handleReserv(e) {
  e.preventDefault()
  modal.classList.toggle('on')  
  page.prepend(glass)
}