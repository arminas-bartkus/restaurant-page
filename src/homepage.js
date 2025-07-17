import importedCarm from "./img/carm.jpg";
import importedSyd from "./img/syd.jpg";
import importedRichie from "./img/richie.jpg"
import importedTina from "./img/tina.jpg"
import importedMarcus from "./img/Marcus.jpg"

const homepage = function() {

const pageBody = document.querySelector("body");
pageBody.classList.remove("menuPage");

const contentSection = document.querySelector("#content");

const restaurantName = document.createElement("h1");
const subHeading = document.createElement("h2");
const meetTheTeam = document.createElement("h2");

meetTheTeam.classList.add("meetTheTeamSubheading")

const carmenImg = document.createElement("img");
const sydneyImg = document.createElement("img");
const richieImg = document.createElement("img");
const tinaImg = document.createElement("img");
const marcusImg = document.createElement("img");

carmenImg.classList.add("meetMeImg");
sydneyImg.classList.add("meetMeImg");
richieImg.classList.add("meetMeImg");
tinaImg.classList.add("meetMeImg");
marcusImg.classList.add("meetMeImg");


const carmenName = document.createElement("h3");
const sydneyName = document.createElement("h3");
const richieName = document.createElement("h3");
const tinaName = document.createElement("h3");
const marcusName = document.createElement("h3");

const carmenDesc = document.createElement("p");
const sydneyDesc = document.createElement("p"); 
const richieDesc = document.createElement("p");
const tinaDesc = document.createElement("p");
const marcusDesc = document.createElement("p"); 

const carmTextDiv = document.createElement("div");
const sydTextDiv = document.createElement("div");
const richieTextDiv = document.createElement("div");
const tinaTextDiv = document.createElement("div");
const marcusTextDiv = document.createElement("div");

carmTextDiv.appendChild(carmenName);
carmTextDiv.appendChild(carmenDesc);

sydTextDiv.appendChild(sydneyName);
sydTextDiv.appendChild(sydneyDesc);

richieTextDiv.appendChild(richieName);
richieTextDiv.appendChild(richieDesc);

tinaTextDiv.appendChild(tinaName);
tinaTextDiv.appendChild(tinaDesc);

marcusTextDiv.appendChild(marcusName);
marcusTextDiv.appendChild(marcusDesc);

const carmWholeDiv = document.createElement("div");
const sydWholeDiv = document.createElement("div");
const richieWholeDiv = document.createElement("div");
const tinaWholeDiv = document.createElement("div");
const marcusWholeDiv = document.createElement("div");

carmWholeDiv.appendChild(carmTextDiv);
carmWholeDiv.appendChild(carmenImg);

sydWholeDiv.appendChild(sydneyImg);
sydWholeDiv.appendChild(sydTextDiv);

richieWholeDiv.appendChild(richieTextDiv);
richieWholeDiv.appendChild(richieImg);

tinaWholeDiv.appendChild(tinaImg);
tinaWholeDiv.appendChild(tinaTextDiv);

marcusWholeDiv.appendChild(marcusTextDiv);
marcusWholeDiv.appendChild(marcusImg);

carmWholeDiv.classList.add("charSection");
sydWholeDiv.classList.add("charSection");
richieWholeDiv.classList.add("charSection");
tinaWholeDiv.classList.add("charSection");
marcusWholeDiv.classList.add("charSection");


carmenImg.src = importedCarm; 
sydneyImg.src = importedSyd;
richieImg.src = importedRichie;
tinaImg.src = importedTina;
marcusImg.src = importedMarcus

restaurantName.innerText = "The Bear";
subHeading.innerText = "We’re a small restaurant in Chicago. We cook good food. We care about the work. That’s it."
meetTheTeam.innerText = "Meet the team behind the craft:";

carmenName.innerText = "Carmen, \nExecutive Chef"
sydneyName.innerText = "Sydney, \nChef de Cuisine"
richieName.innerText = "Richie, \nFront-of-House Manager"
tinaName.innerText = "Tina, \nSous-Chef"
marcusName.innerText = "Marcus, \nPastry Chef"

carmenDesc.innerText = "Trained at The French Laundry and Noma, Carmy returned to Chicago after a career in Michelin-starred kitchens to transform his family’s sandwich shop into a fine dining destination. He leads the kitchen with relentless precision and creative intensity.";
sydneyDesc.innerText = "A rising star with classical training and bold instincts, Syd brings fresh energy and seasonal focus to the menu. Partnered with Carmem, she helps shape The Bear’s evolving culinary identity while managing the day-to-day on the line.";
richieDesc.innerText = "Once the loudest guy behind the counter, Richie redefined himself through rigorous training at Ever. Now, he runs service with purpose and polish, making every guest feel seen — and every table feel special."
tinaDesc.innerText = "A longtime cook at The Beef, Tina rose through the ranks and found her stride during training at the Culinary Institute and Ever. She's now a backbone of the kitchen, specializing in handmade pastas and mentoring new cooks."
marcusDesc.innerText = "After honing his pastry skills during an intensive stage in Copenhagen, Marcus returned to The Bear with a sharper technique and a global perspective. His desserts blend precision and heart, bringing a thoughtful finish to every meal."


contentSection.appendChild(restaurantName);
contentSection.appendChild(subHeading);
contentSection.appendChild(meetTheTeam);

contentSection.appendChild(carmWholeDiv);
contentSection.appendChild(sydWholeDiv);
contentSection.appendChild(richieWholeDiv);
contentSection.appendChild(tinaWholeDiv);
contentSection.appendChild(marcusWholeDiv);
}

export {homepage as loadHomePage}