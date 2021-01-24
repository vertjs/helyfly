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

const pag = document.querySelector('.map__pagination li')
console.log(pag)