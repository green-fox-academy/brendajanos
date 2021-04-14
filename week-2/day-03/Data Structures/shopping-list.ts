export{}

/*We are going to represent a shopping list in a list containing strings.

    Create a list with the following items.
        Eggs, milk, fish, apples, bread and chicken
    Create an application which solves the following problems.
        Do we have milk on the list?
        Do we have bananas on the list?*/

        
let shoppinglist: string[]=['Eggs','Milk','Fish','apples','bread','chicken']; 

if (shoppinglist.indexOf('Milk') == 1) {
    console.log('There is milk on the list');
}

if (shoppinglist.indexOf('banana') == 1) {
    console.log('There is banana on the list');
} else {
    console.log('There is no banana on the list');
    
  }