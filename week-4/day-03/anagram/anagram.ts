'use strict';

/* Anagram

    Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
    Create a test for that.
*/


export function anagrams(A:string, B:string) {
    return cleanString(A) === cleanString(B);
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

console.log (anagrams('listen','silent'))

