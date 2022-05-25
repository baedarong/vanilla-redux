import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
const ADD = "ADD";
const MINUS = "MINUS";
const counterModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD : return state + 1;
    case MINUS : return state - 1;
    default: return state;
  }
};

const counterStore = createStore(counterModifier)

const onChange = () => {
  number.innerText = counterStore.getState();
}
counterStore.subscribe(onChange) 

add.addEventListener("click", () => counterStore.dispatch({type:ADD}))
minus.addEventListener("click", () => counterStore.dispatch({type:MINUS}))
