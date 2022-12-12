// global variables
const form = document.querySelector('form');
const input = document.querySelector('input');
const uList = document.querySelector('ul');
const clearBtn = document.querySelector('.clear');
const luckyBtn = document.querySelector('.lucky');
const duplaicateBtn = document.querySelector('.clear');

//Duplicate all li elements and print them out
duplaicateBtn.addEventListener('click', () => {
  const items = uList.querySelectorAll('li');
  items.forEach((item) => {
    addItem(item.textContent);
  });
});

// add the li elements to the DOM
const addItem = (text) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = text;
  uList.append(li);
};

const consonant = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'z',
  'x',
];

//get a random consonant
const getConsonant = (arr) => {
  const randomConsonant = Math.floor(Math.random() * arr.length);
  const cons = arr[randomConsonant];

  return cons;
};

const luckyArr = [
  'ignorera räkningar',
  'mata plantan',
  'vattna Fisken',
  'stryka Sängen',
  'tvätta Hunden',
  'torka Disken',
  'skura Fönster',
];

// add the lucky array to the DOM
const luckyPrint = () => {
  luckyBtn.addEventListener('click', () => {
    luckyArr.forEach((random) => {
      addItem(random);
    });
  });
};

// submit the form and print out the li
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = input.value;

  input.value = '';

  //replace all vowels with random consonant
  const changeVowel = (string) => {
    const newString = string.replaceAll(
      /["a""e""i""o""u""y""å""ä""ö""A""E""I""O""U""Y""Å""Ä""Ö"]/g,
      getConsonant(consonant)
    );
    return newString;
  };

  addItem(changeVowel(userInput));
});

luckyPrint();
