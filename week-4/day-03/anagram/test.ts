'use strict';

import test from 'tape';
import {anagrams} from './anagram';

test ('Anagrams or not', t=> {

    const actual = anagrams('listen','silent');
    const expected = true;

    t.equal(actual,expected);
    t.end();




})