/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`Hello ${name}`);
}
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName){
  return `${firstName} ${lastName}`;
}
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum,secondNum){
     if(typeof firstNum === "number"  && typeof secondNum === "number"){
       return firstNum + secondNum;
     }
     else{
       alert("enter valid input")
     }
  }
  alert(addTwoNumbers(4,7));
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA,numB,operation){
  switch(operation){
    case  "add":
      return numA + numB;
    case  "sub":
      return numA -numB;  
    case "div":
      return numA/numB;
    case "mul":
      return numA * numB; 
    default:
     alert("enter Valid Input") ;    
  }
}
let msg =calc(10,20,"add");
console.log(msg)
/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(number){
  if(number % 4 === 0){
    return "true";
  }
  else if(number % 100 == 0){
    return "true";
  }else if(number === 100){
     return "false";
  }else{
    return "false";
  }
}


/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(number){
  let value = 1;
    for(i = 1; i<=number ; i++){
          value *= i ;
    }
    return value;
}