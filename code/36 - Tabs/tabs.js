const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]')); // Turn NodeList -> Array to be able to use array method on it (find)

function handleTabClick(event) {
  // Hide all of the panels first
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // Mark all tabs as unselected using a HTML attribute
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });

  // Mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // Get the Id of the tab clicked on
  const { id } = event.currentTarget;
  // Same as: const id = event.currentTarget.id, called destructuring
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );

  // Display the panel by setting the hidden attribute to false
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
