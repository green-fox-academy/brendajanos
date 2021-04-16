'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge


ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(50, 200);
ctx.stroke();


ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(150, 300);
ctx.stroke();


ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(150, 200);
ctx.stroke();


ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(50, 200);
ctx.stroke();

