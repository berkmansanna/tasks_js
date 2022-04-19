const bodyEl = document.querySelector(`body`);
const btnEl = document.querySelector(`button`);
const textEl = document.querySelector(`span`);

btnEl.addEventListener(`click`, event => {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
