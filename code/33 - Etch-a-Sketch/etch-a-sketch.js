/*
TO DO:
- Compare my entire solution to Wes' - all core functionality is here but method of coding is diffferent 
*/

// *** Select the elements on the page ***
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // This is where actual drawing will occur
const shakeBtn = document.querySelector('.shake');

// *** Setup the canvas for drawing ***
// Destructuring: Setting the variables declared in the curly braces on the left (width, height), to the corresponding properties from the object on the right (canvas)
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let randomWidth;
let randomHeight;

// How we want the line to look
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// Initialisation function: To be ran in the beginning and also when we reset the board
const init = () => {
  // Random width: Between 0 and width
  randomWidth = Math.floor(Math.random() * width);
  // Random height: Between 0 and width
  randomHeight = Math.floor(Math.random() * height);
  ctx.beginPath(); // Begin drawing
  ctx.moveTo(randomWidth, randomHeight);
  ctx.lineTo(randomWidth, randomHeight);
  ctx.stroke();
};

init();

// Write a draw function
const draw = (widthDraw, heightDraw) => {
  ctx.lineTo(widthDraw, heightDraw);
  ctx.stroke();
};

// Write a handler for the keys - move up, down, left or right

/* My Steps: 
1. Listen for a keypress
Add the event listener to the entire window, I assume?

2. Get the value of the key pressed and IF it matches the keys we want, move to step 3, otherwise do nothing
event.key: ArrowUp, ArrowDown, ArrowRight, ArrowLeft

3. Use a switch statement to determine where to move the dot ( lineTo method increment by 1? )
 - up: subtract from the height
 - right: add to the width
 - down: add to the height
 - left: subtract from width

*/
window.addEventListener('keydown', function(event) {
  console.log('Running Event Listener...');
  const keysForMovement = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

  // Wes: if (event.key.includes('Arrow'))
  if (keysForMovement.indexOf(event.key) !== -1) {
    event.preventDefault();

    // Wes: All of this logic is placed in a separate function
    switch (event.key) {
      case 'ArrowUp':
        console.log('ArrowUp');
        randomHeight -= 10;
        draw(randomWidth, randomHeight);
        break;
      case 'ArrowDown':
        console.log('ArrowDown');
        randomHeight += 10;
        draw(randomWidth, randomHeight);
        break;
      case 'ArrowRight':
        console.log('ArrowRight');
        randomWidth += 10;
        draw(randomWidth, randomHeight);
        break;
      case 'ArrowLeft':
        console.log('ArrowLeft');
        randomWidth -= 10;
        draw(randomWidth, randomHeight);
        break;
      default:
        console.log('Error');
        break;
    }
  }
});

// Clear / shake function
shakeBtn.addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
});

// Listen for arrow keys
