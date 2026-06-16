// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.

// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.

const buttonEl = document.querySelector(".js-button");

const onButtonClick = (event) => {
    const buttonEl = event.target;
    //console.log(buttonEl);
    buttonEl.style.backgroundColor = "green";
}

buttonEl.addEventListener("click", onButtonClick);

const titleEl = document.querySelector(".js-title");
const addStylesBtn = document.querySelector(".js-add-styles");

const onAddStylesButtonClick = () => {
    titleEl.classList.add("new-title");
}

addStylesBtn.addEventListener("click", onAddStylesButtonClick);

const form = document.querySelector(".form");
const text = document.querySelector(".greeting");
const onFormSubmit = (event) => {
    event.reventDefault()
    console.log(event.target, event.currentTarget);
    const form = event.target;
    console.log(form.elements);
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const gender = form.elements.gender.value;
    const message = `Дякую ${name} ${surname} за реєстрацію(${gender})`
    text.textContent = message;
}

//form.addEventListener("submit", onFormSubmit);

const messageInput = document.querySelector(".messageInput");
const messageText = document.querySelector(".messageText");

const onInputChange = (event) => {
    const value = event.currentTarget.value;
    messageText.textContent = value;
}

messageInput.addEventListener("input", onInputChange);