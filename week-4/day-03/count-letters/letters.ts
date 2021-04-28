'use strict'

/*Count Letters

    Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and 
    numbers as values that shows how many occurrences there are.
    Create a test for that.
*/

export function Counter (){}

let str = 'mississippi';

function find_occurences(str, char_to_count){
    return str.split(char_to_count).length - 1;
}

console.log(find_occurences(str, 'i')) 
