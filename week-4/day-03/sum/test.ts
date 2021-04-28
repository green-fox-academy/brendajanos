'use strict'

import test from 'tape';
import {sumNumbers} from './sum';

test('summing numbers', t => {
    const list = new sumNumbers([4, 8, 15, 16, 23, 42]);

  const actual = list.summer(list.getList());
  const expected = 108;

  t.equal(actual, expected);
  t.end();
})

test('empty list', t => {
    const list = new sumNumbers([]);

  const actual = list.summer(list.getList());
  const expected = 0;

  t.equal(actual, expected);
  t.end();
})

test('one element list', t => {
    const list = new sumNumbers([7]);

  const actual = list.summer(list.getList());
  const expected = 7;

  t.equal(actual, expected);
  t.end();
})