const blockPhoto = document.querySelector('.section-3__photo')
const arrPhoto = ['../img/photo/1.svg','../img/photo/2.svg','../img/photo/3.svg','../img/photo/4.svg','../img/photo/1.svg','../img/photo/2.svg','../img/photo/3.svg','../img/photo/4.svg','../img/photo/1.svg','../img/photo/2.svg','../img/photo/3.svg','../img/photo/4.svg','../img/photo/1.svg','../img/photo/2.svg','../img/photo/3.svg','../img/photo/4.svg','../img/photo/1.svg','../img/photo/2.svg','../img/photo/3.svg','../img/photo/4.svg']
let arrImg;

arrPhoto.forEach((el, i) => {
  let img = document.createElement('img')
  img.src=el
  img.alt=`photo_${++i}`
  
  blockPhoto.append(img)
  i < 9 ? img.classList.add('visible') : img.classList.add('invisible')
})

if(arrPhoto.length > 8) {
  let p = document.createElement('p')
  p.textContent = 'Показать ещё'
  document.querySelector('.section-3').append(p)
  arrImg = blockPhoto.querySelectorAll('img')
  p.addEventListener('click', handleExpanded)  
}
function handleExpanded(e) { // раскрыть невидимые фото
  let arrVisible = blockPhoto.querySelectorAll('.visible')

  for(let i = arrVisible.length; i < arrVisible.length + 4; i++) {
    arrImg[i].classList.toggle('invisible', false)
    arrImg[i].classList.add('visible')
    console.log(arrImg[i])
  }
  if(document.querySelectorAll('.visible').length === arrPhoto.length) {
    e.target.classList.add('invisible')
  } // скрыть "показать еще" если количество видимых фото равно всему кол-ву фото
}