'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!


function squarer(startX:number) {
    
    ctx.strokeRect(300-(startX/2),200-(startX/2),startX,startX)
    
    
    }
    
    for (let i=0;i<4;i++){
    
    squarer(i*50)}
    