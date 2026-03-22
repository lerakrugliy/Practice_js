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
console.log(message);
