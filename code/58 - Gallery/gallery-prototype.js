// Gallery 'class' ?
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  this.gallery = gallery; // Saving a reference to the gallery passed in

  // Adding the variables to the instance of Gallery making it available in any instance
  this.images = Array.from(gallery.querySelectorAll('img')); // NodeList -> Array
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // Bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // EVENT LISTENERS HERE
  this.images.forEach(image =>
    image.addEventListener('click', this.handleImageClick)
  );

  // Loop over each image
  this.images.forEach(image => {
    // Attach event listener for each
    image.addEventListener('keyup', e => {
      // Check for a keyup enter key
      if (e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);
} // Gallery object - END

Gallery.prototype.openModal = function() {
  console.log('Opening Modal');
  if (this.modal.matches('.open')) {
    console.info('Modal is open!');
  }
  this.modal.classList.add('open');

  // Event listeners bound when we open modal
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  // TODO: Add event listeners for clicks and keyboard events
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
};

Gallery.prototype.handleClickOutside = function() {
  if (this.e.target === this.e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function() {
  if (this.event.key === 'Escape') return this.closeModal();
  if (this.event.key === 'ArrowRight') return this.showNextImage();
  if (this.event.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function() {
  // Compare the current image relative to the 'next' image
  // console.log(currentImage.nextElementSibling);
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function() {
  // Compare the current image relative to the 'next' image
  // console.log(currentImage.nextElementSibling);
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

// showImage: This function will handle the action where the user clicks
// on one of the images in the gallery, to display the modal.
// The image to be displayed is passed in.
Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('No image to show');
  }
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
};

Gallery.prototype.handleImageClick = function(event) {
  this.showImage(event.currentTarget);
  this.openModal();
};

// Instantiate the Gallery object using the new keyword
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
