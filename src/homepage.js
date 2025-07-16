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

const carmenImg = document.createElement("img");
const sydneyImg = document.createElement("img");
const richieImg = document.createElement("img");
const tinaImg = document.createElement("img");
const marcusImg =document.createElement("img");

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

carmenImg.src = importedCarm; 
sydneyImg.src = importedSyd;
richieImg.src = importedRichie;
tinaImg.src = importedTina;
marcusImg.src = importedMarcus

restaurantName.innerText = "The Bear";
subHeading.innerText = "We’re a small restaurant in Chicago. We cook good food. We care about the work. That’s it."
meetTheTeam.innerText = "Meet the Team";

carmenName.innerText = "Carmen, Executive Chef"
sydneyName.innerText = "Sydney, Chef de Cuisine"
richieName.innerText = "Richie, Front-of-House Manager"
tinaName.innerText = "Tina, Sous-Chef"
marcusName.innerText = "Marcus, Pastry Chef"

carmenDesc.innerText = "Trained at The French Laundry and Noma, Carmy returned to Chicago after a career in Michelin-starred kitchens to transform his family’s sandwich shop into a fine dining destination. He leads the kitchen with relentless precision and creative intensity.";
sydneyDesc.innerText = "A rising star with classical training and bold instincts, Syd brings fresh energy and seasonal focus to the menu. Partnered with Carmy, she helps shape The Bear’s evolving culinary identity while managing the day-to-day on the line.";
richieDesc.innerText = "Once the loudest guy behind the counter, Richie redefined himself through rigorous training at Ever. Now, he runs service with purpose and polish, making every guest feel seen — and every table feel special."
tinaDesc.innerText = "A longtime cook at The Beef, Tina rose through the ranks and found her stride during training at the Culinary Institute and Ever. She's now a backbone of the kitchen, specializing in handmade pastas and mentoring new cooks."
marcusDesc.innerText = "After honing his pastry skills during an intensive stage in Copenhagen, Marcus returned to The Bear with a sharper technique and a global perspective. His desserts blend precision and heart, bringing a thoughtful finish to every meal."


contentSection.appendChild(restaurantName);
contentSection.appendChild(subHeading);
contentSection.appendChild(meetTheTeam);
contentSection.appendChild(carmenImg);
contentSection.appendChild(carmenName);
contentSection.appendChild(carmenDesc);
contentSection.appendChild(sydneyImg);
contentSection.appendChild(sydneyName);
contentSection.appendChild(sydneyDesc);
contentSection.appendChild(richieImg);
contentSection.appendChild(richieName);
contentSection.appendChild(richieDesc);
contentSection.appendChild(tinaImg);
contentSection.appendChild(tinaName);
contentSection.appendChild(tinaDesc);
contentSection.appendChild(marcusImg);
contentSection.appendChild(marcusName);
contentSection.appendChild(marcusDesc);

}

export {homepage as loadHomePage}