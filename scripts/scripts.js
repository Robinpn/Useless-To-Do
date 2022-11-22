// variables
const form = document.querySelector('form');
const input = document.querySelector('input');
const Ulist = document.querySelector('ul');
const clearBtn = document.querySelector('.clear');
const luckyBtn = document.querySelector('.lucky');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userInput = input.value;
  let li = document.createElement('li');
  li.textContent = userInput;
  Ulist.append(li);

  input.value = '';
});
