ymaps.ready(init);

function init(){

  var myMap = new ymaps.Map("map", {
    center: [55.756514141750216,37.60775160863393],
    zoom: 14,
    controls: []
  })

  var myPlacemark = new ymaps.Placemark(
    [55.755,37.609],
    {balloonContent: '<strong>Встречаемся тут!</strong>'},
    {
      hideIconOnBalloonOpen: false, 
      balloonOffset: [5, -40], 
      preset: 'islands#icon', 
      iconColor: '#ea3c3b'
    }
  )

  myMap.geoObjects.add(myPlacemark);

}

const pag = document.querySelectorAll('.map__pagination li')
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
let sliderList = document.querySelector(".slider-list ul")
let sliderLi = document.querySelector(".slider-list li").getBoundingClientRect()
let amountQuest = document.querySelectorAll(".slider-list li")

btnRight.addEventListener('click', leafingRight)
btnLeft.addEventListener('click', leafingLeft)

let viewSlide = 0;
function leafingRight(e) {
  pag[viewSlide].classList.remove('show')
  if(viewSlide < amountQuest.length - 1) {
    viewSlide++
    btnLeft.disabled = false
    e.target.disabled = false
    if(viewSlide === amountQuest.length - 1) {
      e.target.disabled = true
    } 
  } else {
    e.target.disabled = true
  }
  pag[viewSlide].classList.add('show')
  sliderList.style.transform = 'translateX('+(-viewSlide * sliderLi.width)+'px)'
}

function leafingLeft(e) {
  pag[viewSlide].classList.remove('show')
  if(viewSlide > 0) {
    viewSlide--
    e.target.disabled = false
    btnRight.disabled = false
    if(viewSlide === 0) {
      e.target.disabled = true
    } 
  } else {
   e.target.disabled = true
   btnRight.disabled = false
  }
  pag[viewSlide].classList.add('show')
  sliderList.style.transform = 'translateX('+(-viewSlide * sliderLi.width)+'px)'
}
