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
        deleteContents();
        loadHomePage();
    });

    menuButton.addEventListener("click", function(){
        deleteContents();
        loadMenu();
    });

    contactBtn.addEventListener("click", function(){
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
loadHomePage();

})()




