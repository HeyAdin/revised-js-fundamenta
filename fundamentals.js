console.log("Hyiiiiiiiiiiii");

// Variable Declaration

let admin;
let names;
names = "John";
admin = names;
// Same thing we can do in concise way
let myName = "Adin Ahmad"
let newAdmin = myName;
console.log(admin);
console.log(newAdmin);

const BIRTHDAY = "15.06.2003"; // Uppercase because the value of const is known prior to execution

// Numbers and Arithmetic Operation

let num1 = 100;
let num2 = num1 + 50; //num2 = 150;

let sum = num1 + num2; // 100+150 = 250
console.log(sum);

let difference = num2 - num1; //150-100 = 50
console.log(difference);

let product = num1*num2;  //100*150 = 15000
console.log(product);

let quotient = num2/num1; //150/100 = 1.5
console.log(quotient);

let remainder = num2%num1; // 150%100 = 50
console.log(remainder);

// INCREMENTING & DECREMENTING

let x = 5;
let y = 10;

x++; // x is now incremented by 1
let z=x;
console.log(z);

x--; // x is now decremented by 1 
z = x;
console.log(z);

// EXPONENTIATION

let a = 7;
let b = 8;

let aSquare = a**2; // a^2
console.log(aSquare);
let bSquare = b**2; // b^2
let bSquare2 = Math.pow(b,2);
console.log(bSquare2);
console.log(bSquare);

let formulae = aSquare+bSquare;
console.log(formulae);

// OPERATOR PRECEDENCE 

let bodmass = 100+150*3/2; // check for high precedence here * and / have high over + when same precedence computed from left to right
console.log(bodmass);

let bracesBodmass= (100+150)*3/2; // Braces first then check for high precedence and then left to right
console.log(bracesBodmass);

