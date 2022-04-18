const textEl = document.getElementById('text');

const inputEl = document.getElementById('font-size-control');

inputEl.addEventListener('input', event => {
  const size = inputEl.value;

  textEl.style.fontSize = size + 'px';
});
