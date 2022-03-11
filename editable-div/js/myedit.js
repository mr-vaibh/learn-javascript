console.log('Start Coding like anything');

let ul = document.getElementById('ul')

//////////////////////// Ist Div ////////////////////////

let div1 = document.getElementById('div1');
if (localStorage.getItem('div1')) {
    div1.innerHTML = localStorage.getItem('div1');
}

let br1 = document.createElement('br');
br1.append();

let txt1 = document.createElement('input');
txt1.type = 'text'; txt1.value = div1.innerHTML; txt1.placeholder = 'Enter some text';
let txtNode1 = document.createTextNode(null);
txt1.appendChild(txtNode1);

div1.addEventListener('click', function (e) {
    div1.replaceWith(txt1, br1);
});

//////////////////////// 2nd Div ////////////////////////


let div2 = document.getElementById('div2');
if (localStorage.getItem('div2')) {
    div2.innerHTML = localStorage.getItem('div2');
}

let br2 = document.createElement('br');
br2.append();

let txt2 = document.createElement('input');
txt2.type = 'text'; txt2.value = div2.innerHTML; txt2.placeholder = 'Enter some text';
let txtNode2 = document.createTextNode(null);
txt2.appendChild(txtNode2);

let btn2 = document.createElement('button');
btn2.type = 'button';
let btnNode2 = document.createTextNode('Save');
btn2.appendChild(btnNode2);

div2.addEventListener('click', function (e) {
    div2.replaceWith(txt2, btn2, br2);
});

btn2.addEventListener('click', function (e) {
    localStorage.setItem('div2', txt2.value);
    div2.innerHTML = localStorage.getItem('div2');
    console.log(div2);

    txt2.replaceWith(div2);
    btn2.replaceWith(div2);
    br2.replaceWith(div2);

});

//////////////////////// 3rd Div ////////////////////////

let div3 = document.getElementById('div3');
if (localStorage.getItem('div3')) {
    div3.innerHTML = localStorage.getItem('div3');
}

let br3 = document.createElement('br');
br3.append();

let txt3 = document.createElement('input');
txt3.type = 'text'; txt3.value = div3.innerHTML; txt3.placeholder = 'Enter some text';
let txtNode3 = document.createTextNode(null);
txt3.appendChild(txtNode3);

let btn3 = document.createElement('button');
btn3.type = 'button';
let btnNode3 = document.createTextNode('Save');
btn3.appendChild(btnNode3);

div3.addEventListener('click', function (e) {
    div3.replaceWith(txt3, btn3, br3);
});

btn3.addEventListener('click', function (e) {
    localStorage.setItem('div3', txt3.value);
    div3.innerHTML = localStorage.getItem('div3');
    console.log(div3);

    txt3.replaceWith(div3);
    btn3.replaceWith(div3);
    br3.replaceWith(div3);

});