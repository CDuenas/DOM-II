// Your code goes here
const navStuff = document.querySelector('h1');

navStuff.addEventListener('mouseover', () => {
    navStuff.style.color = "red";
})

navStuff.addEventListener('mouseleave', () => {
    navStuff.style.color = "black";
})

const bigHeaderImg = document.querySelector('img');

bigHeaderImg.addEventListener('click', (event) => {
    bigHeaderImg.style.transform = "scale(1.2)";
})

bigHeaderImg.addEventListener('dblclick', (event) => {
    bigHeaderImg.style.transform = "scale(1.0)";
    console.log("Clicked the big picture");
    
    //stopPropagation Task
    event.stopPropagation();
})

const windowChange = document.querySelector('body')
window.addEventListener ('resize', () => {
    console.log("The window size has changed.")
})

window.addEventListener ('scroll', () => {
    console.log("The window has moved.")
})

window.addEventListener ('contextmenu', (event) => {
    event.preventDefault();
})

const allImg = document.querySelectorAll('img');
console.log(allImg);
allImg[1].addEventListener('mouseenter', () => {
    console.log("This is the 2nd picture");
})

allImg[1].addEventListener('mouseup', () => {
    console.log("No longer on the 2nd picture");
})

windowChange.addEventListener ('dblclick', () => {
    console.log("Clicked on the page");
})






//Stop Nav Links
const stopRefresh = document.querySelectorAll('.nav-link')
stopRefresh.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    });
})