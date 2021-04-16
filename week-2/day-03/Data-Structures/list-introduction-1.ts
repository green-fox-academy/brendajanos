export{}

/*Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element*/


let names: string[] = [];

    names.push('William');

    names.push('John','Amanda');

console.log(names);
console.log(names.length);

for (let a=0 ; a < names.length ; a++)
    console.log((a+1) + ": " + names[a]);

let removed = names.splice(2);
console.log(names)

names.reverse();
         console.log(names); 