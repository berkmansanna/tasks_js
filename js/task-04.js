let counterValue = 0;
const refs = {
  value: document.querySelector(`#value`),
  btnDec: document.querySelector(`[data-action='decrement']`),
  btnIncr: document.querySelector(`[data-action='increment']`),
};

const onDecrem = e => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const onIncrem = e => {
  counterValue += 1;
  value.textContent = counterValue;
};

refs.btnDec.addEventListener('click', onDecrem);
refs.btnIncr.addEventListener(`click`, onIncrem);
