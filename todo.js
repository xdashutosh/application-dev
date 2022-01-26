"use strict";
const add=document.querySelector(".add");
const fillhere=document.querySelector(".fillhere");
const todoarea=document.querySelector(".todoarea");
const warn=document.querySelector(".warn");
add.addEventListener("click",()=>{
    const list=document.createElement("div");
    list.classList.add("slot");
    list.innerHTML=`${fillhere.value}<button class="delete">X</button>`;
    if (fillhere.value!=="") {   
        todoarea.append(list);    
    }
    else{
        warn.classList.remove("dis");
        fillhere.addEventListener("click",()=>{
        warn.classList.add("dis");
        })
    }
    const close=document.createElement("button");
    close.classList.add("delete");
    close.addEventListener("click",()=>{
list.classList.remove("slot");
    });

    
    fillhere.value="";
});




