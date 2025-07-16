import "./styles.css"
import "./reset.css"

import { loadHomePage } from "./homepage"
import { loadContactUs } from "./contact-us"
import { loadMenu } from "./menu"

(function() {

const contentBlock = document.querySelector("#content"); 

const homeButton = document.querySelector(".homeBtn");
const menuButton = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

const addListeners = function() {

    homeButton.addEventListener("click", function() {

        homeButton.classList.add("underlined");
        menuButton.classList.remove("underlined");
        contactBtn.classList.remove("underlined");
        deleteContents();
        loadHomePage();
    });

    menuButton.addEventListener("click", function(){

        menuButton.classList.add("underlined");
        homeButton.classList.remove("underlined");
        contactBtn.classList.remove("underlined");
        deleteContents();
        loadMenu();
    });

    contactBtn.addEventListener("click", function(){

        contactBtn.classList.add("underlined");
        menuButton.classList.remove("underlined");
        homeButton.classList.remove("underlined");
        deleteContents();
        loadContactUs();
    });
};

const deleteContents = function() {
    while (contentBlock.hasChildNodes()) {
        contentBlock.firstChild.remove();
    };
};


addListeners();
homeButton.click();

})()




