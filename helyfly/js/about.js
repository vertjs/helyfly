function truncateText(selector, maxLength) {
  let item1 = document.querySelector(selector) 
  let truncated = item1.textContent

  if(truncated.length > maxLength) {
    truncated = truncated.substring(0, maxLength) + '...'
    item1.textContent = truncated
  }
  return truncated;
}

const isx1 = document.querySelector('.about__item-1 p:last-child').textContent
const isx2 = document.querySelector('.about__item-2 p').textContent

document.querySelector('.about__item-1 p:last-child').textContent =
 truncateText('.about__item-1 p:last-child', 100)

document.querySelector('.about__item-2 p').textContent =
 truncateText('.about__item-2 p', 100)

 Array.from(document.querySelectorAll('.about__article button')).forEach((el, i) => el.addEventListener('click', (e) => handleExp(i, e)))

function handleExp(i, e) {
  if(i === 0) {
    document.querySelector('.about__item-1 p:last-child').textContent = isx1
  } else if(i === 1) {
    document.querySelector('.about__item-2 p').textContent = isx2
  }
  e.target.style.display = 'none'
}
