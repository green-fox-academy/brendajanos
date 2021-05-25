'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');

function printPear(){
  console.log('pear')
};

setTimeout(printPear,1000);

function printMelon(){
  console.log('melon')
};

setTimeout(printMelon,3000);

function printGrapes(){
  console.log('grapes')
};

setTimeout(printGrapes,5000);