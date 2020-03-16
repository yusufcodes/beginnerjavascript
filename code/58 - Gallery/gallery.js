// Gallery 'class' ?
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  const images = Array.from(gallery.querySelectorAll('img')); // NodeList -> Array
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.log('Opening Modal');
    if (modal.matches('.open')) {
      console.info('Modal is open!');
    }
    modal.classList.add('open');

    // Event listeners bound when we open modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: Add event listeners for clicks and keyboard events
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    // Compare the current image relative to the 'next' image
    // console.log(currentImage.nextElementSibling);
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    // Compare the current image relative to the 'next' image
    // console.log(currentImage.nextElementSibling);
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // showImage: This function will handle the action where the user clicks
  // on one of the images in the gallery, to display the modal.
  // The image to be displayed is passed in.
  function showImage(el) {
    if (!el) {
      console.info('No image to show');
    }
    // Update modal with this information

    // Grab each of the modal entries

    // Get the information from the current instance of the gallery

    // Use the modal entries we grabbed and update the textContent of it to reflect the current selected image
    console.log(el);

    // Update image src
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    // Update modal h2
    // Update modal description
  }

  function handleImageClick(event) {
    showImage(event.currentTarget);
    openModal();
  }

  // EVENT LISTENERS HERE
  images.forEach(image => image.addEventListener('click', handleImageClick));

  // Loop over each image
  images.forEach(image => {
    // Attach event listener for each
    image.addEventListener('keyup', e => {
      // Check for a keyup enter key
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
