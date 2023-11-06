/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */

const itemList = document.getElementById("itemList");
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {
  const selectedOption = itemList.options[itemList.selectedIndex];

  if (selectedOption) {
    itemList.removeChild(selectedOption);
  }
});
