function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.style.display = "flex";
  boxesContainer.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

const createButton = document.querySelector('[data-create]');

createButton.addEventListener('click', function () {
  const inputAmount = document.querySelector('#inputAmount');
  const amount = parseInt(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

const destroyButton = document.querySelector('[data-destroy]');

destroyButton.addEventListener('click', function () {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  boxesContainer.style.display = 'none';
});
