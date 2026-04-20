function e(quantity, pricePerItem) {
    return quantity * pricePerItem;
}

const calculateTotalPrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
}


/*   1. 
Створити стрілкову функцію hello1(), 
яка при визові буде вертати текст . */

const hello1 = () => {
    return "hello"
}
hello1()

const hello2 = (name) => {
    return "hello " + name
}
console.log(hello2("leo"));

/*   Задача разом
Напиши стрілкову функцію (), 
яка приймає всі аргументи за допомогою ...rest і
 в результаті виводить масив цих аргументів у консоль.
Для перевірки: */

// ;
// ;
// ;

const myNewArrowFunction = (...args) =>{
    console.log(args);
}
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

/*   3.
Напишіть стрілкову функцію mul(n, m), 
яка приймає два аргументи і 
повертає добуток  цих аргументів.
 Перевірте її роботу. */

 const mul = (n, m) => {
    const k = n * m
    return k
 }
console.log(mul(6,7));
  
const calculateTotalPrice1 = (quantity, pricePerItem) => quantity * pricePerItem;



const deliverPizza = (pizzaName) => {
    return `Delivering ${pizzaName} pizza`;
}
  
const makePizza = (pizzaName) => {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}
  
const makeMessage = (pizzaName, callback) => {
  console.log(callback);
  return;
}

console.log(makeMessage("Royal Grand", makePizza));
// "Pizza Royal Grand is being prepared, please wait..."

console.log(makeMessage("Ultracheese", deliverPizza));
// "Delivering Ultracheese pizza."