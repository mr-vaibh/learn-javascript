console.log('Promise in JavaScript');

function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved');
                resolve();
            } else {
                console.log('Function: Your promise has not been resolved');
                reject('Sorry ptomise not fulfilled');
            }
        }, 2000);       
    });
}


func().then(function () {
    console.log('User: Thanks for resolving');
}).catch(function (error) {
    console.log('User: Very bad. Reason: ' + error);
})