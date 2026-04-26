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
        console.log(this.descr);
        
    },
    showRating(){
        return this.rating
    },
    addTag(newTag){
        this.tags.push(newTag)
    }
} 

console.log(apartment.showRating());

apartment.addTag("trusted")
apartment.showDescr();
apartment.changePrice();
apartment[key] = {

}

apartment.owner= {}
const ownerName = "Genry";
console.log(apartment);
apartment.owner.name = ownerName;
apartment.price = 75000;
//apartment.rating = 4.7;
apartment.tags.push("trusted");
