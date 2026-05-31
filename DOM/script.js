const listEl = document.querySelector(".site-nav");
//console.log(listEl);

const firstListChild = listEl.firstElementChild;
//console.log(firstListChild.textContent);
firstListChild.style.color = "green";
firstListChild.firstElementChild.style.color = "green"

const allChildrens = listEl.children;
//console.log(allChildrens);

for (const child of allChildrens) {
    const link = child.firstElementChild;
    //console.log(link);
    //console.log(child);
    link.classList.add("nav-link");
}

const linksEl = document.querySelectorAll(".site-nav__item >  a")
//console.log(linksEl);

for (const link of linksEl) {
    //console.log(link);
    link.classList.add("new-link")
}

const inputEl = document.querySelector("input")
console.log(inputEl);
const inputValue = inputEl.value;
console.log(inputValue);
const buttonEl = document.querySelector('button[type = "button"]');
console.log(buttonEl);
buttonEl.textContent = inputValue;


