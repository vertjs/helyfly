let ready = () => {
  document.querySelectorAll(".ibg").forEach(el => {
    if(el.querySelector('img')) {
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
      el.querySelector('img').style.visibility = 'hidden';
    }
  });
}

document.addEventListener("DOMContentLoaded", ready);