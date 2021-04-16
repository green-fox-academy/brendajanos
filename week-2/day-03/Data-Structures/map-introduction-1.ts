export {}

/*We are going to play with maps. Feel free to use the built-in methods where possible.

    Create an empty map where the keys are integers and the values are characters

    Print out whether the map is empty or not

        Add the following key-value pairs to the map
        Key 	Value
        97 	a
        98 	b
        99 	c
        65 	A
        66 	B
        67 	C

        Print all the keys

        Print all the values

        Add value D with the key 68

        Print how many key-value pairs are in the map

        Print the value that is associated with key 99

        Remove the key-value pair where with key 97

        Print whether there is an associated value with key 100 or not

        Remove all the key-value pairs
    */

    let myMap = new Map()

myMap.set(97,"a")
myMap.set(98,"b")
myMap.set(99,"c")
myMap.set(65,"A")
myMap.set(66,"B")
myMap.set(67,"C")

console.log(myMap);


let myMap1 = new Map([
    [97,'a'],
    [98,'b'],
    [99,'c'],
    [65,'A'],
    [66,'B'],
    [67,'C']
]);

console.log(myMap1);