var fruit1 = 'apple';
var fruit2 = 'banana';
console.log("Is fruit1 equal to fruit2? I predict False.");
console.log(fruit1 == fruit2);
var color1 = 'red';
var color2 = 'red';
console.log("Is color1 equal to color2? I predict True.");
console.log(color1 == color2);
// Tests using the lower case function
var word1 = 'Hello';
var word2 = 'hello';
console.log("Is word1 equal to word2 (case insensitive)? I predict True.");
console.log(word1.toLowerCase() == word2.toLowerCase());
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var sunny = true;
var warm = false;
console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm);
console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'cherry', 'date'];
var searchFruit = 'cherry';
console.log("Is 'cherry' in the fruits array? I predict True.");
console.log(fruits.includes(searchFruit));
// Test whether an item is not in an array
var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var weekendDay = 'Saturday';
console.log("Is 'Saturday' not in the weekdays array? I predict True.");
console.log(!weekdays.includes(weekendDay));
