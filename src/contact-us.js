const contactUsPage = function () {

const contentSection = document.querySelector("#content");

const heading = document.createElement("h2");
const headingSubtitle = document.createElement("h3")

const emailCard = document.createElement("div");
const addressCard = document.createElement("div");
const hoursCard = document.createElement("div");

const emailContent = document.createElement("p");
const addressContent = document.createElement("p");
const hoursContent = document.createElement("p");

emailCard.appendChild(emailContent);
addressCard.appendChild(addressContent);
hoursCard.appendChild(hoursContent);


heading.innerText = "Need to Get in Touch?"
headingSubtitle.innerText = "Whether it’s a reservation, event inquiry, or something else — we’re here. Reach out, swing by, or check our hours below."


emailContent.innerText = "Email: nat.berzatto@thebear.co.uk \n Call us at: 555-0312-330";
addressCard.innerText = "Visit Us:\nThe Bear\n 845 W Randolph St\nChicago, IL 60607\n Between Green St & Peoria St";
hoursCard.innerText = "Hours:\n Tuesday - Saturday\n Dinner Service: 5pm - 11pm\n Closed Sunday & Monday";

contentSection.appendChild(heading);
contentSection.appendChild(headingSubtitle);
contentSection.appendChild(emailCard);
contentSection.appendChild(addressCard);
contentSection.appendChild(hoursCard);
}


export {contactUsPage as loadContactUs}