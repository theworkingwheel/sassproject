
const changeTextButton = document.getElementById('change-dish-button');
const additionalInfo = document.querySelector('aside p');

changeTextButton.addEventListener('click', () => {
  additionalInfo.textContent = 'More dishes coming soon!';
});
