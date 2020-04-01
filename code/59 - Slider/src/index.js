/* Slider Gallery - own initial notes based off the finished product:
When clicking on the Next Button or Previous Button, the slide should change to the 
'previous' or 'next' slide.
Task will involve removing/adding classes to each slide element, to create the desired effect.
Approach: There are two different galleries, maybe get one to work and then code it to work on multiple galleries?
*/

// Slider Object
function Slider(slider) {
  // Checks if a valid Element instance is passed into the Slider object
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Variable creation
  let current;
  let prev;
  let next;

  // Selecting needed elements for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    console.log(current);
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current, prev, next);
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
  }

  startSlider();
  applyClasses();
} // End of Slider object

// Create instances of the sliders
const oneSlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
