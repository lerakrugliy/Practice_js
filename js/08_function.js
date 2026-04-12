const hiFn = function () {
  return "hello";
};
const result = hiFn();
//console.log(result);

const showName = function (name) {
  //console.log(`hello, ${name}`);
};
showName("Max");

// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів.
//  Перевірте її роботу.
const mul = function (n, m) {
  const sum = n + m;
  const multiply = n * m;
  const diff = multiply - sum;
  return [sum, multiply, diff];
};
const result1 = mul(2, 4);
//console.log(result1);

/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */
const calculateTotalPrice = function (orderedQuantity, pricePerItem) {
  const sum1 = orderedQuantity * pricePerItem;
  return sum1;
};
const result2 = calculateTotalPrice(5, 100);
//console.log(result2);

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

const calculateTax = function (amount, taxRate) {
  const tax = amount * taxRate;
  return tax;
};
const result3 = calculateTax(100, 0.1);
//console.log(result3);
const result4 = calculateTax(200, 0.1);
//console.log(result4);
const result5 = calculateTax(100, 0.2);
//console.log(result5);

// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення
// ${item} is available to order!
// якщо немає  "Sorry! We are out of stock!";


const checkStorage = function (storage, item) {
  if (storage.includes(item.toLowerCase())) {
    return `${item} is available to order`
  }else{
    return "Sorry! We are out of stock!"
  } 
}

//console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

// створити функцію для створення настроюваного цикла
// з параметрами від до та кроком

//count(1, 5); // From = 1, To = 5, step = 1
//count(2); // From = 2, To = 10, step = 1
//count(undefined, 5, 2); // From = 0, To = 5, step = 2
//count(); // From = 0, To = 10, step = 1

function count (From = 1, To = 10, step = 1){
  for (let i = From; i < To; i += step) {
    //console.log(i);
  }
}

count()
count(1,5,1);
count(2,10,1);
count(0,5,2);
count(0,10,1);


// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)
const myScore1 = function(score){
  if (score >= 91 && score <= 100) {
    console.log("A");
    
  } else if (score >= 81 && score <= 90) {
    console.log("B");
  } else if (score >= 71 && score <= 80) {
    console.log("c");
  }else {
    console.log("D");
  }
}

const myScore = function(score){
  if (score < 100 && score > 91) {
    return "A"
  }
  if (score < 90 && score > 81) {
    return "B"
  }
  if (score < 80 && score > 71) {
    return "C"
  }
  if (score < 70 && score > 0) {
    return "D"
  }
  return "Введіть корекне значення"
}
myScore(93)
console.log(myScore(93));

/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін (чисел) та повертає їх суму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const calculateTotalPrice1 = function(items){
  let total = 0;
  for (const item of items) {
     total += item;
  }
  return total
}

console.log(calculateTotalPrice1(cart));
console.log(calculateTotalPrice1([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice1([100, 200, 300])); // 600

/*
 Напиши функцію filterNumbers(array [, number1, ...]) яка:
 - першим аргументом приймає масив чисел
 - після 1-го аргумента можуть бути інші аргументи, які будуть числами.
 - Функція повинна повернути новий масив, 
в якому будут тільки ті аргументи, починаючи з другого,
для яких є аналог в оригінальном масиві.
*/


const filterNumbers = function(array, ...args){
  const newArray = [];
  for (const item of array) {
    if (args.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray
}
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12))