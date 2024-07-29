const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const doubleMoney = document.getElementById("double-money");
const showMilionaiers = document.getElementById("show-milionaiers");
const sortRichest = document.getElementById("sort-richest");
const calculateWealth = document.getElementById("calculate-wealth");

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
}

//Update DOM
function updateDOM(provideData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
}

addUser.addEventListener("click", () => {});
