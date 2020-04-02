/* Slider Gallery - own initial notes based off the finished product:
When clicking on the Next Button or Previous Button, the slide should change to the 
'previous' or 'next' slide.
Task will involve removing/adding classes to each slide element, to create the desired effect.
Approach: There are two different galleries, maybe get one to work and then code it to work on multiple galleries?
*/

// Slider Object

function Slider(slider) {
  this.slider = slider;
  // Checks if a valid Element instance is passed into the Slider object
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Selecting needed elements for the slider
  this.slides = slider.querySelector('.slides');

  // These are not needed in any prototype methods, so will be kept as regular variables
  const prevButton = document.querySelectorAll('.goToPrev');
  const nextButton = document.querySelectorAll('.goToNext');

  this.startSlider();
  this.applyClasses();

  // Event listeners
  // prevButton.addEventListener('click', () => move('back'));

  // Adding the event listener uses an anonymous arrow function, so that the this variable state is preserved.
  prevButton.forEach(el =>
    el.addEventListener('click', () => this.move('back'))
  );

  nextButton.forEach(el => el.addEventListener('click', () => this.move()));

  // nextButton.addEventListener('click', move);
} // End of Slider object

Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  console.log(this.current);
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  console.log(this.current, this.prev, this.next);
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'current', 'next'];

  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

// Create instances of the sliders
const oneSlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(oneSlider);
console.log(dogSlider);
