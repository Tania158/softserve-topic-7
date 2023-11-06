/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
function changeCSS() {
  const paragraph = document.getElementById("text");

  const style = {
    color: "orange",
    fontSize: "20px",
    fontFamily: "Comic Sans MS",
  };

  for (let key in style) {
    paragraph.style[key] = style[key];
  }

  // or --------------------------------------------

  // paragraph.style.color = "orange";
  // paragraph.style.fontSize = "20px";
  // paragraph.style.fontFamily = "Comic Sans MS";
}

const btn = document.querySelector("button");
btn.addEventListener("click", changeCSS);

// or --------------------------------------------

// btn.onclick = () => changeCSS();
