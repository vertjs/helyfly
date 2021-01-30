let reviewsArr = [
  { photo: "./img/reviews/1.png",
    name: "Валерия Антонова",
    occupation: "Арт-директор",
    review: ["./img/icons/stars.png", "Супер! Я бы заказала съемку снова!"],
    comment: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
    date: "27 Апреля, 2019г."
  },
  { photo: "./img/reviews/2.png",
    name: "Виталий Петров",
    occupation: "Фотограф",
    review: ["./img/icons/stars.png", "Супер! Я бы заказал съемку снова!"],
    comment: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!",
    date: "19 Апреля, 2019г."
  },
  { photo: "./img/reviews/3.png",
    name: "Джим Керри",
    occupation: "",
    review: ["./img/icons/stars.png", "Супер! Я бы заказал съемку снова!"],
    comment: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
    date: "11 Апреля, 2019г."
  },
  { photo: "./img/reviews/1.png",
    name: "Валерия Антонова",
    occupation: "Арт-директор",
    review: ["./img/icons/stars.png", "Супер! Я бы заказала съемку снова!"],
    comment: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
    date: "27 Апреля, 2019г."
  },
  { photo: "./img/reviews/1.png",
  name: "Валерия Антонова",
  occupation: "Арт-директор",
  review: ["./img/icons/stars.png", "Супер! Я бы заказала съемку снова!"],
  comment: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
  date: "27 Апреля, 2019г."
  },
  { photo: "./img/reviews/2.png",
  name: "Виталий Петров",
  occupation: "Фотограф",
  review: ["./img/icons/stars.png", "Супер! Я бы заказал съемку снова!"],
  comment: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!",
  date: "19 Апреля, 2019г."
  },
  { photo: "./img/reviews/3.png",
  name: "Джим Керри",
  occupation: "",
  review: ["./img/icons/stars.png", "Супер! Я бы заказал съемку снова!"],
  comment: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
  date: "11 Апреля, 2019г."
  },
  { photo: "./img/reviews/1.png",
  name: "Валерия Антонова",
  occupation: "Арт-директор",
  review: ["./img/icons/stars.png", "Супер! Я бы заказала съемку снова!"],
  comment: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
  date: "27 Апреля, 2019г."
  },
]
const blockReviews = document.querySelector('.reviews__content')
let arrItem;
let arrVisible;
let viewNum;

reviewsArr.forEach((o, i) => {
  let item = document.createElement('div')
  item.classList.add('reviews__item')
  let d1 = document.createElement('div')
  let img1 = document.createElement('img')
  img1.src = o.photo
  img1.alt=`photo_${++i}`
  d1.append(img1)

  let d2 = document.createElement('div')
  let h5 = document.createElement('h5')
  h5.textContent = o.name
  
  let p2 = document.createElement('p')
  p2.classList.add('occupation')
  p2.textContent = o.occupation

  let img2 = document.createElement('img')
  img2.src= o.review[0]
  img2.alt='stars'

  let p3 = document.createElement('p')
  p3.classList.add('replica')
  p3.textContent = o.review[1]

  let p4 = document.createElement('p')
  p4.classList.add('comment')
  p4.textContent = o.comment
 
  let p5 = document.createElement('p')
  p5.classList.add('date')
  p5.textContent = o.date


  if(screen.width < 921) {
    d2.append(h5)
    d2.append(p2)
    d2.append(img2)
  } else {
    d2.append(h5)
    d2.append(p2)
    let d3 = document.createElement('div')
    let d4 = document.createElement('div')
    d2.append(d3)
    d2.append(d4)
    d2.append(p5)
    
    d3.append(img2)
    d3.append(p3)
    d4.append(p4)
    console.log(d4)
  }


  blockReviews.append(item)
  i < 4 ? item.classList.add('visible') : item.classList.add('invisible')

  if(screen.width < 921) {
    let d = document.createElement('div')
    item.append(d)
    d.append(d1)
    d.append(d2)
    item.append(p3)
    item.append(p4)
    item.append(p5)
  } else {
    item.append(d1)
    item.append(d2) 
  }
})

arrVisible = blockReviews.querySelectorAll('.visible')

if(reviewsArr.length > 3) {
  let viewAll = document.createElement('div')
  viewAll.classList.add('reviews__viewAll')
  let p = document.createElement('p')

  p.textContent = `Показать Все (${reviewsArr.length - 3})`
  viewAll.append(p)
  document.querySelector('.reviews__content').append(viewAll)
  
  arrItem = blockReviews.querySelectorAll('.reviews__item')

  p.addEventListener('click', handleExpanded)
}

function handleExpanded(e){
  for (let i = arrVisible.length; i < arrVisible.length + 3; i++) {
    arrItem[i].classList.toggle('invisible', false)
    arrItem[i].classList.add('visible')
    if(i === arrItem.length - 1) {
      e.target.classList.add('invisible')
      return
    }
  }
  arrVisible = blockReviews.querySelectorAll('.visible')
  e.target.textContent = `Показать Все (${arrItem.length - arrVisible.length})`
}

