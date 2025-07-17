const contactUsPage = function () {

const pageBody = document.querySelector("body");
pageBody.classList.remove("menuPage")

const contentSection = document.querySelector("#content");

const heading = document.createElement("h2");
const headingSubtitle = document.createElement("h3")


const cardsDiv = document.createElement("div");

const emailCard = document.createElement("div");
const addressCard = document.createElement("div");
const hoursCard = document.createElement("div");

const emailContent = document.createElement("p");
const addressContent = document.createElement("p");
const hoursContent = document.createElement("p");

emailCard.appendChild(emailContent);
addressCard.appendChild(addressContent);
hoursCard.appendChild(hoursContent);

cardsDiv.appendChild(addressCard);
cardsDiv.appendChild(emailCard);
cardsDiv.appendChild(hoursCard);

cardsDiv.classList.add("cardsDiv")

heading.innerText = "Need to get in touch?"
headingSubtitle.innerText = "Whether it’s a reservation, event inquiry, or something else, we’re here. Reach out, swing by, or check our hours below."


emailContent.innerText = "Email or Call:\nnat.berzatto@thebear.co.uk \n555-0312-330";
addressContent.innerText = "Visit Us:\nThe Bear\n 845 W Randolph St\nChicago, IL 60607";
hoursContent.innerText = "Hours:\n Tuesday - Saturday\n Dinner Service: \n5pm - 11pm";

heading.classList.add("contactHeading");
headingSubtitle.classList.add("contactSubHeading");
emailCard.classList.add("contactCard");
addressCard.classList.add("contactCard");
hoursCard.classList.add("contactCard");

contentSection.appendChild(heading);
contentSection.appendChild(headingSubtitle);
contentSection.appendChild(cardsDiv);
}


export {contactUsPage as loadContactUs}