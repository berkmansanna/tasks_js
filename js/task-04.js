let counterValue = 0;
const refs = {
  value: document.querySelector(`#value`),
  btnDec: document.querySelector(`[data-action='decrement']`),
  btnIncr: document.querySelector(`[data-action='increment']`),
};

refs.btnDec.addEventListener('click', event => {
  counterValue -= 1;
  value.textContent = counterValue;
});
refs.btnIncr.addEventListener(`click`, event => {
  counterValue += 1;
  value.textContent = counterValue;
});
