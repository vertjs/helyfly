let ready = () => {
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')) {
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});
}

document.addEventListener("DOMContentLoaded", ready);