const hiFn = function () {
  return "hello";
};
const result = hiFn();
console.log(result);

const showName = function (name) {
  console.log(`hello, ${name}`);
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
console.log(result1);

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
console.log(result2);

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
console.log(result3);
const result4 = calculateTax(200, 0.1);
console.log(result4);
const result5 = calculateTax(100, 0.2);
console.log(result5);

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

console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

