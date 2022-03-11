console.log('Wall Clock');

const wallClock = document.getElementById('wallClock');

setInterval(() => {
	updateClock();
}, 1000);

function updateClock() {
	let time = new Date().toLocaleTimeString();
	wallClock.innerText = time;
}