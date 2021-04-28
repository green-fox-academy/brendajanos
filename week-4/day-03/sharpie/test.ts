'use strict'
import test from 'tape';
import { Sharpie } from "./sharpie";

test('Get sharpie color', t => {
    const redSharpie: Sharpie = new Sharpie('Red',10,100);
    const actual = redSharpie.getColor();
    const expected = 'Red';


    t.equal(actual, expected);
    t.end();
});

test('Decrease ink amount of a sharpie', t =>{
    const greenSharpie: Sharpie = new Sharpie('Green',25,100);
    const actual = greenSharpie.decrease();
    const expected =90;

    t.equal(actual,expected);
    t.end();
    
})
