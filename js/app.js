// goblal variable for the math operation and global variables
// for save data like number1, number2 and result
let option;
let number1, number2, result;

//numbers variables
const zero = document.getElementById("btn-zero");
const one = document.getElementById("btn-one");
const two = document.getElementById("btn-two");
const three = document.getElementById("btn-three");
const four = document.getElementById("btn-four");
const five = document.getElementById("btn-five");
const six = document.getElementById("btn-six");
const seven = document.getElementById("btn-seven");
const eight = document.getElementById("btn-eight");
const nine = document.getElementById("btn-nine");

//calculator display
let display = document.getElementById("display");

//Buttons specials
let ce = document.getElementById("btn-ce");
let del = document.getElementById("btn-del");
let res = document.getElementById("btn-result");

//Aritmetic operations
let add = document.getElementById("btn-add");
let substract = document.getElementById("btn-substract");
let multiply = document.getElementById("btn-multiply");
let split = document.getElementById("btn-split");
let sqrt1 = document.getElementById("btn-sqrt");

//Trigonometric operations
let sin = document.getElementById("btn-sin");
let cos = document.getElementById("btn-cos");
let tan = document.getElementById("btn-tan");

//Write numbers in display
one.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "1";
    }else{
        display.value = "1";
    }
});
two.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "2";
    }else{
        display.value = "2";
    }
});
three.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "3";
    }else{
        display.value = "3";
    }
});
four.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "4";
    }else{
        display.value = "4";
    }
});
five.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "5";
    }else{
        display.value = "5";
    }
});
six.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "6";
    }else{
        display.value = "6";
    }
});
seven.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "7";
    }else{
        display.value = "7";
    }
});
eight.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "8";
    }else{
        display.value = "8";
    }
});
nine.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "9";
    }else{
        display.value = "9";
    }
});
zero.addEventListener('click', function(e){
    if(display.value != "0"){
        display.value = display.value + "0";
    }else{
        display.value = "0";
    }
});

//add decimal point

const decimalPoint = document.getElementById("decimalPoint");

decimalPoint.addEventListener('click', function(e){
    if(display.value == ""){
        display.value = display.value + "0.";
        decimalPoint.disabled = true;
    }else{
        display.value = display.value + ".";
        decimalPoint.disabled = true;
    }
});

//clean display fuction

function clean(){
    display.value = "0";
    decimalPoint.disabled = false;
}

ce.addEventListener('click',function(e){
    clean();
});

//delete last number in screen 
function deleteNumber(string){
    if(string.substr(-1) == "."){
        decimalPoint.disabled = false;
    }
    string = string.substr(0,string.length -1);
    display.value = string;
}

del.addEventListener('click', function(e){
    if (display.value != "0"){
        let string = display.value;
        deleteNumber(string);
    }
});

/*-----------------------------------------*/
//Aritmetic operations

//add
add.addEventListener('click', function(){
    number1 = display.value;
    option = "+";
    display.value="";
    inactive();
});
//substract
substract.addEventListener('click',function(){
    number1 = display.value;
    option = "-";
    display.value="";
    inactive();
});
//multiply
multiply.addEventListener('click', function(){
    number1 = display.value;
    option = "*";
    display.value="";
    inactive();
});
//split
split.addEventListener('click',function(){
    number1 = display.value;
    option = "/";
    display.value="";
    inactive();
});
//SQRT
sqrt1.addEventListener('click',function(){
    number1 = display.value;
    number1 = parseFloat(number1);
    result = cuadratic_sqrt(number1);
    display.value = result;
});

//result
res.addEventListener('click', function(){
    number2 = display.value;
    switch(option){
        case "+":
            //Enable button decimal point
            if(decimalPoint.disabled){
                decimalPoint.disabled = false;
            }
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            result = addition(number1,number2);
            display.value = result;
            active();
        break;
        case "-":
            //Enable button decimal point
            if(decimalPoint.disabled){
                decimalPoint.disabled = false;
            }
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            result = substrac(number1,number2);
            display.value = result;
            active();
        break;
        case "*":
            //Enable button decimal point
            if(decimalPoint.disabled){
                decimalPoint.disabled = false;
            }
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            result = mulply(number1,number2);
            display.value = result;
            active();
        break;
        case "/":
            //Enable button decimal point
            if(decimalPoint.disabled){
                decimalPoint.disabled = false;
            }
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            result = splt(number1,number2);
            display.value = result;
            active();
        break;
    }
});

//Function where the value of result is in the diplay
//For avoid that the user entered other value and not overwrite the actual value in the display






//Trigonometrics Operations
sin.addEventListener('click', function(){
    number1 = display.value;
    number1 = parseFloat(number1);
    result = trg_sin(number1);
    display.value = result;
});
cos.addEventListener('click', function(){
    number1 = display.value;
    number1 = parseFloat(number1);
    result = trg_cos(number1);
    display.value = result;
});
tan.addEventListener('click',function(){
    number1 = display.value;
    number1 = parseFloat(number1);
    result = trg_tan(number1);
    display.value = result;
});

//fuctions for math operations
//Addition
function addition(a,b){
    return a + b;
}
//Substraction
function substrac(a,b){
    return a - b;
}
//Multiply
function mulply(a,b){
    return a*b;
}
//split
function splt(a,b){
    return a / b;
}
//SQRT
function cuadratic_sqrt(a){
    let raiz = Math.sqrt(a);
    return raiz;
}

function trg_sin(a){
    return Math.sin(a*Math.PI/180);
}

function trg_cos(a){
    if(a == 90){
        return 0;
    }else{
        return Math.cos(a*Math.PI/180);
    }
}
function trg_tan(a){
    return Math.tan(a*Math.PI/180);
}


//Functions for disable and enable operators aritmetics and trigonometrics
//When is this making a operation; with a view to not to affect the final result

function inactive(){
    add.disabled = true;
    add.disabled = true;
    substract.disabled = true;
    multiply.disabled = true;
    split.disabled = true;
    sqrt1.disabled = true;
    sin.disabled = true;
    cos.disabled = true;
    tan.disabled = true;
    del.disabled = true;
}

function active() {
    add.disabled = false;
    add.disabled = false;
    substract.disabled = false;
    multiply.disabled = false;
    split.disabled = false;
    sqrt1.disabled = false;
    sin.disabled = false;
    cos.disabled = false;
    tan.disabled = false;
    del.disabled = false;
}






