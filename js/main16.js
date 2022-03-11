console.log('Events in JS');

let btn = document.getElementById('btn');

btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mouseup', func3);
btn.addEventListener('mousedown', func4);
btn.addEventListener('mouseenter', func5);
btn.addEventListener('mouseleave', func6);

function func1(e) {
	console.log('Thanks its a click', e);
	// By pass default behavior
	e.preventDefault();
}

function func2(e) {
	console.log('Thanks its a double click', e);
	// By pass default behavior
	e.preventDefault();
}

function func3(e) {
	console.log('Thanks its a mouse up', e);
	// By pass default behavior
	e.preventDefault();
}

function func4(e) {
	console.log('Thanks its a mouse down', e);
	// By pass default behavior
	e.preventDefault();
}

function func5(e) {
	console.log('You entered the button', e);
	// By pass default behavior
	e.preventDefault();
}

function func6(e) {
	console.log('You exited the button', e);
	// By pass default behavior
	e.preventDefault();
}

document.querySelector('body').addEventListener('mousemove', function (e) {
	console.log('You moved your mouse and your mouse coordinates are:', e.offsetX, e.offsetY, e);
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX*e.offsetY})`;
	
	// By pass default behavior
	e.preventDefault();
});
