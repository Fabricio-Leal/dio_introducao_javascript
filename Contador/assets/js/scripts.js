var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    color();

    if(currentNumber >= 10) {
        document.getElementById("adicionar").disabled = true
        
    }else {
        document.getElementById("subtrair").disabled = false
    }
   
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    color();

    if(currentNumber <= -10) {
        document.getElementById("subtrair").disabled = true
        
    }else {
        document.getElementById("adicionar").disabled = false
    }

}

function color() {
    if(currentNumber < 0) {
        document.getElementById("currentNumber").style.color = 'red';
    
    }else {
        document.getElementById("currentNumber").style.color = 'black';
               
    }

}

function addEvent() {
    document.getElementById("subtrair").addEventListener("click", decrement);
    document.getElementById("adicionar").addEventListener("click", increment);
      
}
window.addEventListener("load", addEvent);