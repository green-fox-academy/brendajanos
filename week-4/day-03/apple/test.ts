'use strict'


import test from 'tape';
import { Apple} from './apple';

test ('get some apples', t => {

    const operations = new Apple;

    const actual= operations.getApple();
    const expected ='apple';

t.equal(actual,expected);
t.end();


})