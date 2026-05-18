const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = array[i] * value;
    }
  }; 
const numbers1 = [1, 2, 3, 4, 5];
 
dirtyMultiply(numbers1, 2);
 
const cleanMultiply = (array,value) => {
    const newArray = [];
    const result = array.forEach((item) => {
        //console.log(item);
        newArray.push(item * value);
    });

    //console.log(newArray, result);
}
cleanMultiply(numbers1, 2);

const cleanMultiply2 = (array,value) => {
    const result = array.map((item) => `<li>${item}</li>` );
    //console.log(result);
}
cleanMultiply2(numbers1, 2);

// 1 Зроби новий масив планет у аперкейс
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((item) => item.toLocaleUpperCase());
//console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// 2 Збережи у змінній planetsLengths масив, 
// що буде складатися з довжин назв кожної планети 
const planetsLengths = planets.map(((item) => item.length));
//console.log(planetsLengths);


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
const playersNames = players.map((item) => item.name);
//console.log(playersNames);

// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const updatedPlayers = players.map((item) => {
    return {
        ...item,
        points: Math.round(item.points * 1.1),
    }
});
//console.log(updatedPlayers);

// Збільшити кількість годин гравця по id.
const updatedPlayers2 = players.map((item) => {
    if(item.id === 'player-3'){
        return{
            ...item,
            timePlayed: item.timePlayed + 100,
        }
    }
    return item
})
//console.log(updatedPlayers2);

//filter()
// Отримати масив всіх гравців онлайн
const onlinePlayers = players.filter((item) => {
    return item.online
})
//console.log(onlinePlayers);

// Отримати масив всіх гравців офлайн
const offlinePlayers = players.filter((item) => {
    return item.online === false
})
.map((item) => {
    return item.name
})
//console.log(offlinePlayers);

// Отримати масив всіх хардкорних гравців з часом більше 250
const hardcorePlayers = players.filter((item) => {
    return item.timePlayed > 250
})
//console.log(hardcorePlayers);

//Find()
// Знайти гравця по id
const timePlayedById = function(id) {
    const playerById = players.find(item => {
        return id === item.id
    })
    return playerById
}

console.log(timePlayedById('player-2'));
// Знайти гравця по імені
const playerByName = players.find((item) => {
    return item.name === 'Poly'
})
console.log(playerByName);

//every()
// Перевірити чи всі гравці мають час більше 200
const isPlayersAllHardcore = players.every((item) => {
    return item.timePlayed > 200
})
console.log(isPlayersAllHardcore);

// Перевірити чи всі гравці онлайн
// some()
// перевірити чи є хоча б один гравецт не онлайн