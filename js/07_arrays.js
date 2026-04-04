//const numbers = [2, 3, 4, 5, 6];
//console.log(numbers.length);
//console.log(numbers.length - 1);
//console.log(numbers[numbers.length - 1]);
//console.log(numbers[0]);

let fruits = ["apple", "plum", "pear", "orange"];
//console.log(fruits.length);
//console.log(fruits.length - 1);
//console.log(fruits[fruits.length - 1]);
//console.log(fruits[0]);
//console.log(fruits[2]);

fruits[3] = "peach";
fruits[1] = "banana";
fruits[4] = "pineapple"
//console.log(fruits);

for(let i = 0; i < fruits.length; i += 1){
    //console.log(fruits[i]);
    if(fruits[i] === "banana"){
        //console.log("Banana");
        break;
    }
}



const myFriends = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < myFriends.length; i+= 1) {
    //console.log(myFriends[i]);
}

for (const friends of myFriends) {
    //console.log(friends);
}


const array = [10, 25, 13, 44, 15];
for (const number of array) {
    //console.log(number);
}
for (let i = 0; i < array.length; i+= 1) {
    //console.log(array[i]);
}


//const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//let total = 0;
//for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
//}
//console.log(total);

//total = 0

//for (const price of cart) {
//    total += price;
//}
//console.log(total);



/*const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for (let i = 0; i < cart.length; i += 1) {
    total += cart[i] * 0.9;
}
console.log(total);

total = 0

for (const price of cart) {
    total += price * 0.9;;
}
console.log(total);*/



//const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

//for (let i = 0; i < cart.length; i+= 1) {
//    if(cart[i] % 2 === 0){
//        console.log(cart[i]); 
//    }
//}
//for (const price of cart) {
//    if (price % 2 === 0) {
//        console.log(price);
//    }
//}

// Написати скрипт який порахує сумму всіх парних чисел в масиві
/*const numberArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalNum = 0;


for (const price of numberArr) {
    if (price % 2 === 0) {
        totalNum += price;
}
}
console.log(totalNum);*/

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (const num of numbers) {
    if(num < threshold){
        continue;
    }
    //console.log(num);
}
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
let message = `Користувач ${loginToFind} не знайдено.`;

for (const login of logins) {
    if (login === loginToFind) {
        message = `Користувач ${loginToFind} знайдено.`
        break;
    }
}
//console.log(message);


const array1 = ["Mango", "hurries", "to", "the", "train"];
//console.log(array1.join(" "));

//console.log(array1.indexOf("to"));
//console.log(array1.includes("banana"));



// є рядок, що склад зі слів, розділених лише пробілами <message> 
// та  число, що містить ціну <pricePerWord >
// напиши код, що рахує загальну вартість гравірування слів в рядку

// "JavaScript is in my blood", 10 повертає 50
// "Web-development is creative work", 20 повертає 80


const text = "JavaScript is in my blood";
const pricePerWord = 10;

const messageArray = text.split(" ");
//console.log(messageArray);
const price = messageArray.length * pricePerWord;
//console.log(price);



// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код , щоб перевіряти, чи присутній такий товар в масиві storage
// і повертати:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру

// ["apple", "plum", "pear"], "plum" повертає "plum is available to order!"
// ["apple", "plum", "pear"], "pEAr" повертає "pear is available to order!"
// ["apple", "plum", "pear"], "orange" повертає "Sorry! We are out of stock!"

const storage = ["apple", "plum", "pear"];
const item = "plum";

const convertedItem = item.toLowerCase();
const isIncluded = storage.includes(convertedItem);
let answer;

if (isIncluded) {
    answer = "plum is available to order!"; 
}else{
    answer = "Sorry! We are out of stock!";
}
storage.push("banana");
storage.unshift("cherry");
//console.log(storage);

//console.log(answer);


const vegetables = ["carrot", "tomato", "potato", "cucumber", "onion", "beans"];
const firstToElements = vegetables.slice(0,2);
const lastToElements = vegetables.slice(-3);
const nonExtremsElements = vegetables.slice(1, vegetables.length - 1);
//console.log(nonExtremsElements);
//console.log(lastToElements);
//console.log(firstToElements);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients)
//console.log(allClients);


// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код так, 
// щоб виконувати пошук значення value у масиві array 
// і повертати:

//  - порожній масив, якщо в array немає елемента зі значенням value
//  - підмасив, що починається з початку array 
//    і до елемента зі значенням value включно, якщо такий елемент є в array

// ["Mango", "Poly", "Ajax"], "Poly" повертає ["Mango", "Poly"]
// ["Mango", "Poly", "Ajax"], "Jacob" повертає []


const array6 = ["Mango", "Poly", "Ajax"];
const value = "Poly1";
let arr = []
const elemIndex = array6.indexOf(value);
if(elemIndex !== -1){
    arr = array6.slice(0, elemIndex + 1);
}
//console.log(elemIndex);

const languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 2);
//console.log(languages);

const colors = ["red", "green", "blue"];
colors.splice(2,0, "yellow");
//console.log(colors);

const colors2 = ["red", "green", "blue"];

colors2.splice(2,1,"purple");
//console.log(colors2);

const languages2 = ["C", "C++", "Java", "JavaScript"];
languages2.splice(1,2, "Swift", "Go");
//console.log(languages2);

// Додайте 'Рок-н-ролл' в кінець масиву. 
// Замініть значення в середині масиву на 'Класика'. 
// Видаліть перший елемент масиву і покажіть його. 
// Додайте 'Реп' і 'Реггі' на початок масиву. 
// Виведіть масив в консоль.

const styles = ['Джаз', 'Блюз'];
styles.splice(2, 0, "Рок-н-ролл")
styles.slice(1, 1, "Класика")
styles.slice(0, 1)
styles.slice(0, 0, "Реп", "Реггі")
console.log(styles);
