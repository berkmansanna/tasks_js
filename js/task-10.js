const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const BtnClearBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', BtnMakeBoxes);
btnDestroy.addEventListener('click', BtnClearBoxes);

function BtnMakeBoxes() {
  const num = input.value;
  const items = [];

  for (let i = 1; i <= num; i += 1) {
    const createDiv = document.createElement('div');

    createDiv.style.width = i * 10 + 20 + 'px';
    createDiv.style.height = i * 10 + 20 + 'px';
    createDiv.style.backgroundColor = getRandomHexColor(event);

    items.push(createDiv);
  }

  boxes.append(...items);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
