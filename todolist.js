"use strict";
console.log("hey this todo list");
const popup = document.querySelector(".popup");
const message=document.querySelector(".message");
popup.addEventListener("click",()=>{
message.textContent="we collect cookies for better experience.";
});