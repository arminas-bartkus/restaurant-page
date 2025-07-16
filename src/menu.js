import pizzaRolls from "./img/MENU/pizza-rolls.jpg"
import octopus from "./img/MENU/octopus.jpg"
import nuttyMeat from "./img/MENU/nutty-meats.jpg"
import steakTartare from "./img/MENU/steak-tartare.jpg"
import steak from "./img/MENU/steak.jpg"
import sweetPotato from "./img/MENU/sweet-potato.jpg"

const loadMenu = function() {

const contentSection = document.querySelector("#content");

const pageBody = document.querySelector("body");
pageBody.classList.add("menuPage");

const menuTitle = document.createElement("h2");
menuTitle.innerText = "Today's Menu"

const pizzaRollsCard = document.createElement("div");
const octopusCard = document.createElement("div");
const nuttyMeatCard = document.createElement("div");
const steakTartareCard = document.createElement("div");
const steakCard = document.createElement("div");
const sweetPotatoCard = document.createElement("div");

const firstRowDiv = document.createElement("div");
const secondRowDiv = document.createElement("div");

firstRowDiv.classList.add("row");
secondRowDiv.classList.add("row");

const pizzaRollsImg = document.createElement("img");
const octopusImg = document.createElement("img");
const nuttyMeatImg = document.createElement("img");
const steakTartareImg = document.createElement("img");
const steakImg = document.createElement("img");
const sweetPotatoImg = document.createElement("img");


pizzaRollsImg.classList.add("foodImg");
octopusImg.classList.add("foodImg");
nuttyMeatImg.classList.add("foodImg");
steakTartareImg.classList.add("foodImg");
steakImg.classList.add("foodImg");
sweetPotatoImg.classList.add("foodImg");


pizzaRollsImg.src = pizzaRolls;
octopusImg.src = octopus;
nuttyMeatImg.src = nuttyMeat;
steakTartareImg.src = steakTartare;
steakImg.src = steak;
sweetPotatoImg.src = sweetPotato;

const pizzaRollsText = document.createElement("p");
const octopusText = document.createElement("p");
const nuttyMeatText = document.createElement("p");
const steakTartareText = document.createElement("p");
const steakText = document.createElement("p");
const sweetPotatoText = document.createElement("p");

pizzaRollsText.innerText = "Pizza Rolls \nFine Dining with a Taste of Home"
octopusText.innerText = "Octopus\nSalted to the Sea"
nuttyMeatText.innerText = "Tuna with Nuts\nUnlock a new taste"
steakTartareText.innerText = "Steak Tartare\nFresh, clean, and to the point"
steakText.innerText = "Steak\n Served Medium rare"
sweetPotatoText.innerText = "Sweet Potato with Couscous\nChef Tina's Special"

pizzaRollsCard.appendChild(pizzaRollsImg);
pizzaRollsCard.appendChild(pizzaRollsText);

octopusCard.appendChild(octopusImg);
octopusCard.appendChild(octopusText);

nuttyMeatCard.appendChild(nuttyMeatImg);
nuttyMeatCard.appendChild(nuttyMeatText);

firstRowDiv.appendChild(pizzaRollsCard);
firstRowDiv.appendChild(octopusCard);
firstRowDiv.appendChild(nuttyMeatCard);

steakTartareCard.appendChild(steakTartareImg);
steakTartareCard.appendChild(steakTartareText);

steakCard.appendChild(steakImg);
steakCard.appendChild(steakText);

sweetPotatoCard.appendChild(sweetPotatoImg);
sweetPotatoCard.appendChild(sweetPotatoText);

secondRowDiv.appendChild(steakTartareCard);
secondRowDiv.appendChild(steakCard);
secondRowDiv.appendChild(sweetPotatoCard);

contentSection.appendChild(menuTitle);
contentSection.appendChild(firstRowDiv);
contentSection.appendChild(secondRowDiv);

}

export {loadMenu}