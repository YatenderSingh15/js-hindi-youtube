// how the data acces and kese rakha jata hai memory mai uske basis par two types ke hote hai 
// Primitive Data Types and Non-Primitive Data Types/reference data type

// # Primitive Data Types - it is call by value

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// javaScript  is **dynamically typed** lang or statically typed

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// declare symbol 
// 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34455666787634n

// Refrence (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "Aman",
    age: 20,
}
const  myfunction = function(){
    console.log("Hello world")
}

console.log( typeof bigNumber)
