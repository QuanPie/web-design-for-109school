function favoriteSwitch() {
	const svg = document.querySelector('svg[data-icon="carbon:favorite-filled"]')

	if (svg.style.color === 'rgba(150, 150, 150, 0.7)') {
		svg.style.color = 'rgba(255, 57, 49,0.9)'
	} else {
		svg.style.color = 'rgba(150,150,150,0.7)'
	}
}

function plus() {
	let count = document.querySelector('.count')
	count.textContent =  parseInt(count.textContent) + 1
}

function minus() {
	let count = document.querySelector('.count')
	if (parseInt(count.textContent) > 0) {
		count.textContent =  parseInt(count.textContent) - 1
	}
}