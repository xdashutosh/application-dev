"use strict";
let currentscr=0;
const word=document.querySelector(".words");
const input=document.querySelector(".type");
const time=document.querySelector(".time");
const result=document.querySelector(".result");
const score=document.querySelector(".score");
const wordslist=[
    "laughter",
    "liver",
    "angry",
    "saracasm",
    "tripod",
    "window",
    "helicopter",
    "trident",
    "wonder",
    "trampoline",
    "horror"
];

const size=wordslist.length;
const ran=Math.trunc(Math.random()*size);
word.textContent=wordslist.at(ran-1);

input.addEventListener("input",()=>{
if (input.value===word.textContent) {
    word.textContent=wordslist.at(ran+1);
    input.value=" ";
    limit=5;
    currentscr=currentscr+1;
    score.textContent=currentscr;
    result.textContent="correct!";
}
});
input.addEventListener("input",()=>{
    if (input.value!=" ") {
        result.textContent=" ";
    }
})

let limit =5;
const timelimit=setInterval(() =>{
    time.textContent=limit;
 limit--;
if (limit==-1) {
    clearInterval(timelimit);
    result.textContent="game over!";
    score.textContent=0;
}
},1000);


