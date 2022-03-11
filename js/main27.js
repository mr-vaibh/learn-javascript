console.log('Callback Functions');

/*
Callback function is the function which uses function as parameter
*/

// Assume that this response is coming from the server
const students = [
    {
        name: 'tom',
        subject: 'chasing'
    },
    {
        name: 'jerry',
        subject: 'running'
    }
];

/* setTimeout(function(){...}, time)
 do the specific task in background
 after given time without blocking other code
 */

function enrollStudent(student, callback) {
    setTimeout(function(){
        students.push(student);
        let container = document.getElementById("students");
        let content = container.innerHTML;
        container.innerHTML= content;
        console.log('Student has been enrolled');
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
        let str = '';
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched');
    }, 100);
}

let newStudent = {name:'Sunny', subject:'Java'}
enrollStudent(newStudent, getStudents);
// getStudents();