/*
 Julia P. Keith
 Section 00
 5-21-2015
 Conditionals Assignment
 */

//alert("Testing to see if connected")

//create a calculator that keeps track of how many toys are in the toy box

//create our virtual toy box as an array
var boxOfToys = ["Barbie","Tonka Truck", "puzzle", "ball", "lego"];

//print out the whole array
console.log (boxOfToys);

//print out a specific toy, use the index number
//index numbers start with 0 NOT 1!
console.log(boxOfToys[1]);

//How many items are inside the array.
//property of an array called length
//Dot Syntax - fancy for use a period
console.log(boxOfToys.length);


//Create a variable to count the number of Barbie in the array
var totalNumBarbie=0;

//test each toy "item in the array" to see if it has a "Barbie"

//if(conditional to test){code that will run if the condition is true}

if(boxOfToys[0]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbies
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log ("Item is not a Barbie.");
}

//Test the second item in the array
if(boxOfToys[1]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbie
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log ("Item is not a Barbie.");
}

//Test third item
if(boxOfToys[2]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbie
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log("Item is not a Barbie.");
}
//Testing the 4th item
if(boxOfToys[3]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbie
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log("Item is not a Barbie.");
}

//Testing the 5th item
if(boxOfToys[4]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbie
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log("Item is not a Barbie.");
}

//Testing the 6th item
if(boxOfToys[5]==="Barbie") {
//code inside of here will run IF that item is a Barbie
    console.log("This item is a Barbie");
    //add 1 to the total number of Barbie
    totalNumBarbie++;
} else {
    //code inside of here will run if the item is NOT a Barbie.
    console.log("Item is not a Barbie.");
}

//Console log the total number of Barbie
console.log(totalNumBarbie+ "total number of Barbie in the box of toys");


//Validate user prompts
//Ask user for input
var userInput = prompt("What is your first name");

//Validate prompt to see if blank
if(userInput===""){
    //code will run if user leaves it blank
    //re-prompt the user using the SAME variable above
    userInput=prompt("Please do not leave blank");
}
//Ask user for input
var userInput = prompt("What is your last name");
//code will run if user leaves it blank
//re-prompt the user using same variable as above
userInput=prompt ("Please do not leave blank");

//Ask user for input
var numInput = prompt("How old are you");
//code will run if user leaves it blank
//re-prompt the user using same variable as above
numInput=prompt ("Please only use numbers\nType in ANY age");

if(isNaN(numInput)){
    //code will run if the user does not type in a number.
    //re-prompt using the same variable.
    numInput=prompt("Please only use numbers\nType in ANY number");

}
console.log(totalNumToys+ "total number of toys in the toy box");

var fifthPrompt =prompt("Type in your favorite color");

//validate for BOTH blank and a color
if(fifthPrompt==="" || is(fifthPrompt)){
    fifthPrompt=prompt("Please do not leave blank and only use colors red, blue, green and yellow.\nType in your favorite color.");

}
*/
