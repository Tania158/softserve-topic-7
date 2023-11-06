/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/

const button = document.querySelector("button");
const messageContainer = document.createElement("div");
document.body.appendChild(messageContainer);
let messages = [];

function addMessage(text) {
  messages.push(text);
  if (messages.length > 5) {
    messages.shift();
    messageContainer.removeChild(messageContainer.firstElementChild);
  }
  const message = document.createElement("p");
  message.textContent = text;
  messageContainer.appendChild(message);
}

button.addEventListener("click", () => addMessage("I was pressed!"));
button.addEventListener("mouseenter", () => addMessage("Mouse on me!"));
button.addEventListener("mouseleave", () => addMessage("Mouse is not on me!"));
