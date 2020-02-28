// Make a div
// add a class of wrapper to it
const html = `<div class="wrapper">
</div>`;

// put it into the body
document.body.insertAdjacentHTML('beforeend', html);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';

const li2 = document.createElement('li');
li2.textContent = 'two';

const li3 = document.createElement('li');
li3.textContent = 'three';

ul.append(li1, li2, li3);

// put that list into the above wrapper
const getWrapper = document.querySelector('.wrapper');
getWrapper.insertAdjacentElement('beforeend', ul);

// create an image
const img = document.createElement('img');

// *** set the source to an image (change the size once it has loaded? * NOT WORKING *)
img.src = 'https://picsum.photos/500';

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
// getWrapper.insertAdjacentElement('beforeend', img);
getWrapper.appendChild(img);

// *** with HTML string, make a div, with two paragraphs inside of it
// *** put this div before the unordered list from above
// *** ^ add a class to the second paragraph called warning
// *** ^ remove the first paragraph
const moreHTML = `
<div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>
`;

const ulElement = getWrapper.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', moreHTML);
const myDiv = getWrapper.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();
// myDiv.firstElementChild.nextSibling.classList.add('warning');
// console.log(
//   myDiv.firstElementChild.nextElementSibling.classList.add('warning')
// );

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// function generatePlayerCard(name, age, height) {
//   return `
//         <div class="playerCard">
//             <h2>${name} — ${age}</h2>
//             <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
//         </div>`;
// }

const generatePlayerCard = (name, age, height) =>
  `<div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="btn__deleteCard">Delete</button>
    </div>`;

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('Yusuf', 20, 170);
const card2 = generatePlayerCard('Bob', 20, 170);
const card3 = generatePlayerCard('John', 20, 170);
const card4 = generatePlayerCard('Doe', 20, 170);
const cardsArr = [card1, card2, card3, card4];

// append those cards to the div
cardsArr.forEach(value => cardsDiv.insertAdjacentHTML('beforeend', value));
console.log(cardsDiv);

// put the div into the DOM just before the wrapper element
// * Concept to go over again using this example - DOM Traversal?
getWrapper.insertAdjacentElement('beforebegin', cardsDiv);

// My solution works however Wes' solution uses a separate function to perform the delete operation.
// He uses the 'event' value which is always available in an event listener function, no need to be passed in.
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const deleteButtons = document.querySelectorAll('.btn__deleteCard');
console.log(deleteButtons);

deleteButtons.forEach(value =>
  value.addEventListener('click', function() {
    this.parentElement.remove();
  })
);
