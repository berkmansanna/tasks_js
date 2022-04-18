const inputRef = document.querySelector(`#validation-input`);
let totalLength = inputRef.dataset.length;
let inputData = parseInt(totalLength, 10);
inputRef.addEventListener(`blur`, event => {
  if (inputRef.value.length === inputData) {
    inputRef.classList.add(`valid`);
    inputRef.classList.remove(`invalid`);
  } else {
    inputRef.classList.add(`invalid`);
    inputRef.classList.remove(`valid`);
  }
});
