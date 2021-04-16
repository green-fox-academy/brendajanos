'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!



for (let i=0;i<=4;i++){
    ctx.fillStyle= `rgb(${i*15},${i*15},${i*15},${i*15})`
    ctx.fillStyle
    ctx.fillRect(i*20,i*20,i*10,i*10)}
