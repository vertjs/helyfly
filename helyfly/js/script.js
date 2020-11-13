let ready = () => {
  document.querySelectorAll(".ibg").forEach(el => {
    if(el.querySelector('img')) {
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
      el.querySelector('img').style.minWidth = '100%';
      el.querySelector('img').style.visibility = 'hidden';
     
    }
  });

}

document.addEventListener("DOMContentLoaded", ready);

const buttonPlay = document.querySelector('.section-1__item-2__bg.ibg').querySelector('button')

const ifr = document.querySelector('.section-1__item-2__bg.ibg').querySelector('iframe')
const listMarker =document.querySelector('.section-1__item-1').querySelectorAll('li')

/* added background-image to li, instead standart marker  */
Array.from(listMarker).forEach((el, i) => { 
  el.style.background = 'url(' + '../img/icons/list/0' + ++i +'.svg' + ') no-repeat left center';
})

/* display video on click */
buttonPlay.addEventListener('click', videoPlay) 

function videoPlay(event) {
  ifr.classList.toggle('active')
  event.target.remove()
  event.preventDefault();
} 
