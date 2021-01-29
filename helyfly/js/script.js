const listMarker = document.querySelector('.section-1__item-1').querySelectorAll('li')


let ready = () => {
  document.querySelectorAll(".ibg").forEach(el => {
    if(el.querySelector('img')) {
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
      el.querySelector('img').style.minWidth = '100%';
      el.querySelector('img').style.visibility = 'hidden';
    }
  });
  Array.from(listMarker).forEach((el, i) => marksScreenDesktop(el, i))
  if(screen.width < 921) {
    document.querySelector('.section-1__item-1').insertBefore(
      document.querySelector('.section-1__item-2'),
      document.querySelector('.section-1__item-1 > div')
    )
    Array.from(listMarker).forEach((el, i) => marksScreenMobile(el, i))
    document.querySelector('.section-3 > p').textContent += ':'
  }
  Array.from(listMarker).forEach((el, i) => marksScreenDesktop(el, i))
}

document.addEventListener("DOMContentLoaded", ready);

const buttonPlay = document.querySelector('.section-1__item-2').querySelector('button')

const ifr = document.querySelector('.section-1__item-2').querySelector('iframe')

function marksScreenMobile(el, i) {
  el.style.background = 'url(' + '../img/icons/list_m/0' + ++i +'.svg' + ') no-repeat left center';
}

function marksScreenDesktop(el, i) {
  el.style.background = 'url(' + '../img/icons/list_d/0' + ++i +'.svg' + ') no-repeat left center';
}
/* display video on click */
buttonPlay.addEventListener('click', videoPlay) 

function videoPlay(event) {
  ifr.classList.toggle('active')
  event.target.remove()
  event.preventDefault();
} 

document.addEventListener("load", addColon);

function addColon() {
  if(screen.width < 921) {
    document.querySelector('.section-3 > p').textContent = document.querySelector('.section-3 > p').textContent.slice(0, -1)
    document.querySelector('.reserved__content p').textContent = document.querySelector('.reserved__content p').textContent.slice(0, -1)
  } else if(screen.width > 920) {
    document.querySelector('.section-3 p').textContent += ':'
    document.querySelector('.reserved__content p').textContent += ':'
  }
}