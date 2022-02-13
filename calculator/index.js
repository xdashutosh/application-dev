"use strict";
const digits=document.querySelectorAll(".numbers");
const result=document.querySelector(".screen");
const history=document.querySelector(".history");
digits.forEach((num)=>{
    num.addEventListener("click",(e)=>{
const numtext=e.target.textContent;
result.textContent+=numtext;
});
});
const op=document.querySelectorAll(".op");
op.forEach((each_op)=>{
    each_op.addEventListener("click",(e)=>{
        let optext=e.target.textContent;
    
         if (optext!=="=") {
            result.textContent+=optext;
        }
        else if (optext=="=")
        {
           if (eval(result.textContent)) {
               
               result.textContent=eval(result.textContent);
               history.textContent=result.textContent;
        } 
        else{
            result.textContent="SYNTAX ERROR!";
        }
            
        } 
        
        
        
    })
});

const lastclear=document.querySelector("#lastclear");
const allclear=document.querySelector("#allclear");
allclear.addEventListener("click",(e)=>{
result.textContent=" ";
});
lastclear.addEventListener("click",()=>{
   let lastdig=result.textContent;
   lastdig=lastdig.slice(0,-1);
   result.textContent=lastdig;
});




