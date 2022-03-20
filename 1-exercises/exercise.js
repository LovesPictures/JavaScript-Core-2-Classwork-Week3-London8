/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    */

let pElements1 = document.querySelectorAll(`p`);
console.log(pElements1);
/*

    2. the first div element node
    --> should log the ".site-header" node
*/
let pElements = document.querySelector(`.site-header`);
console.log(pElements);
/*

    3. the element with id "jumbotronText"
    --> should log the "" node
*/
let pElements2 = document.querySelector(`#jumbotronText`);
console.log(pElements2);
/*
    4. all the "p" elements of contained inside#jumbotronText the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//option
let primaryContentElem = document.querySelectorAll(".primary-content p");
console.log(primaryContentElem);

let pEl = document.querySelectorAll(`p`);
console.log(pEl);

// option 2
// consol.log(document.querySelectorAll(pElements p));

/*
option 3 - don't do this!
let primaryContent =document.querySelector(".primary-content")
  let pElement=primaryContent.querySelectorAll('p')
  console.log(pElement,'All p element in primary-content')
  */

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// option 1
// document.querySelector(`#donateBtn`).addEventListener(`click`, () => {
//   alert(`I was clicked`);
// });

// option 2
let myButton = document.querySelector("#donateBtn");

myButton.addEventListener("click", () => {
  alert(`I was clicked ok`);
});

// Dom events list of eventslisteners w3shools

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let header = document.querySelector(`.display-3`);
header.style.backgroundColor = `red`;

// ccs in js  - not separation of concerns

// Task 4
// ======

let largerLink = document.querySelector(`#largerlinksBtn`);
largerLink.addEventListener(`click`, () => {
  largerLink.style.backgroundColor = `pink`;
  let aTags = document.querySelectorAll(`a`);
  // console.log(aTags);

  for (let i = 0; i < aTags.length; i++) {
    // change the font
    aTags[i].style.fontSize = `40px`;
  }
});

/*
When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

/*
Task 5
======
*/
// create a new p tag
let myNewPara = document.createElement(`p`);
// change its inner text
myNewPara.innerText = `I was created in JS!`;
//select some existing element
let myExistingDiv = document.querySelector(`#myDiv`);
// nest the new paragraph inside this existing elelment
console.log(myExistingDiv);

//search for : html imput element

/*(
When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

let alertBtn = document.querySelector(`#alertBtn`);
alertBtn.addEventListener(`click`, () => {
  let newPara1 = document.createElement(`p`);
  newPara1.innerText = `something goes in here`;
  let myDiv = document.querySelector(`#addArticle`);
  myDiv.appendChild(newPara1);
});

// option 2
let addArticleButton = document.querySelector("#addArticleBtn");

addArticleButton.addEventListener("click", () => {
  // selects existing div
  let myDiv = document.querySelector("#addArticle");

  // selected the input element
  let myInput = document.querySelector("#addArticleInput").value;

  let text = myInput.value;

  // creating a new paragraph element
  let newParagraph = document.createElement("p");

  // assigns text of new paragraph to be the text of the input field
  newParagraph.innerText = text;

  // insert the new paragraph inside the existing div
  myDiv.appendChild(newParagraph);
});
