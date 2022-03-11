console.log('Error Handling');

/* Custom Error:
throw new Error(msg);
*/

let a = 'Sallu bhai';

if (a !== undefined) {
    // throw new Error('Defined')
    // console.log('Defined');
} else {
    console.log('Undefined');
}


try {
    // try_karo
    console.log('We are inside try block');
    kjk
} catch (error) {
    console.log('Error');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log('Finally we will run this');
}