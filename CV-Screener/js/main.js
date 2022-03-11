console.log('Let\'s start coding for project');

// data is an array of objects which contains information about the candidate
const data = [
	{
		name: 'Rohan Das',
		age: 35,
		city: 'Kolkata',
		language: 'Python',
		framework: 'Django',
		image: 'https://randomuser.me/api/portraits/men/41.jpg'
	},
	{
		name: 'Shubham Sharma',
		age: 29,
		city: 'Kolkata',
		language: 'JavaScript',
		framework: 'Angular',
		image: 'https://randomuser.me/api/portraits/men/54.jpg'
	},
	{
		name: 'Leslie Bowman',
		age: 23,
		city: '208 Cherry St',
		language: 'Python',
		framework: 'Flask',
		image: 'https://randomuser.me/api/portraits/men/42.jpg'
	},
	{
		name: 'Cody King',
		age: 30,
		city: '7160 Robinson Rd',
		language: 'PHP',
		framework: 'Larvel',
		image: 'https://randomuser.me/api/portraits/men/32.jpg'
	},
]


// CV Iterator
function cvIterator(profiles) {
	let nextIndex = 0;
	return {
		next: () => {
			// Ternary operator or Single line If-Else
			return nextIndex<profiles.length ? {value:profiles[nextIndex++], done: false} : {done:true}
		}
	};
}

const candidates = cvIterator(data);
nextCV();

// Button Listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
	const currentCandidate = candidates.next().value;

	if (currentCandidate !== undefined) {
		let image = document.getElementById('image');
	let profile = document.getElementById('profile');

	image.innerHTML = `<img class="img-thumbnail" src="${currentCandidate.image}">`;
	profile.innerHTML = `<div class="card-body">
							<h5 class="card-title">Name: ${currentCandidate.name}</h5>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Age: ${currentCandidate.age} years</li>
							<li class="list-group-item">Lives in: ${currentCandidate.city}</li>
							<li class="list-group-item">Primarily works on <b>${currentCandidate.language}</b><br>with <b>${currentCandidate.framework}</b></li>
						</ul>`;
	} else {
		alert('No more candidates');
		location.reload();
	}
	
}