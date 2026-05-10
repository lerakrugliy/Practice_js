// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].


const area = 60;
const rooms = 3;
const key = "location"

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    area,
    rooms,
    [key]: {
        country: "Spain",
        city: "Barcelona"
    },

    changePrice(newPrice){
        this.price = 5034;
    },
    showDescr(){
        //console.log(this.descr);
        
    },
    showRating(){
        return this.rating
    },
    addTag(newTag){
        this.tags.push(newTag)
    }
} 

//console.log(apartment.showRating());

apartment.addTag("trusted")
apartment.showDescr();
apartment.changePrice();
apartment[key] = {

}

apartment.owner= {}
const ownerName = "Genry";
//console.log(apartment);
apartment.owner.name = ownerName;
apartment.price = 75000;
//apartment.rating = 4.7;
apartment.tags.push("trusted");

// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps =[...lastWeekTemps, ...currentWeekTemps] ;
//console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores] ;
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
//console.log(bestScore, worstScore);


// 3
// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().
const getExtremeScores = function(scores){
    const best = Math.max(...scores);
    const worst = Math.min(...scores);
    return {
        best,
        worst,
    }
}
 //{ best: 93, worst: 17 }
 //{ best: 81, worst: 4 }
//console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
//console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// Практика разом деструктуризувати
// Об’єкт car
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

//const {make, model: carModel, year, features = [ ], safety: {airbags, antilock_brakes, stability_control}} = car

//onsole.log(make, carModel, year, features, airbags, antilock_brakes, stability_control);

// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

//const{title, director: {name: nameDirector, nationality: nationalityDirector}, actors, release_year, ratings} = movie
//console.log(title, nameDirector, nationalityDirector, actors, release_year, ratings);

// Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}

//const{count, list} = books
//console.log(count, list);

// 2
// Напишіть функцію, яка приймає об'єкт, що містить інформацію 
// про студента (ім'я, прізвище, оцінки за три предмети) та 
// використовує деструктуризацію для повернення середньої оцінки 
// студента.
const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };

const calculateAvarageRate = function(student) {
    let sum = 0;
    const{grades} = student;
    for (const grade of grades) {
        sum += grade
        console.log(sum);
    }
    return sum / grades.length
}

//calculateAvarageRate(student)



const movie1 = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  },
}

//const{actors} = movie1 
const{actors: [actor1, actor2]} = movie1
//console.log(actor1, actor2);
const [actor3, actor4] = movie1.actors;
//console.log(actor3, actor4);

// Об’єкт car
const car1 = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

const[feature1, feature2, feature3] = car1.features
//console.log(feature1, feature2, feature3);
const{features: [feature4, feature5, feature6]} = car1
//console.log(feature4, feature5, feature6);

// Напишіть функцію, яка отримує об'єкт 
// з ім'ям, прізвищем та віком та використовує 
// деструктуризацію для повернення рядка, 
// що містить інформацію про цю людину в такому форматі:
//  "Мене звати Ім'я Прізвище і мені Вік років".

const personInfo = function(personObj) {
  //console.log(personObj);
  const{name, lastName, age} = personObj
  return `Мене звати ${name} ${lastName} мені ${age}`
}

/*console.log(personInfo({
  name: "Лєра",
  lastName: "Круглій",
  age: 14,
}));*/



// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
 const cart = {
  items: [],
  getItems() {
    return this.items;
  },
   add(product) {
    this.items.push(product);
    return `Ви додали ${product.name}`
   },
   remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if(productName === this.items[i].name){
        console.log(this.items[i].name);
        this.items.splice(i, 1)
      }
    }
   },
   clear() {},
   countTotalPrice() {},
   increaseQuantity(productName) {},
   decreaseQuantity(productName) {},
 };

console.log(cart.getItems());
console.log(cart.add({ name: '🍎', price: 50 }));
console.log(cart.add({ name: '🍇', price: 70 }));
console.log(cart.add({ name: '🍋', price: 60 }));
console.log(cart.add({ name: '🍓', price: 110 }));
console.log(cart.getItems());
console.log(cart.remove('🍎'));
console.log(cart.getItems());