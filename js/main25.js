console.log('Understanding Asynchronous Programming');

setTimeout(() => {
    for (let i = 0; i < 4001; i++) {
        const element = i;
        console.log('This is index number', i);
    }
}, 100);


console.log('Done Printing');
