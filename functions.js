
function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong()

// Define a function called "printHeart"
// that prints out the string "<3"
function printHeart(){
    console.log("<3");
}
printHeart()

// Arguments
function greet(firstName) {
    console.log(`FirstName is: ${firstName}`);
    
}
greet("Anya")

// Define a function called "rant" which 
// accepts a string argument called "message"The function
//  should print out an uppercased version of message 3 times (with 3 separate calls to
function rant(message){
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
}
rant("learning")

// Functions with multiple arguments
function repeat(str, numTimes){
    let result = ""
    for(let i = 0; i<numTimes ; i++){
        result += str
        console.log(result);
    }
}
repeat("Hey", 7)

// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".
// It's generally not a good roll.  Please write a function called isSnakeEyes, 
// which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's,
// please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

function isSnakeEyes(num1,num2){
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes");
    }
}
isSnakeEyes(8,1)

// It's time to practice returning values from a function! Write a simple function multiply which 
// accepts two numerical arguments and returns their product (multiply them together). 
function multiply(x,y) {
    return x * y;
}
console.log(multiply(6,7));

// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

// If temperature is greater than or equal to 75, return true. 

// Otherwise, return false.   

// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

function isShortsWeather(temperature){
    if(temperature >= 75){
        return true
    }
    else{
        return false
    }

}
console.log(isShortsWeather(60))

// Please write a function called lastElement which accepts a single array argument.
// The function should return the last element of the array
//  (without removing the element).  If the array is empty, the function should return null.

function lastElement(arr){
    if(arr[arr.length-1]===undefined){
        return null;
    }
    else{
        return arr[arr.length-1];
    }
}
let arr="wordy";
console.log(lastElement("wordy"));

    //4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function numDivisible(){
    for(let i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
    }
}
numDivisible()

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]


nums.map(num=>{

    +num})

let nums =["10","24","45","56","67"]
console.log(stringed(nums));