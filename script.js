const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleMoneyBtn = document.getElementById("double-money");
const showMilionaiersBtn = document.getElementById("show-milionaiers");
const sortRichestBtn = document.getElementById("sort-richest");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

//Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

//Add new obj to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//Update DOM
function updateDOM(provideData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  provideData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Format money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//double money
function doubleMoney() {
  data = data.map((el) => ({ ...el, money: el.money * 2 }));
  updateDOM();
}

//sort by richest
function sortMoney() {
  data = data.sort((a, b) => b.money - a.money);
  updateDOM();
}

//show only milionaiers
function showMilionaiers() {
  data = data.filter((el) => el.money > 1000000);
  updateDOM();
}

//event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleMoneyBtn.addEventListener("click", doubleMoney);
sortRichestBtn.addEventListener("click", sortMoney);
showMilionaiersBtn.addEventListener("click", showMilionaiers);
