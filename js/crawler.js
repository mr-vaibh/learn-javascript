links = document.links;
array = Array.from(links);

link_list = [];

array.forEach(function(element) {
	if (element.text.toLowerCase().includes('i')) {
		console.log(element.href);
	}
});