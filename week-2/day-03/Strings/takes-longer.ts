'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!


let  quote= `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let quote2 = quote.slice(0, 20) + " always takes longer than " + quote.slice(21);

console.log(quote2);