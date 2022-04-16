const list = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, list.length);

const getData = document.querySelectorAll(`#categories>li`);
getData.forEach(elem => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}`,
    `Elements: ${elem.lastElementChild.children.length}`,
  );
});
