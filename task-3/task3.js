/**
Додайте код в [task3.js](task3.js), який додасть обробники подій для елементів сторінки [task3.html](task3.html):

1. 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
2. 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
3. 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
4. При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
 */

const firstBtn = document.querySelector("button:nth-of-type(1)");
const secondBtn = document.querySelector("button:nth-of-type(2)");
const thirdBtn = document.querySelector("button:nth-of-type(3)");
const link = document.querySelector("a");

// 1
firstBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

// 2
secondBtn.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});

// 3
thirdBtn.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});
thirdBtn.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

//4
link.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});
