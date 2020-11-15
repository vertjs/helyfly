let ready = () => {
  document.querySelectorAll(".ibg").forEach(el => {
    if(el.querySelector('img')) {
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
      el.querySelector('img').style.minWidth = '100%';
      el.querySelector('img').style.visibility = 'hidden';
    }
  });

  if(screen.width < 920) {
    console.log(document.querySelector('.section-1__item-2'))

    document.querySelector('.section-1__item-1').insertAdjacentHTML('afterend', 
    '<div class="section-1__item-2"><img src="./img/photo/posterimage.jpg" alt="kiss"><iframe src="https://www.youtube.com/embed/W4YJ0jMmp_o?rel=0" frameborder="0" allow="accelerometer" allowfullscreen encrypted-media gyroscope picture-in-picture data-play="0"></iframe><button></button>Your browser does not support the video or formats.</div>'
    )
  }
}

document.addEventListener("DOMContentLoaded", ready);

const buttonPlay = document.querySelector('.section-1__item-2').querySelector('button')

const ifr = document.querySelector('.section-1__item-2').querySelector('iframe')
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
