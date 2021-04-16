'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takenes 2 parameters and draws a single li
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

function draw(x:number,y:number) {

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(300, 200);
    ctx.stroke();
    

}
for(let i=0; i<3; i++){
    draw(i*50,i*50)
}


