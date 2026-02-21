// Welcome guestName, your room number is roomNumber!
const guestName = "Mango";
const roomNumber = 207;

const greeting = "Welcome" + " " + guestName + "," + " " + "your room number is " + roomNumber + "!";
const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;

console.log(greeting);
console.log(greeting2);


const productName = "apple"
const productPrice = 2

const message1 = "You picked" + " " + productName + "," + " " + "price per item is" + " " + productPrice + " " + "credits";
console.log(message1);

const message = `You picked ${productName}, price per item is ${productPrice} credits`;
console.log(message.length);

const lastIndex = message.length - 1;
const lastSymbol = message[lastIndex];
console.log(lastSymbol);
console.log(message[2]);

const modMessange = message.toUpperCase();
console.log(modMessange);

const modMessange1 = message.toLowerCase();
console.log(modMessange1);

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();
console.log(normalizedToUpperCaseInput === BRAND_NAME);

console.log(message.indexOf("price"));
console.log(message.indexOf("Two"));
console.log(message.includes("spam"));
console.log(message.includes("Item"));

const fileName = "styles.css";
console.log(fileName.endsWith(".js"));
console.log(fileName.endsWith(".css"));

const number = 84;
const hours = Math.floor(number / 60);
const minutes = number % 60;
console.log(hours, minutes);
 
const modHours = String(hours).padStart(2,0);
console.log(modHours);

const modMinutes = String(minutes).padStart(2,0);

console.log(`${modHours}:${modMinutes}`);
