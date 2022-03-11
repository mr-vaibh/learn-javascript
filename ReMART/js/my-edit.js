let title0 = document.getElementById('title0');

title0.addEventListener('click', function (e) {
	let noinput0 = document.getElementsByClassName('input0').length;
	if (noinput0 == 0) {
		let html = title0.innerHTML;
		title0.innerHTML = `<input type="text" class="form-control input0" id="input0" value="${html}" maxlength="25">`;
	}

	let input0 = document.getElementById('input0');
	input0.addEventListener('blur', function (e) {
		title0.innerHTML = input0.value;
		oldNotes = JSON.parse(localStorage.getItem("notes"))[0];

		let newNotes = {
			title : input0.value,
			text : oldNotes.text,
			date : oldNotes.date,
			time : oldNotes.time,
		}
		console.log(newNotes);
		
		localStorage.setItem('notes', JSON.stringify(newNotes));
	});

});