/*
 Julia P. Keith
 Section 00
 5-20-2015
 Go To Training Week 3
 */

//alert("Testing to see if connected")

//create a calculator that keeps track of how many pears are in a fruit bowl

//create our virtual bowl as an array
var bowlOfFruit = ["apple","banana,", "pear", "peach"];

//print out the whole array
console.log (bowlOfFruit);

//print out a specific fruit, use the index number
//index numbers start with 0 NOT 1!!
console.log(bowlOfFruit[1]);

//How many items are inside the array.
//property of an array called length
//Dot Syntax - fancy for use a period
console.log(bowlOfFruit.length);


//Create a variable to count the number of pears in the array
var totalNumPears=0;

//test each fruit "item in the array" to see if it has a "pear"

//if(conditional to test){code that will run if the condition is true}

if(bowlOfFruit[0]==="pear") {
//code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++;
} else {
    //code inside of here will run if the item is NOT a pear.
    console.log ("Item is not a pear.");
}

//Test the second item in the array
if(bowlOfFruit[1]==="pear") {
//code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++;
} else {
    //code inside of here will run if the item is NOT a pear.
    console.log ("Item is not a pear.");
}

//Test third item
if(bowlOfFruit[2]==="pear") {
//code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++;
} else {
    //code inside of here will run if the item is NOT a pear.
    console.log("Item is not a pear.");
}
//Testing the 4th item
if(bowlOfFruit[3]==="pear") {
//code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++;
} else {
    //code inside of here will run if the item is NOT a pear.
    console.log("Item is not a pear.");
}

//Console log the total number of pears
console.log(totalNumPears+ "total number of pears in the fruit bowl");

//Cycling through arrays, For Loop
/*
 for(initialize a counting variable; condition to test;
 increment of change to counting variable){

 code to run for each loop

 }
 */
for(var i=0; i<5; i++){
    //code to run each loop
    console.log ("The value of i is" +i);

}

//Validate user prompts

//Ask user for input
var userInput = prompt("Please type in your name");

//Validate prompt to see if blank
if(userInput===""){
    //code will run if user leaves it blank
    //re-prompt the user using the SAME variable above
    userInput=prompt("Please do not leave blank");
}
//Ask for a number and test if that is what the user typed in
var numInput = prompt("Type in ANY number");

if(isNaN(numInput)){
    //code will run if the user does not type in a number.
    //re-prompt using the same variable.
    numInput=prompt("Please only use numbers\nType in ANY number");

}
console.log(isNaN("cat")); //true
console.log(isNaN("7")); //false

var thirdPrompt =prompt("Type in a number 1-10");

//validate for BOTH blank and a number
if(thirdPrompt==="" || isNaN(thirdPrompt)){
    thirdPrompt=prompt("Please do not leave blank and only use numbers.\nType in a number 1-10.");

}