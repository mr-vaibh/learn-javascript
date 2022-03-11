console.log('Let\'s start coding for Enquirer');

// API Key for newsapi.org - 62985d45897d4677bdec4d8d162017fa

//////////////////////////////////////// Home page logic ////////////////////////////////////////
// Creating required news variables
// let source = 'bbc-news';
// let source = 'the-hindu';
// let source = 'the-times-of-india';
let source = 'google-news-in';
let apiKey = '62985d45897d4677bdec4d8d162017fa';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create a AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.setRequestHeader('Origin', 'file:///D:/Learn/JavaScript/Enquirer/index.html')
// xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
// xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
xhr.onload = function () {
	this.setHeader("Access-Control-Allow-Origin", "https://www.blogwebsite.com")
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let articles = json.articles;
		console.log(articles);
		let newsHTML = '';
		articles.forEach(function (element, index) {
			let news = `<div class="card">
							<div class="card-header" id="heading${index}">
								<h2 class="mb-0">
									<button class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${index}"
										aria-expanded="true" aria-controls="collapse${index}">
										<b>#${index + 1}.</b> ${element['title']}
									</button>
								</h2>
							</div>

							<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
								data-parent="#newsAccordion">
								<div class="card-body"><label class="font-italic font-weight-bold">Headline:&nbsp;&nbsp;&nbsp;</label>${element['description']} <br> <label class="font-italic font-weight-bold">Content:&nbsp;&nbsp;&nbsp;</label>${element['content']} ...<a href="${element['url']}" target="_blank">Read more</a></div>
							</div>
						</div>`;
			newsHTML += news;
		});
		newsAccordion.innerHTML = newsHTML;
	} else {
		console.log('Some error occured');
	}
}
xhr.send();


//////////////////////////////////////// Search news logic ////////////////////////////////////////
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
	let searchTxt = document.getElementById('searchTxt');
	let todayDate = new Date().getDate();
	let todayMonth = new Date().getMonth();
	let todayYear = new Date().getFullYear();

	// Grab the news container
	let newsAccordion = document.getElementById('newsAccordion');

	// Create a AJAX GET request
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `http://newsapi.org/v2/everything?q=${searchTxt.value}&from=${todayYear}-${todayMonth}-${todayDate}&sortBy=popularity&apiKey=${apiKey}`, true);
	xhr.onload = function () {
		if (this.status === 200) {
			let json = JSON.parse(this.responseText);
			let articles = json.articles;
			console.log(articles);
			let newsHTML = '';
			articles.forEach(function (element, index) {
				let news = `<div class="card">
							<div class="card-header" id="heading${index}">
								<h2 class="mb-0">
									<button class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${index}"
										aria-expanded="true" aria-controls="collapse${index}">
										<b>#${index + 1}.</b> ${element['title']}
									</button>
								</h2>
							</div>

							<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
								data-parent="#newsAccordion">
								<div class="card-body"><label class="font-italic font-weight-bold">Headline:&nbsp;&nbsp;&nbsp;</label>${element['description']} <br> <label class="font-italic font-weight-bold">Content:&nbsp;&nbsp;&nbsp;</label>${element['content']} ...<a href="${element['url']}" target="_blank">Read more</a></div>
							</div>
						</div>`;
				newsHTML += news;
			});
			newsAccordion.innerHTML = newsHTML;
		} else {
			console.log('Some error occured');
		}
	}
	xhr.send();
})


function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}