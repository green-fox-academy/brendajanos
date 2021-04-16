
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern


//600*400

let A = 8 
let B = 12
let Square = 50

function drawCheck(ctx:CanvasRenderingContext2D, squareSize:number, X:number, Y:number) {
    let whiteSquareColor = "white"
    let blackSquareColor = "black"

    for (let j = 0; j < X; j++)
        for (let i = 0; i < Y; i++) {
            if  ((i % 2 != 0 && j % 2 != 0) ||(i % 2  ==0 && j % 2 == 0))
           ctx.fillStyle = whiteSquareColor
            else ctx.fillStyle = blackSquareColor
            ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize)
        }
}
 
drawCheck(ctx, Square, A, B)