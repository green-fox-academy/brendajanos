'use strict'

let h1 = document.querySelector('h1');

window.addEventListener('keyup', (event) => {
  h1.innerHTML = 'Last pressed key code is: ' + event.key;
})