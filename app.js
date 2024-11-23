
let a = 2;
let jordan = 6 + 5 + a;
// ---These are called VARIABLES

let screen = document.querySelector(".hiddenScreen");
let saying = document.querySelector('.greeting');
// ---These are called querySelectors


if(jordan === 22){
console.log("FelizNavidad")
}

jordan = "Instructor";
// This is Variable ReAssignment
const addToScreen = (message) => {
screen.innerHTML = ""
  screen.append(message);
};

const declareVars = () => {
    let message = "let a = 12 "
    addToScreen(message)
    console.log("message is here")
};
const showVarCombined = () => {
    let numOne = prompt("Enter first value")

    let numTwo = prompt("Enter Second value")
    
    let operator = prompt("Enter an Operator")
     if(operator === "+"){
        addToScreen("")
        addToScreen(Number(numOne)+ Number(numTwo))
     }else if(operator === "-"){
        addToScreen("")
        addToScreen(Number(numOne) -Number(numTwo))
     }
};
const doSomethingCool = () => {
    saying.innerHTML = "This was just changed by the use of FUNCTIONS in javascript"

    let robot = document.querySelector('.robot')
    robot.setAttribute("src", "https://media0.giphy.com/media/msSIuoQncJ6mEQF9Rw/giphy.gif?cid=6c09b952vv7cb8a2ve4siimjz0xv3pm80kdt51gso3ertrzm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s")
};
const showBtns = () => {
    let container = document.querySelector('.btnContainer')
    container.classList.toggle('show')
};
// ---These are called FUNCTIONS

console.log(jordan)
