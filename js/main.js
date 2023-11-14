const [spanHr, spanMin, spanSec] = document.querySelectorAll('span');
const hr = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();

setInterval(() => {
	const hr = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	spanHr.innerText = hr;
	spanMin.innerText = min;
	spanSec.innerText = sec;
}, 1000);
