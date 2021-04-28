'use strict'

/*
import test from 'tape';
import { addNum, subtractNum, multiplyNumb } from './main';

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('subtract 2 numbers', t => {
  t.equal(subtractNum(2, 1), 1);
  t.end();
});

test('multiply 2 numbers', t =>{

const actual = multiplyNumb(2,2);
const expected = 4;

t.equal(actual,expected);
t.end();

})

*/

import test from 'tape';
import { NumberOperations } from './main';

test('add 2 numbers', t => {
  const operations = new NumberOperations();

  const actual = operations.addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('subtract 2 numbers', t => {
  const operations = new NumberOperations();

  t.equal(operations.subtractNum(2, 1), 1);
  t.end();
});

test ('multiply 2 numbers',t => {
  const operations = new NumberOperations();

    const actual = operations.multiplyNum(4,4);
    const expected = 16;

  
  t.equal(actual,expected);
  t.end();

})
