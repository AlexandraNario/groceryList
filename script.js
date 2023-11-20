
//create an object variable called groceryItems
//then assign these values
let groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },

    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },

    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },

    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },

        { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12},
];

//create variables called groceryList, totalCostElement, and totalQuantityElement
//that grabs HTML element with id of 'groceryList', 'totalCost', 'totalQuantity', respectively
 
let groceryList = document.getElementById('groceryList');
let totalCostElement = document.getElementById('totalCost');
let totalQuantityElement = document.getElementById('totalQuantity');

function displayGroceryItems() {
    groceryList.innerHTML = '';
    let totalCost = 0;
    let totalQuantity = 0;

//Create a forEach to loop over the groceryItems object
/*Use example: Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
}); . Set the key to be named item*/
groceryItems.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML =`<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
    //append the itemDiv(childNode) to the groceryList(parentNode)
    groceryList.appendChild(itemDiv);
    //Set totalCost to be the item’s price multiplied by the item’s quantity
    //add the total of each item's price mutliplied by item's quantity to get totalCost
    totalCost += item.price * item.quantity;
    totalQuantity += item.quantity; 
});
//toFixed() method rounds the string to a specified number of decimals.
totalCostElement.innerHTML = totalCost.toFixed(2);
totalQuantityElement.innerHTML = totalQuantity; 
}

function isolateCategory(category){
    
    groceryList.innerHTML = '';

    let filterItems = groceryItems.filter(function(item){
        return item.category === category;
    });
 filterItems.forEach(function(item) {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML =`<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
    groceryList.appendChild(itemDiv);
 });
 
}

// Call the displayGroceryItems function in the showAllCategories function
function showAllCategories() {
    displayGroceryItems();
 };

 //create a functtion called orderItemsByCost
 function orderItemsByCost(){
//inside use the sort () method sorts the elements of an array. 
  groceryItems.sort(function (a, b){
    return b.price - a.price;
  });
  displayGroceryItems();
 };