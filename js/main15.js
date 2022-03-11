console.log('Welcome to new JS File');

document.getElementById('heading').addEventListener('click', function(e){
	console.log('You have clicked the heading.');
	val = e.target;
	console.log(val);
	
	val = e.target.className;
	console.log(val);
	
	val = e.target.classList;
	console.log(val);
	
	val = e.target.id;
	console.log(val);
	
	val = Array.from(e.target.classList);
	console.log(val);

	val = e.offsetX;
	console.log(val);
	
	val = e.offsetY;
	console.log(val);
	
	val = e.clientX;
	console.log(val);
	
	val = e.clientY;
	console.log(val);
	
	// location.href = '//google.com';
});

