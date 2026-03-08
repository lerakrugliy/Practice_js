const balance = 1000;
let message;

if (balance > 1) {
  message = "Ваш баланс позитивний!";
} else {
  message = "Ваш баланс негативний!";
}
console.log(message);


const message1 = balance > 1 ? "Ваш баланс позитивний!" : "Ваш баланс негативний!";
console.log(message1);

const userInput = "jnoik";
//const userInput = "EcMAScriPt".toLowerCase();


if(userInput === "ECMAScript"){
    console.log("Правильно!");
    
}else{
    console.log("Ви не знаєте? ECMAScript!");
}

const answer = userInput === "ECMAScript".toLowerCase() ? "Правильно!" : "Ви не знаєте? ECMAScript!"

const a = 4;
const b = 5;
let result;
if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
}
result1 = a + b < 4 ? 'Нижче' : 'Вище';
console.log(result1);


const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber);

biggerNumber1 = num1 > num2 ? biggerNumber = num1 : biggerNumber = num2;
console.log(biggerNumber1);

let balance2 = 100;
const payment = 20;
console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`);
if(payment <= balance2){
    balance2 -= payment;
    console.log(`На рахунку залишилося ${balance2} кредитів`);
}else{
    console.log("На рахунку недостатньо коштів для проведення операції!");
}
console.log("Операція завершена");




const browser = "Firefox";
let text;

switch(browser){
    case "Edge":
        text = "You've got the Edge!";
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        text = "Ми підтримуємо і ці браузери";
        break;
    default:
        text =  "Маємо надію, що ця сторінка виглядає добре!";
        break;
}
console.log(browser, text)


let a1 = 0;
let output;

switch (a1) {
    case 0:
        output = 0;
        break;
    case 1:
        output = 1;
        break;
    case 2:
    case 3:
        output = "2,3";
        break;
}
console.log(a1, output);


const number = 64;

switch (true) {
    case (number >= 55 && number <= 99):
        text1 = ("Число потрапляє в діапазон");
        break;
    default:
        text1 = ("Число не потрапляє в діапазон");
}
console.log(number, text1);

const age = 30;

switch (true) {
    case age >= 0 && age <= 16:
        text3 = ("діти");
        break;
    case age >= 17 && age <= 60:
        text3 = ("дорослі");
        break;
    case age >= 61 && age <= 100:
        text3 = ("пенсіонери");
        break;
}
console.log(text3);
