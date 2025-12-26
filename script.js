let input = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons");


const disabledBtns = () =>{
    for(let btn of buttons){
        btn.disabled = true;
    }
}

const enabledBtns = () =>{
    for(let btn of buttons){
        btn.disabled = false;
    }
}

let result = false;
let operatorUsed = false;

function displayValue(val) {

    // if operator is used
    if(["+" , "-" , "/" , "%" , "*"].includes(val)){
        operatorUsed = true;
        result = false;
        input.value += val;
        return;
    }

    // if number is used
    if( result && !operatorUsed){
        input.value = "";
    }
    
    result = false;
    input.value += val;

    input.style.color = "#dad7cd";
    input.style.textAlign = "right";
    input.style.fontSize = "40px";
}


function delValue(){
    input.value = input.value.slice(0,-1);
    result = false;
    operatorUsed = false;
}


function allCleared() {
    input.value = "";
    enabledBtns();
    result = false;
    operatorUsed = false;
}

function calculate() {
    try{
        input.value = eval(input.value);
        result = true;
        operatorUsed = false;
    }
    catch{
        let invalidExp = input.value;
        input.value =`Error | ${invalidExp}`;
        input.style.color="red";
        input.style.fontSize = "20px";
        input.style.textAlign = "left";
        disabledBtns();
        result = true;
        operatorUsed = false;
    }
}
