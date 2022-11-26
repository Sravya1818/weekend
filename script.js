var counterElement = document.getElementById('Text');

var incrementb = document.getElementById('Ibutton');
var decrementb = document.getElementById('Dbutton');
var clearb = document.getElementById('cbutton');

var counter = counterElement.innerText;

function Increment(){
counter++;
console.log(counter);
counterElement.innerText = counter;
}

function Decrement(){
    counter--;
    console.log(counter);
    counterElement.innerText = counter;
}
    
function Clear(){
    counter=0;
console.log(counter);
counterElement.innerText = counter;
}

incrementb.onclick = Increment;
decrementb.onclick = Decrement;
clearb.onclick = Clear;