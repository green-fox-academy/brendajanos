let imgItem = document.querySelector('img');
console.log(imgItem.getAttribute('src'));

let myAnimalUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Mops-duke-mopszucht-vom-maegdebrunnen.jpg';
imgItem.setAttribute('src', myAnimalUrl);

let greenFoxUrl = 'https://www.greenfoxacademy.com';
document.querySelector('a').setAttribute('href', greenFoxUrl);

document.getElementsByClassName('this-one')[0].disabled = true;

let secondButton = document.getElementsByClassName('this-one')[0];
secondButton.textContent = `Don't click me!`;