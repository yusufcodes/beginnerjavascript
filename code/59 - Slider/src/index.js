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
  const prevButton = document.querySelectorAll('.goToPrev');
  const nextButton = document.querySelectorAll('.goToNext');

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

    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  startSlider();
  applyClasses();

  // Event listeners
  // prevButton.addEventListener('click', () => move('back'));
  prevButton.forEach(el => el.addEventListener('click', () => move('back')));

  nextButton.forEach(el => el.addEventListener('click', move));

  // nextButton.addEventListener('click', move);
} // End of Slider object

// Create instances of the sliders
const oneSlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
