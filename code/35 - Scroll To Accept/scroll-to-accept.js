const terms = document.querySelector('.terms-and-conditions');

terms.addEventListener('scroll', function(event) {
  //   console.log(event.currentTarget.scrollTop);
  //   console.log(event);
  //   if (event.currentTarget.scrollTop > 1600) {
  //     console.log('User can now accept the terms?');
  //     document.querySelector('.accept').removeAttribute('disabled');
  //   }

  // Intersection Observer: watches if an element is on / slight on the page
  const options = {
    root: terms,
    threshold: 0.5,
  };

  const handleOverlap = function(payload) {
    // Display the Accept button to the user
    // console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
      console.log('We can accept the terms!');
      //   document.querySelector('.accept').removeAttribute('disabled');
      document.querySelector('.accept').disabled = false;
    } else {
      document.querySelector('.accept').disabled = true;
    }
  };

  const observer = new IntersectionObserver(handleOverlap, options);

  observer.observe(terms.lastElementChild);
  //   console.log(terms.lastElementChild);

  /* Steps */
  // scroll until the user is at the bottom (can we use the closest method on each scroll until we are close to the accept button? )

  // make the accept button clickable
});
