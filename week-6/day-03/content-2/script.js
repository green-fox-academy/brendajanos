let list = ['apple', 'banana', 'cat', 'dog'];
let items = document.querySelectorAll('li');

for(let i = 0; i < items.length; i++){
  items[i].textContent = list[i];
};


items.forEach(element => {
  element.setAttribute('class', 'limeGreen');
});