const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector(`#ingredients`);

const makeItemsIngrEl = ingredients.map(ingredient => {
  let items = document.createElement(`li`);
  items.textContent = ingredient;
  items.classList.add(`item`);
  return items;
});
listRef.append(...makeItemsIngrEl);

console.log(listRef);
