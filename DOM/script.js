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
//console.log(inputEl);
const inputValue = inputEl.value;
//console.log(inputValue);
const buttonEl = document.querySelector('button[type = "button"]');
//console.log(buttonEl);
buttonEl.textContent = inputValue;


const newList = document.querySelector(".js_list");
//console.log(newList);

const newItem = document.createElement("li");
newItem.classList.add("_item");

const newLinkEl = document.createElement("a");
newLinkEl.textContent = "Hello";

newItem.appendChild(newLinkEl);
//console.log(newItem);

newList.appendChild(newItem);


const colorPickerContainer = document.querySelector('.js-color-picker');
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const buttonList = [];

for (const color of  colorPickerOptions) {
    const btn = document.createElement("button");
    btn.textContent = color.label;
    btn.style.backgroundColor = color.color;
    btn.type = "button";
    buttonList.push(btn);
}

//console.log(buttonList);

colorPickerContainer.append(...buttonList);


newList.innerHTML = '<li class="js_item"><a href="./index.html"><span>hi</span></a></li>';
newList.insertAdjacentHTML("afterbegin", '<li class="js_item"><a href="./index.html"><span>nooo</span></a></li>');

const markap = colorPickerOptions.map(option => {
    return `<button type="button" class="btn" style="background-color: ${option.color};">label ${option.label}</button>`
})
.join("")
colorPickerContainer.innerHTML = markap
console.log(markap);
