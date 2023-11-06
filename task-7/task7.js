/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */
const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const resultParagraph = document.querySelector("p");

const citiesByCountry = {
  ger: ["Berlin", "Hamburg", "Munich", "Cologne"],
  usa: ["New York", "Los Angeles", "Chicago", "San Francisco"],
  ukr: ["Kyiv", "Lviv", "Kharkiv", "Odessa"],
};

function updateCities() {
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry] || [];

  citiesSelect.innerHTML = "";

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });

  updateParagraph();
}

function updateParagraph() {
  resultParagraph.textContent =
    "Selected country: " +
    countrySelect.options[countrySelect.selectedIndex].text +
    ", Selected city: " +
    (citiesSelect.value || "None");
}

countrySelect.addEventListener("change", updateCities);
citiesSelect.addEventListener("change", updateParagraph);
updateCities();
