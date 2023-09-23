// let usernameRef=document.getElementById("username");
// let passwordRef=document.getElementById("password");
// let eyeL=document.querySelector(".eyeball-l");
// let eyeR=document.querySelector(".eyeball-r");
// let handL=document.querySelector(".hand-l");
// let handR=document.querySelector(".hand-r");

// let normalEyeStyle = () => {
// eyeL.style.cssText="left: 0.6em; top: 0.6em;";
// eyeL.style.cssText="right: 0.6em; bottom: 0.6em;";

// };
// let normalHandStyle = () =>{
// handL.style.cssText="height:2.81em;top:8.4em;transform:rotate(0deg);";
// handR.style.cssText="height:2.81em;top:8.4em;transform:rotate(0deg);";
// };
// //after clicking on the username input
// usernameRef.addEventListener("focus", () => {
//     eyeL.style.cssText="Left:0.75em; top:1.12em;"
//     eyeR.style.cssText="right:0.75em; top:1.12em;";
//     normalHandStyle();});
// //after clicking on the password input
//     passwordRef.addEventListener("focus", () => {
//     handL.style.cssText="height:6.56em;top:3.87em;left:11.75em;transform:rotate(-155deg);";
//     handR.style.cssText="height:6.56em;top:3.87em;right:11.75em;transform:rotate(155deg);";
//     normalEyeStyle();});
// //when clicked outside username and password input
// document.addEventListener("click", (e) => {
//     let clickedElem=e.target;
//     if(clickedElem !=usernameRef && clickedElem != passwordRef){
//         normalEyeStyle();
//         normalHandStyle();  
//     }});

console.log("Script is running.");
console.log("Script is running.");
console.log("Script is running.");

let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let pandaFace = document.querySelector(".panda-face");

let normalEyeStyle = () => {
    eyeL.style.cssText = "left: 0.6em; top: 0.6em;";
    eyeR.style.cssText = "right: 0.6em; bottom: 0.6em;";
};

let normalHandStyle = () => {
    handL.style.cssText = "height: 2.81em; top: 8.4em; transform: rotate(0deg);";
    handR.style.cssText = "height: 2.81em; top: 8.4em; transform: rotate(0deg);";
};

// Function to transform the panda
let transformPanda = () => {
    pandaFace.style.transform = "rotate(180deg) scale(1.2)";
};

// Function to reset the panda to its normal state
let resetPanda = () => {
    pandaFace.style.transform = "rotate(0deg) scale(1)";
};

// Add event listeners to handle transformations
usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = "left: 0.75em; top: 1.12em;";
    eyeR.style.cssText = "right: 0.75em; top: 1.12em;";
    normalHandStyle();
    transformPanda();
});

passwordRef.addEventListener("focus", () => {
    handL.style.cssText = "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
    handR.style.cssText = "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
    normalEyeStyle();
    transformPanda();
});

document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
        normalEyeStyle();
        normalHandStyle();
        resetPanda(); // Reset the panda to its normal state
    }
});
