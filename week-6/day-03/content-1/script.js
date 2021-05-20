let paragraphs = document.querySelectorAll('p');
let lastItem = document.querySelector('.animals');


paragraphs.forEach(element => {
  element.append(' ' + lastItem.textContent);
});

let lastInnerHTML = document.getElementsByClassName('.animal').innerHTML;
paragraphs.forEach(element => {
  element.innerHTML += lastItem.innerHTML;
});