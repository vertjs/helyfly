const btn = document.querySelector('.main-screen__reserv')
const wrapper = document.querySelector('.wrapper')
btn.addEventListener('click', handleReserv)

function handleReserv(e) {
  e.preventDefault()
  modal.classList.toggle('on')
/*   wrapper.style.backgroundColor = '#b9bcce' */
}