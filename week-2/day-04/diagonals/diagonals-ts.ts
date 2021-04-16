'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function draw(startx: number, starty: number, endx: number, endy: number) {
    if (startx===0 && starty===0){

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(startx, starty);
ctx.lineTo(endx, endy);
ctx.stroke();

}else{



ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(startx, starty);
ctx.lineTo(endx, endy);
ctx.stroke();
}

}

draw (0,400,0,600)
draw(0,0,600,400)