const ref = {
  input: document.querySelector('[type="number"]'),
  btnCreateDivs: document.querySelector('[data-create]'),
  btnDestroyDivs: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 30;
const addDivs = amount => {
  amount = ref.input.value;
  let boxes = [...new Array(+amount).keys()];
  const markup = boxes
    .map(() => {
      const box = `<div class="box" style="width:${size}px;height:${size}px;background:${getRandomHexColor()}"></div>`;
      size += 10;
      return box;
    })
    .join('');

  console.log(markup);
  ref.boxes.insertAdjacentHTML('beforeend', markup);
};

const destroyDivs = () => {
  Array.from(ref.boxes.children).forEach(element => {
    element.remove();
  });
};
ref.btnCreateDivs.addEventListener('click', addDivs);
ref.btnDestroyDivs.addEventListener('click', destroyDivs);
