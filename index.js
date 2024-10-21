const textBox = document.getElementById("textBox");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const button = document.getElementById("button");
const result = document.getElementById("result");
let temp;

button.onclick=function(){

    if(toFar.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F"
    }
    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent= temp + "°C"
    }
    else{
        result.textContent = "Select a Unit";
    }
}