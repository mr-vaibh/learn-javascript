console.log('This is a drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for Drag and Drop
imgBox.addEventListener('dragstart', (e) => {
    console.log('drag start triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log('drag end triggered');
    e.target.className = 'imgBox';
});

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('DragOver method is triggered');
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter method is triggered');
        e.target.className += ' dashed'
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave method is triggered');
        e.target.className = 'whiteBox';
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log('DragDrop method is triggered');
        e.target.className = 'whiteBox';
        e.target.append(imgBox)
    });
}