"use strict";
const dates=new Date();
const datebox=document.querySelector(".dates");
const datestyle={
    month:"long",
    weekday: "long",
    day:"2-digit"
};
const belong =navigator.language;
datebox.textContent=`${new Intl.DateTimeFormat(belong,datestyle).format(dates)}`;

const clear=document.querySelector("#clear");
const container=document.querySelector(".container");
const todo=document.querySelector(".todo");
const add=document.querySelector("#add");
const todo_area=document.querySelector(".head_cont");

const lisdata=""
todo_area.insertAdjacentHTML("afterend",listdata);


