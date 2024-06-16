
const element = document.querySelector('#counter');


function increment(){
    let num = parseInt(element.innerText);
    num++;
    element.innerText = num;
};

function decrement(){
    let num = parseInt(element.innerText);
    num--;
    element.innerText = num;
};