/*let number = 10;
while( number > 0 && number <= 10) {
    console.log(number);
    number -= 1;
}*/

/*do {
    console.log(number);
    number -= 1;
} while (number > 0 && number <= 10);

for (let i = 10; number > 0 && number <= 10; i-=1) {
    console.log(i);
}

const number = 10;
let result = 0;

for(let i = 0; number >= i; i += 1){
    result += i
    console.log(i);
}

console.log(result);

// 2
// Переписати на while


for (let number = 0; number < 5; number += 1) {
    console.log(`Число ${number}`);
}

let number = 0;
while (number < 5) {
    number += 1;
    console.log(`Число ${number}`)
}

for (let i = 10; i >= 0; i -= 2) {
    console.log(i); 
}

if (index % 2 === 0);

for(let i = 0; i < 10; i += 1){
    
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}*/

//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end, 
// яке ділиться на 5 без остачі

const start = 6;
const end = 17;
let w;
for(let i = start; i < end; i += 1){
    
    if(i % 5 === 0){
        console.log(i);
        break
    }
    
}