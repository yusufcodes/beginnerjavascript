/* Purpose: Create a functioning 'modal' popup which opens when a button is clicked, and then closed when the user clicks anywhere outside of the modal popup. */

const cardButtons = document.querySelectorAll('.cardbutton');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  // Grab the current button being clicked on
  const button = event.currentTarget;

  // Returns the closest ancestor of the selected element, being the closest element to the button with a class of card
  const card = button.closest('.card');

  // Get the source of the image
  const imgSrc = card.querySelector('img').src;

  // Grab the 'data-description' attribute (custom attr.)
  const desc = card.dataset.description;

  const name = card.querySelector('h2').textContent;

  // Populate modal with new information
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
  <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  /* This is to determine whether or not a click was done either inside the modal (do nothing) or outside the modal (close the modal). 
  When inside the modal, closest will be able to find modal-inner, meaning we do not want to close the modal. Otherwise, outside the modal, modal-inner will not be found. This means we can proceed to close the modal. 
  The exclamation mark turns the value into a boolean. */
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});

// const cardButtons = document.querySelectorAll('.card button');
// const modalOuter = document.querySelector('.modal-outer');
// const modalInner = document.querySelector('.modal-inner');

// function handleCardButtonClick(event) {
//   const button = event.currentTarget;
//   const card = button.closest('.card');
//   // Grab the image src
//   const imgSrc = card.querySelector('img').src;
//   const desc = card.dataset.description;
//   const name = card.querySelector('h2').textContent;
//   // populate the modal with the new info
//   modalInner.innerHTML = `
//     <img width="600" height="600" src="${imgSrc.replace(
//       '200',
//       '600'
//     )}" alt="${name}"/>
//     <p>${desc}</p>
//   `;
//   // show the modal
//   modalOuter.classList.add('open');
// }

// cardButtons.forEach(button =>
//   button.addEventListener('click', handleCardButtonClick)
// );

// function closeModal() {
//   modalOuter.classList.remove('open');
// }

// modalOuter.addEventListener('click', function(event) {
//   const isOutside = !event.target.closest('.modal-inner');
//   if (isOutside) {
//     closeModal();
//   }
// });

// window.addEventListener('keydown', event => {
//   console.log(event);
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// });
