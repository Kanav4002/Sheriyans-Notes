// Variables and Declarations
/*
  var let const 
  declarations and initialisation
  a = 12; don't use

  var a = 13 // declare karna
  var a = 12; // declare and initialize

  windiw mein add hota hai
  function scoped hota hai - can be declared and initialised everywhere inside the function
  function abcd() {
    if (true) {
      var a = 12;
    }
  }
  app firse declare kr skte ho same name se and error nhi aayega

  let a;
  let a = 12;
  const a;
  const a = 12;

  hume pta h ki value change nhi hogi
  const discount = 10;
  const groom = "Kanav";
  const bride = "Jamecel";
*/ 

/*
  Scope (global, block, functional).  
  // global scope
  var a = 12; // not inside a curly braces

  these curly braces are block scope
  {
    let a = 12;
  }

  // functional scope
  function abcd() {
    if (true) {
      var c = 12;
    }
  }
*/

/*
  Reassignment, Redeclaration
  // var a = 23;
  // var a = 22;

  // let b = 24;
  // let b = 23; // with let variable cannot be redeclared
*/

/*
  Temporal Dead Zone - is the area before the a variable declaration.
  utna area jitne mein js ko pta hai ki variable exist karna hai par vo apko value de nhi skta

  // console.log(a);

  let a = 10;
*/

/*
  Hoisting impact per type
  jab variable ko jab JS mein bnate hai voh 2 hisso mein toot jata hai and uska declare part upar chla jata hai aur uska initialisation part neeche rhe jata hai

  var a = undefined;
  console.log(a); // undefined isliye kyun ki declare part jisme undefined value thi voh upar chla gya
  a = 12;

  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 12;

  let a = undefined;
  console.log(a);
  a = 12;

  var -> hoist -> undefined
  let -> hoist -> Reference Error
  const -> hoist -> Reference Error

  console.log(nm);
  var nm = "Kanav"; 
  
  console.log(age);
  let age = 18;

  var x = 1;
  {
    var x = 2;
  }
  console.log(x); // 2 since var doesn't respect braces and it is function scope. Therefore, it updates the value to 2.

  let a = 10;
  {
    let a = 20;
    console.log("Inside: ", a);
  }
  console.log("Outside: ", a);  

  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // 1
  console.log(b); // ReferenceError
*/

/*
  1. Variables And Declarations
  Common Confusions ?
  - Why const allows changing object properties

  // const value can be updated but cannot be re-assigned
  const person = { name : "kanav" };
  person.name = "Kannan";
  console.log(person);
  person = {}; // not allowed
  console.log(person);

  const obj = {
    prop: 42,
    nested: { value: 10 }
  };

  Object.freeze(obj);

  // Attempts to modify the object will fail silently in non-strict mode
  // and throw a TypeError in strict mode.

  obj.prop = 33;      // Fails: value cannot be changed
  delete obj.prop;    // Fails: property cannot be deleted
  obj.newProp = 50;   // Fails: new properties cannot be added

  console.log(obj.prop); // Output: 42
  console.log(obj);      // Output: { prop: 42, nested: { value: 10 } }
*/

// DataTypes & Type System
/*
  Primitive: Aisi values jisko copy karne par hume real copy mil jaye
  eg: String, Number, Boolean, Undefined, Null, Symbol (rarely used), BigInt

  Reference: Aisi values jisko copy karne par hume real copy nhi mile but hume referene milega - parent ka
  eg: Objects, Arrays, Functions
      {}, [], ()

  // let a = 12;
  // let b = a;

  // let a = [1, 2, 3];
  // let b = a;
  // b.pop();
*/
   
/*
  Primitive DataType
  Strings
  '' - single quotes
  "" - double quotes
  `` - backticks

  Number
  12 - number
  12.3 - number

  Boolean
  true
  false

  Null
  no value different from undefined

  Undefined
  no value is assigned

  Symbol -> unique immutable value
  let obj = {
    uid: 1,
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com"
  }
  let u1 = Symbol("meow");
  obj[u1] = "001";

  BigInt
  let a = 9007199254740991n;


  let a = {
    name : "kanav"
  }

  let b = a;
  b.name = "kannan"

*/ 

/*
  Dynamic Typing : 
  js is not statically typed. 
  it is dynamically typed which means data can be changed because
  js includes dynamic data types
  let a = 12;
  a = true;
  a = "kanav";
  a = [];
  a = null;
  a = undefined;
 
  typeof quirks (e.g. typeof null === 'object')
  NaN === NaN // false
  .1 + .2 // 0.30000000000000004
  [] + [] = ''
  
*/

/*
  Type Coercion (== vs ===)
  Truthy vs Falsy Values

  type coercion: concept in which one type automatically converts to another type

  + : can add or concat
  - : can only substract


  Falsy Values : 0 false "" null undefined NaN document.all
  Truthy Values : rest are all true

    Using !! marks we can find the nature of a value if its truthy or falsy

  typeof NaN === 'number' // true because NaN is a failed number operation

  Difference btw undefined & null
  - undefined is a by default value which is given automatically if we don't assign a value.
  - null is something we put to assign later on.
*/

// Operators 
/*
  Arithmetic, Comparison, Assignment, Logical, Unary, Ternay

  Arithmetic: + - * ** / %
  Comparison: == === < > <= >= ! != !== !! (== not strict, === strict, != not strict, !== strict)
  Assignment: = += -= *= /= %=
  Logical: && || !
  Unary: + - ! typeof ++ --  eg: +"10" // 10
  Ternay: ? : 
*/

/*
  typeof NaN           // number
  typeof null          // 'object'
  typeof []            // 'object'
  typeof {}            // 'object'
  typeof function() {} // 'function'

  let a = []; // object
  a instanceof Array // true

  let b = {}
  b instanceof Object // true

  instanceof works only for reference values eg: Arrays, Objects and Functions not work with primitive values.
*/

/*
  Practice Ques: 
  

  let x = 10;
  let y = 20;
  if (x > 5 && y < 25) {
    console.log("A");
  } else {
    console.log("B");
  }
  O/P : A
  

  let isAdmin = true;
  let isLoggedIn = false;
  if (isAdmin || isLoggedIn) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
  O/P : Access granted
  

  let temp = 35;
  if (!(temp < 30)) {
    console.log("Hot");
  } else {
    console.log("Pleasant");
  }
  O/P : Hot


  let a = 0;
  if (a) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
  O/P : Falsy


  let score = 78;
  let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
  console.log(grade);
  O/P : B


  let points = 120;
  let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
  console.log(status);
  O/P : Gold


  let loggedIn = true;
  let hasToken = false;
  let access = loggedIn && hasToken ? "Allow" : "Deny";
  console.log(access);
  O/P : Deny


  let a = 5;
  a++;
  console.log(a);
  O/P : 6


  let b = 7;
  ++b;
  console.log(b);
  O/P : 8


  O/P : 4, 3
  let x = 3;
  let y = x++;
  console.log(x, y);


  O/P: 5, 5
  let p = 4;
  let q = ++p;
  console.log(p, q);


  O/P : 10 9
  let m = 10;
  console.log(m--);
  console.log(m);


  O/P : 12
  let n = 5;
  let result = n++ + ++n;
  console.log(result);


  O/P : 101 101
  let likes = 100;
  function likePost() {
    return ++likes;
  }
  console.log(likePost());
  console.log(likes);


  O/P : Matched
  let count = 5;
  if (count-- === 5) {
    console.log("Matched");
  } else {
    console.log("Not matched");
  }

  // Using switch + arithmetic operators
  function calc(a, b, operator) {
  // +, -, *, /
    switch (operator) {
      case "+" : 
        return a + b;
      case "-" :
        return a - b;
      case "*" :
        return a * b;
      case "/" :
        return b !== 0 ? a / b : "cannot divide by 0";
      default : 
        return "Invalid Operator"
    }
  }

  console.log(calc(10, 5, "+"));
  console.log(calc(10, 5, "-"));
  console.log(calc(10, 5, "*"));
  console.log(calc(10, 5, "/"));

*/

// Control Flow
/*
  if else else-if
  switch case
  early return pattern

  if (loggedIn && isAdmin) {} 
  else if (loggedIn) {} 
  else {}


  let val = 5;
  switch (val) {
    case 0:
      console.log("Sunday");
      break; 
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Not a valid day");
      break;
  }
*/

/*
  Practice Question:
  function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    if (score >= 80 && score <= 89) return "A";
    if (score >= 70 && score <= 79) return "B";
    if (score >= 60 && score <= 69) return "C";
    if (score >= 33 && score <= 59) return "D";
    if (score >= 0 && score <= 32) return "Fail";
    return "Invalid Marks";
  }
  console.log(getGrade(1));

  
  // Rock-Paper-Scissors Logic
  function rps(user, computer) {
    if (user === computer) return "draw";
    if (user === "rocker" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user;"
    if (user === "paper" && computer === "rock") return "user;"
    return "computer";
  }

  console.log(rps("rock", "paper"));


  let x = 2;
  switch (x) {
    case 2: console.log("Two");
    case 3: console.log("Three");
  }
  O/P : Two Three (bug if break is missing)
*/

// Loops        
/*
  for while do-while for-in for-of for-eaech
  
  for : kaha se jana hai -> kaha tak jana hai -> kaise jana hai
  while : kaha se jana hai -> kab tak rukna hai -> kaise jana hai

  // for 
  for (let i = 1; i <= 100; i++) {
    console.log("hello");
  } 

  // while
  start
  while (end) {
    // code
    change
  }

  let i = 1;
  while (i < 51) {
    console.log(i + " ");
    i++; 
  }

  // do while
  let i = 10;
  do {
    console.log(i);
    i++;
  }
  while (i < 2) // will always run once even if the condition is wrong


  // break
  for (let i=1; i<=200; i++) {
    console.log(i);
    if (i === 50) break;
  }

  // continue
  for (let i=1; i<=200; i++) {
    if (i === 50) continue;
    console.log(i);
  }
*/

/*
  Practice Questions
  Q1. Print numbers from 1 to 10 using a for loop.
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  Q2. Print numbers from 10 to 1 using a while loop.
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }

  Q3. Print even numbers from 1 to 20 using a for loop.
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      continue;
    } console.log(i);
  }

  Q4. Print odd numbers from 1 to 15 using a while loop.
  let i = 1;
  while (i <= 15) {
    if (i % 2 != 0) {
      console.log(i);
    }
    i++;
  }

  Q5. Print the multiplication table of 5 (i.e., 5 * 1 = 5 ...5 * 10 = 50)
  let n = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }

  Q6. Find the sum of numbers from 1 to 100 using a loop
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);

  Q7. Print all numbers between 1 to 50 that are divisible by 3.
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }

  Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd. // (e.g., "1 is odd", "2 is even", ...)
  let val = prompt("Give a number");
  for (let i = 1; i <= val; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }

  Q9. Count how many numbers between 1 to 100 are divisble by both 3 and 5. 
  let cnt = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log(i);
  }


*/

/*
  Q1. Stop at First Multiple of 7
  Write a loop from 1 to 100 that:
    - Prints each number
    - Stops completely when it finds the first number divisible by 7

  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) break;   
  }

  Q2. Skip Multiples of 3
  Write a loop from 1 to 20 that:
    - Skips numbers divisible by 3
    - Prints all others

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) continue;
    console.log(i);
  }

  Q3. Print First 5 Odd Numbers Only
  Write a loop from 1 to 100 that:
    - Prints only 5 odd numbers
    - Then stops the loop

  let cnt = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      cnt++;
      console.log(i);
    }
    if (cnt === 5) break;
  }

  Q4. Swap Two Numbers Without Extra Variable
  let a = 10;
  let b = 20;
  a = a + b; // 30
  b = a - b; // 10
  a = a - b; // 20
  console.log(`Val of a is : ${a}`);
  console.log(`Val of b is : ${b}`);

  let a = 10;
  let b = 20;
  [a, b] = [b, a];
  console.log(`Val of a is : ${a}`);
  console.log(`Val of b is : ${b}`);

  Q5. Largest of Three Number
  let a = Number(prompt("Enter value of a : "));
  let b = Number(prompt("Enter value of b : "));
  let c = Number(prompt("Enter value of c : "));
  let largest = null;
  if (a > b && a > c) largest = a;
  else if (b > a && b > c) largest = b;
  else largest = c;
  console.log(largest);

  or 

  console.log(Math.max(a, b, c));
  
  Q6. Simple Calculator
  let a = Number(prompt("Enter value of a : "));
  let b = Number(prompt("Enter value of b : "));
  console.log(`Addition of ${a} and ${b} is : ${a + b}`);
  console.log(`Substraction of ${a} and ${b} is : ${a - b}`);
  console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
  console.log(`Division of ${a} and ${b} is : ${a / b}`);
  console.log(`Moduluo of ${a} and ${b} is : ${a % b}`);

  Q7. Reverse a number
  let n = Number(prompt("Enter a value : "));
  let rev = 0;
  while (n !== 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10); // since / converts it to decimal
  }
  console.log(rev);

  Q8. FizzBuzz (Legend Question)
  1 se 50 tak print karo:
    •	Agar number 3 se divisible → “Fizz”
    •	Agar 5 se divisible → “Buzz”
    •	Agar dono se → “FizzBuzz”
    •	warna number

  for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

*/

// Functions
/*  
  1. 
  function functionName() {}

  function dance() {
    console.log("Hey");
  }
  dance();

  2.
  let func = function() {
    console.log("Hey")
  }
  func();

  // function declaration
  function abcd() {}

  // function expression
  let func = function() {}

  // fat arrow function 
  let func = () => {
    console.log("Hey")
  }
  func();

  function print(val) {
    console.log(`My name is ${val}`);
  }
  print("Kanav");
  
  // val1 and val2 are parameters
  function add(val1, val2) {
    console.log(`Sum of 2 numbers is ${val1 + val2}`);
  }
  // these two numbers are arguments
  add(5753, 2004);
  add(5753999, 2004888);

  console.log(undefined + undefined); // NaN
  function add(val1, val2) {
    console.log(`Sum of 2 numbers is ${val1 + val2}`);
  }
  add();

  // default values
  function add(val1 = 1, val2 = 0) {
    console.log(`Sum of 2 numbers is ${val1 + val2}`);
  }
  add();

  // When there are a lot of arguments there has to be equal number of paramters. To be safe from this we use rest (...) and if there is space in function's paramter its the rest operator. In case of objects we use spread operator.
  function add(a, b, c, ...val) {
    console.log(a, b, c, val);
    console.log(typeof val);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
  }
  add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


*/

/*
  // Return matlab jaha se aaye ho wahi daal denge
  function abcd(val) {
    return 3575 + val;
  }
  let ans = abcd(5753);
  console.log(ans);

  // first class functions
  functions those are treated as values
  const greet = function() {
    console.log("hello");
  }
 
  function abcd(val) {
    val();
  };
  abcd(function() {
    console.log("Hey");
  });
*/

/*
  Higher Order Function (HOF):
  Function that returns function or which accepts a function as its parameter.

  // function abcd is HOF
  function abcd(val) {
    val();
  }
    
  abcd(function(){

  });

  // function abcd is HOF
  function abcd() {
    // this will return to the abcd() function
    return function() {
      console.log("Hey");
    }
  }
  // first () for running the abcd() 
  // second () for accepting the function after its returned
  abcd()();
*/

/*
  pure vs impure functions
  pure : aisa func jo ki baahar ki value ko naa badle voh h pure func
  impure : aisa func jo ki baahar ki value ko badal de voh h impure func

  // Function 1 : Pure 

  function multiply(num, mult){
    return num * mult;
  }

  // Function 2 : Impure

  var mult = 2;

  function multiply(num){
    return num * mult;
  }
*/

/*
  Closures & Lexical Scope
  Closures: Ek function jo return kare ek aur function aur return hone wala function hmesha use krega parent function ka variable.
  
  eg: 
  function outer() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  let counter = outer();
  counter(); // 1
  counter(); // 2

  Lexical Scoping: defines the accessibility of variables and functions depending on their location in the source code. 

  eg: 
  function abc() {
    let a = 10;
    function def() {
      let b = 15;
      function ghi() {
        let c = 20;
      }
    }
  }
*/

/*
  IIFE (Immediately Invoked Function Expression)
  Used to create private scope instantly.

  eg: 
  (function(){
    console.log("Runs immediately");
  })();
*/

/*
  Hoisitng Declarations
  - works in simple function declaration.
  
  abcd();

  function abcd() {
    console.log("Hey");
  }

  - fails in function expressions.
  
  abcd();

  let abcd = function() {
    console.log("Hey");
  }
*/

/*
  Q1. 
  greet();
  function greet() {
    console.log("Hello");
  }
  O/P: Hello

  Q2. 
  function multiple(a, b) {
    return a * b;
  }
  to
    let multiple = (a, b) => { 
    return a * b;
  }

  Q3. 
  function welcome(name) {
    console.log(name); 
  }
  welcome("Kanav");

  name : parameter
  "Kanav" : argument

  Q4. 
  function demo(a, b, c) {}
  demo(1, 2);

  demo has 3 paramters
  onyl 2 are passed as arguments

  Q5. 
  function sayHi(name = "Guest") {
    console.log("Hi", name);
  }
  sayHi();
  O/P: "Hi, Guest"

  Q6.
  function abcd(...val) {
    console.log(val);
  }
  abcd(1, 2, 3, 4, 5, 6);

  Q7. Use rest parameter to accept any number of scores and return the total.
  function getScores(...scores) {
    let total = 0;
    scores.forEach(function(val){
      total = total + val;
    });
    return total;
  }
  console.log(getScores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  Q8.
  function checkAge(age) {
    if (age < 18) {
      console.log("Too young");
    } else {
      console.log("Allowed");  
    }
  }

  Fix to early return
  function checkAge(age) {
    if (age < 18) return "Too young" 
    return "Allowed";
  }
  console.log(checkAge(21))

  Q9.
  function f() {
    return;
  }
  console.log(f());
  O/P: undefined

  Q10.
  What does it mean when we say "functions are first-class citizens" ?
  - Functions can be treated as values.
  - Functions can be saved inside variables.
  - Functions can be passed in other functions as well.
  - They can be treated exactly as values.

  Q11.
  Can you assign a function to a variable and then call it ? Show how.
  let a = function() {

  }
  a();

  Q12. Pass a function into another function and execute it inside.
  function a(val) {
    val();
  }
  a(function b() {
    console.log("Hey");
  });

  Q13. What is a higher-order function?
  - Functions that returns functions or accepts a function as its parameter.
  function a(val) {
    val();
  }
  a(function b() {
    console.log("Hey");
  });

  Q14. Which function from this is HOF?
  [1, 2, 3].map(function (x) {
  return x * 2;
  });
  - .map function

  Q15. Pure or Impure?
  let total = 0;
  function addToTotal(num) {
    total += num;
  }
  - Impure since its changes the value of an outside variable.

  Q16.
  let total = 0;
  function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
  }

  Q17. What is a closure? When is it created?
  - closure is created when one function returns another function and inner function uses a value from outer function.
  
  function a() {
    let val1 = 10;
    return function () {
      console.log(val);
    };
  }

  Q18.
  function outer() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter();
  counter(); 
  O/P : 1 2

  Q19. Convert this normal function to an IIFE
  function init() {
    console.log("Initialized");
  }

  (function() {
    console.log("Initialized");
  })();

  Q20. What is the use of IIFE? Name one real-world use case.
  use-case: 
  let ans = (function(){
  let score = 0;
    return {
      getScore: function(){
        console.log(score);
      },
      setScore: function(val){
        score = val;
      },
    };
  })();

  O/P:
  ans.getScore()
  0
  undefined
  ans.setScore(10)
  undefined
  ans.getScore()
  10

  Q21. What will be the output here and why?
  greet();
  var greet = function() {
    console.log("Hi!")
  }
  O/P: Error 
*/

/*
  1. Write a BMI Calculator
  function bmi(weight, height) {
    return weight / (height * height);
  }

  console.log(bmi(68, 1.78).toFixed(2));

  2. Create a resuable discount calculator (HOF) / Closure
  function discountCalc(rate) {
    return function(amount) {
      return amount - amount * (rate / 100);
    };
  };
  let _10 = discountCalc(10);
  console.log(_10(1500));

  3. Build a counter using closure
  function counter() {
    let count = 0; // doesn't stays 0 on 2nd func call
    return function() {
      count++;
      return count;
    };
  }
  let c = counter();
  console.log(c());

  4. Create a pure function to transform a value 
  function double(val) {
    return val * 2;
  }
  console.log(double(5));

  5. Use IIFE to isolate variables
  (function() {
    const password = "secret password";
    console.log(password);
  })();
  // console.log(password); // Ref Error

*/

/*
  Confusions
  const obj = {
    val : 2111,
    regular: function () { return this.val; },
    arrow: () => this.val
  };

  greet(); // works because of hoisting
  function greet() {}

  greet(); // Error because of Temporal Dead Zone
  const greet = () => {};

  Closure:
  function func() {
    let a = 10;
    return function() {
      console.log(a);
    }
  }
  let ans = func();
  ans();

  HOF:
  function func() {
    let a = 10;
    return function() {
      console.log(a);
    }
  }
  let ans = func();
  ans();
*/

// Arrays
/* 
  // Create, access, modify arrays
  let marks = [9.19, 7.85, 8.84, 8.88, 8.40];
  marks.forEach(element => {
    console.log(element.toFixed(2));
  });
  
  let arr = [1, 2, 3, 4];
  arr[2] = 12;

  // Array Methods 1
  // let arr = [1, 2, 3, 4, 5];
  let arr = [10, 60, 30, 20, 40];

  // arr.push(6, 7, 8, 9, 10);

  // arr.pop();

  // arr.shift();

  // arr.unshift(0 );

  // .splice(startIndex, deleteCount, newItem)
  // arr.splice(2, 1); // changes the actual array 

  // arr.slice(2, 1); // doesn't change the actual array but return a copy array
  // let newArr = arr.slice(0, 4);

  // arr.reverse();

  // .sort() : always accept a function
  // let sortedArr = arr.sort(function(a, b) {
  //   return a - b; // ascending
  //   // return b - a; // descending
  // })
*/

/*
  // Array Methods 2
  forEach:
  let arr = [1, 2, 3, 4, 5];
  arr.forEach(function(val) {
    console.log(val + 5);
  });

  map:
  // map sirf tab use krna h jab aapko ek naya array bnana h pichle array ke data ke basis par
  // map dikhte he saath m ek blank array bna liya kro

  let newArr = arr.map(function(val) {
    return 12; // if i don't return anything it will return undefined
  });

  filter: accepts boolean true or false, creates a new array
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let newArr = arr.filter(function(val) {
    if (val > 4) return true;
  });

  reduce:
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ans = arr.reduce(function (accumulator, val) {
    return accumulator + val;
  }, 0); // this 0 is the val of the accumulator

  find: returns the first matched 
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let arr = [
    {id: 1, key: 1},
    {id: 2, key: 2},
    {id: 3, key: 1}
  ]
  let newArr = arr.find(function(val) {
    return val.key == 1;
  });

  some: stores value in terms of boolean (true or false)
  let arr = [10, 20, 30, 90, 70, 60];
  let ans = arr.some(function(val) {
    return val > 85;
  });

  every: if each value matches the condition returns true else returns false
  let arr = [10, 20, 30, 90, 70, 60];
  let ans = arr.every(function(val) {
    return val > 9
  });
*/  

/*
  // Destructoring
  let arr = [1, 2, 3, 4, 5];
  let [a, b, , d] = arr;
  

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let arr1 = arr; // reference value not copy
  let arr1 = [...arr]; // this uses spread operator creates a copy
*/

/*
  Q1. Create an array with 3 fruits and print the second fruit.

  let fruits = ["apple", "banana", "orange"]; 
  console.log(fruits[1]);

  Q2. Add "Mango" at the end and "Pineapple" at the beginning of this array:

  let fruits = ["apple", "banana", "orange"];
  fruits.push("mango");
  fruits.unshift("pineapple");

  Q3. Replace "banana" with "kiwi" in the array above.

  let fruits = ["apple", "banana", "orange"];
  // fruits[1] = "kiwi";

  // let index = fruits.indexOf("banana");
  // if (index != -1) {
  //   fruits[index] = "kiwi";
  // }

  // .splice(startIndex, deleteCount, newItem)
  // fruits.splice(1, 1, "kiwi");

  // let newFruits = fruits.map(function(val) {
  //   if (val === "banana") return "kiwi"
  //   return val;
  // })

  // for (let i = 0; i < fruits.length; i++) {
  //   if (fruits[i] === "banana") {
  //     fruits[i] = "kiwi";
  //   }
  // }

  Q4. What's the difference between .push() and .unshift() ?
  
  .push(): pushes the element to the end of array
  .unshift(): appends the element to the beginning of the array 

  Q5. Remove the last item from this array using a method:
  
  let numbers = [1, 2, 3, 4];
  numbers.pop();  
  
  Q6. Insert "Red" and "Blue" at index 1 in this array:
  
  let colors = ["Green", "Yellow"];
  colors.splice(1, 0, "Red", "Blue");

  Q7. Extract only middle 3 elements from this array
  
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = items.slice(3, 6);

  Q8. Sort this array alphabetically and then reverse it.
  let names = ["Zara", "Arjun", "Mira", "Bhavya"];
  names.sort().reverse();
  
  Q9. Use .map() to square each number:
  let arr = [1, 2, 3, 4, 5];
  let ans = arr.map(function(val) {
    return val * val;
  });

  Q10. Use .filter() to keep numbers greater than 10
  let arr = [5, 10, -15, 20, -25, 30];
  let ans = arr.filter(function(val) {
    if (val > 10) return true;
  });

  let ans = arr.filter((val) => {
    // if (val > 10) return true;
    return val > 10;
  });

  Q11. Use .reduce() to find the sum of this array
  let arr = [10, 20, 30];
  let newarr = arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  console.log(newarr);

  Q12. Use .find() to get the first number less than 10
  let arr = [12, 5, 3, 8, 20];
  let ans = arr.find(function(val) {
    return val < 10;
  });
  console.log(ans);

  Q13. Use .some() to check if any stuent has scored below 35
  let arr = [45, 60, 28, 90];
  let ans = arr.some(function(score) {
    return score < 35;
  });
  console.log(ans);

  Q14. Use .every() to check if all numbers are even
  let arr = [2, 4, 6, 8, 10];
  let ans = arr.every(function(val) {
    return val % 2 === 0;
  });
  console.log(ans);

  Q15. Destructure this array to get firstName and lastName
  let fullName = ["Kanav", "Kumar"];
  let [firstName, lastName] = fullName;
  console.log(lastName);

  Q16. Merge two arrays using spread operator
  let a = [1, 2];
  let b = [3, 4];
  let c = [...a, ...b];

  Q17. Add "India" to the start of this array using spread
  let countries = ["USA", "UK"];
  countries = ["India", ...countries];

  Q18. Clone this array properly (not by reference):
  let arr = [1, 2, 3];
  let newArr = [...arr];
  newArr.pop();
*/

/* 
  Common Confusions
  1. slice vs splice
  slice: will return a new array
  splice: will change the original array

  2. map vs forEach
  map: need to make a new array from previous array
  forEach: will iterate over each element and will not return 

  3. big blunder with .sort
  [100, 20, 3].sort(); // [100, 20, 3] -> "100", "20", "3" (wrong)

  let arr = [4, 2, 1, 3];
  arr.sort(function(a, b) {
    return a - b;
  })
  arr.sort((a, b) => a - b); // ascending 
  arr.sort((a, b) => a - b); // decending 

*/

// Objects
/*
  // blank object
  let obj = {
    name: "kanav",
    age: 21,
  };
  console.log(obj.name);
  console.log(obj['name']);

  let naam = "kannan";
  obj[naam];

  const user = {
    name: "kanav",
    address: {
      city: "Zirakpur",
      pincode: 140604,
      locations: {
        latitude: 30.66,
        longitude: 76.83,
      },
    },
  }; 
  console.log(user.address.locations.latitude);
  // destructuring
  let { latitude, longitude } = user.address.locations;
*/

/*
  Looping:
  let obj = {
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com",
  };

  // for (let key in obj) {
  //   console.log(key);
  // }

  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }

  Object.keys(obj); // object ki saari keys ko arrays me daal deta h
  Object.entries(obj); // array of arrays

*/

/*
  let obj = {
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com",
    address: {
      city: "zirakpur",
    },
  };
  let obj2 = {...obj}; // wrong method to copy if the object is nested 
  obj2.address.city = "chandigarh";
  // let obj2 = Object.assign({ price: Infinity }, obj);

  // JSON.stringify() : converts to string
  // JSON.parse() : converts string back to JSON

  // deep clone
  let obj = {
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com",
    address: {
      city: "zirakpur",
    },
  };
  let obj2 = JSON.parse(JSON.stringify(obj)); // this works 
*/

/*
  Optional Chaining
  let obj = {
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com",
    addresss: {
      city: "zirakpur",
    },
  };
  // obj?.address?.city // gives undefined instead of error


  Computed Properties
  let role = "admin";
  let obj = {
    name: "Kanav",
    age: 21,
    email: "kumarkanav5753@gmail.com",
    addresss: {
      city: "zirakpur",
    },
    [role]: "Kanav",
  };
*/

/*
  Practise
  Q1. Create an object for a student with name, age, and isEnrolled.
  let obj = {
    name: "Kanav",
    age: 21,
    isEnrolled: true,
  };

  Q2. Can an object key be a number or boolean? Try this
  const obj = {
    true: "yes",
    42: "answer",
  };
  console.log(obj[true]);

  Q3. Access the value of "first-name" from this object:
  const user = {
    "first-name": "Kanav",
  };
  console.log(user["first-name"]);

  Q4. Given a dynamic key let key = "age", how will you access user[key]?
  let key = "age";
    const user = {
      age: 26,
    };
    console.log(user[key]);

  Q5. From the object below, print the latitude:
  const locations = {
    city: "Zirakpur",
    coordinates: {
      lat: 23.2,
      lng: 77.4,
    },
  };

  console.log(locations.coordinates.lat);

  Q6. What will happen if coordinates is missing? How can you prevent errors?
  - Using optional chaining
  console.log(locations?.coordinates?.lat);

  Q7. Destructure the city and latitude from the location object above.
  const locations = {
    city: "Zirakpur",
    coordinates: {
      lat: 23.2,
      lng: 77.4,
    },
  };
  let {city} = locations;
  let {lat} = locations.coordinates;

  Q8. Destructure the key "first-name" as a variable called firstName.
  const user = {
    "first-name": "Kanav"
  };
  let { "first-name": firstName } = user;

  Q9. Use for-in loop to log all keys in this object:
  const course = {
    title: "JavaScript",
    duration: "4 weeks",
  };

  for (let key in course) {
    console.log(key); 
  }

  Q10. Use Object.entries() to print all key-value pairs as: 
  const course = {
    title: "JavaScript",
    duration: "4 weeks",
  };

  // creates 2 arrays: 1st array with 0th index val: title and 1st index val: "JavaScript"
  // similar with 2nd array
  Object.entries(course).forEach(function(val) {
    console.log(val[0] + ": " + val[1]);
  });

  Q11. Copy the object using spread operator
  const original = {
    a: 1,
    b: 2
  };

  const copy = {...original};

  Q12. What is the problem in this? 
  - This is reference copying not deep copying
  const obj1 = { info : { score: 80 } };
  // const clone = { ...obj1 };
  // const clone = JSON.parse(JSON.stringify(obj1)); // fixes this
  clone.info.score = 100;
  console.log(obj1.info.score); 

  Q13. Rewrite this safely using optional chaining:
  const person = {};
  console.log(person?.profile?.name);

  Q14. Use a variable to dynamically assign a property
  const key = "role";
  const key2 = "age";
  let obj = {
    name: "Kanav",
    [key]: "admin",
    [key2]: 21,
  }
*/  

/*
  Deep Copy v/s Shallow Copy
  - Reference type values cannot be directly copied
  - Using spread can work here but won't work in nested objects

  const a = { score: 90 };
  // const b = a;
  // const b = JSON.parse(JSON.stringify(a)); // deep copy
  const b = {...a}; // works
  b.score = 50;
  console.log(a.score);
*/

// DOM
/*
  DOM Manipulation: 
  - html se select karna
  - text badal na
  - html badal na
  - css badal na
  - attribute
  - event listeners

  // const heading = document.getElementById("abcd");
  const heading = document.querySelectorAll("h1");
  // heading.innerHTML = "efgh"
  console.log(heading);
  console.dir(heading);

  const heading2 = document.getElementsByClassName('demo');
  console.log(heading2);
  console.dir(heading2);

  - Use console.log() for simple debugging messages, strings, and general-purpose logging where the default browser-specific formatting is acceptable.

  - Use console.dir() when you need to explore the complete object structure, especially for deeply nested objects or when you want to see the underlying JavaScript object properties of a DOM element instead of its HTML representation

  - innerText and textContent are the same in function changing the text content

  - innerHTML changes the html part
  
  let h1 = document.querySelector("h1");
  h1.textContents = "Welcome Kanav!!";
  h1.innerHTML = "<p>I will be on holidays</p>";
  console.dir(h1);
  h1.hidden = true; // hides the h1 tag
  let a = document.querySelector("a");
  console.log(a);
*/

/*
  Attribute Manipulation:
  - getAttribute
  - setAttribute
  - remvoeAttribute


  let a = document.querySelector('a');
  a.href = "https://www.google.com"
  a.setAttribute('href', "https://www.google.com");

  let image = document.querySelector('img');
  image.setAttribute('src', 'https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');


  let a = document.querySelector('a');
  console.log(a.getAttribute("href"));

  let a = document.querySelector('a');
  a.removeAttribute('href');
*/

/*
  Dynamic DOM Manipulation:
  - createElement
  - appendChild
  - removeChild
  - prepend

  let h1 = document.createElement('h1');
  h1.textContent = "Welcome";
  // document.body.append(h1); // appears after script
  // document.body.prepend(h1); // appears before script
  // console.log(h1);
  document.querySelector('body').append(h1);


  // let h1 = document.querySelector('h1');
  // h1.remove();

  // let h1 = document.createElement('h1');
  // h1.textContent = "Welcome";
  // document.querySelector('div').prepend(h1);
*/

/*
  Style Updates
  - .style
  - classList (add, remove, toggle)

  let h1 = document.querySelector('h1')
  h1.style.color = "red";
  console.dir(h1);

  let h1 = document.querySelector('h1')
  h1.style.color = "red";
  h1.style.backgroundColor = "black";
  h1.style.fontSize = "50px";
  h1.style.fontFamily = "sans-serif";
  h1.style.textTransform = "capitalize";
  console.dir(h1);


  let h1 = document.querySelector('h1');
  console.dir(h1);
  h1.classList.add('hulu');
  h1.classList.remove('hulu');
  h1.classList.toggle('hulu');
  h1.classList.toggle('hulu');
*/

/*
  Q1. What is the DOM? How does it represent the HTML structure?
  - DOM stands for Document Object Model. It is a programming interface for web documents. It represents the structure of an HTML document as a tree of objects, where each node corresponds to an element, attribute, or piece of text in the HTML. This allows developers to manipulate the content, structure, and style of a web page dynamically using JavaScript.

  Q2. Names the types of nodes in the DOM tree
  - Element nodes: Represent HTML elements (e.g., <div>, <p>, <a>).
  - Text nodes: Represent the text content within elements.
  - Attribute nodes: Represent the attributes of HTML elements (e.g., class, id).
  - Comment nodes: Represent comments in the HTML code.

  Q3. What is the difference between an element node and a text node?
  - An element node represents an HTML element and can have attributes and child nodes, while a text node represents the text content within an element and cannot have attributes or child nodes.

  Q4. Inspect the following HTML in the browser and identify each node:

  Q5. What is the difference between getElementById and querySelector?
  - only asks for id and returns a single element
  - accepts any css selector and returns the first matched element

  document.getElementById("abcd");
  document.querySelector("#abcd");

  Q6. What does getElementsByClassName return? Is it an array?
  - It returns an HTMLCollection, which is similar to an array but not exactly an array. It is a live collection, meaning it automatically updates when the DOM changes.

  let cLass = document.getElementsByClassName("color");
  console.log(cLass);

  Q7. Use querySelectorAll to select all buttons with class ".buy-now".
  let buy = document.querySelectorAll(".buy-now");
  console.log(buy);

  T1. Select the heading of a page by ID and change its text to "Welcome to Shreyians!".
  let heading = document.querySelector('#heading');
  heading.textContent = "Welcome to Shreyians!";

  T2. Select all <li> elements and print their text using a loop.
  let list = document.querySelectorAll('li');
  list.forEach(function(val) {
    console.log(val.textContent);
  });

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
  }

  list.forEach(val => {
    console.log(val.textContent);
  });

  Q8. What's the difference between innerText, textContent and innerHTML.
  - textContent and innerText changes the text inside the html tag.
  - innerHTML allows to change the html tag.

  Q9. When should you use textContent instead of innerText?
  - textContent is a faster method comparatively to innerText.
  - textContent also change the hidden content. eg: span inside another tag.
  
  T3. Select a paragraph and replace its content with:
  <b>Updated</b> by JavaScript
  let paragraph = document.querySelector('p');
  paragraph.innerHTML = "<b>Updated</b> by JavaScript";

  Q10. How do you get the src of an image using JavaScript
  let img = document.querySelector('img');
  console.log(img.src);
  console.log(img.getAttribute('src'));

  Q11. What does setAttribute() do?

  T4. Select a link and update its href to point to https://shreyians.com
  let a = document.querySelector('a');
  // a.setAttribute('href', "https://www.shreyians.com");
  a.href = "https://sheryians.com/";

  T5. Add a title attribute to a div dynamically.
  let div = document.querySelector('div');
  // div.setAttribute('title', 'hello');
  div.title = "Hello";

  T6. Remove the disabled attribute from a button.
  let btn = document.querySelector('button');
  // btn.removeAttribute('disabled');

  Q12. What does createElement() do? What's returned?

  Q13. What's the difference between appendChild() and prepend()

  Q14. Can you remove an element using removeChild()
  let div = document.querySelector('div');
  let remove = document.getElementById('remove');
  div.removeChild(remove);

  T7. Create a new list item <li>New Task</li>
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = "apple 6"
  ul.appendChild(li);

  T8. Create a new image element with a placeholder source and add it at the top of a div.
  let img = document.createElement('img');
  img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1719943511116-49eac75ba4ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  img.classList.add('placeholder');
  document.querySelector('div').prepend(img);

  T9. Select the first item in a list and delete it from the DOM.
  let ulist = document.querySelector('ul');
  let list = document.querySelector('li');
  ulist.removeChild(list);

  Q15. How do you change the background color of an element?
  // element.style.backgroundColor = 'color';
  let ul = document.querySelector('ul');
  ul.style.backgroundColor = 'red';

  Q16. What's the difference between .classList.add() and .classList.toggle() ?
  - .classList.add() adds a class to an element
  - .classList.toggle() toggle the state of an element, if its added it'll remove it and vice versa.

  T10. Add a highlight class to every even item in a class list
  // 2n means every 2nd wala 
  let li = document.querySelectorAll('ul li:nth-child(2n');
  li.forEach(function(val) {
    val.classList.add('highlight');
  });

  T11. Toggle a class active on a button when clicked (Hint: Use .classList.toggle()).

  T12. Set the font size of all <p> elements to 18px using .style
  let p = document.querySelectorAll('p');
  p.forEach(function(val) {
    val.style.fontSize = "24px";
    val.style.fontWeight = "Bold";
    val.style.color = "grey";
  });
*/

// Events and Event Handling
/*
  Event binding: addEventListener, removeEventListener
  1. event matlab hota h koi action hua
  2. event listener ka matlab h aapne koi action ka reaction diya
  
  let p = document.querySelector('p');
  p.addEventListener('dblclick', function() {
    this.classList.add('para');
  });

  p.addEventListener('click', () => {
    this.classList.toggle('para');
  });

  function dblclick() {
    p.classList.add('para');
  }

  p.addEventListener('dblclick', dblclick);
  p.removeEventListener('dblclick', dblclick);
*/  

/*
  Common events: click, input, change, submit, mouseover, keyup

  1. click
  let p = document.querySelector('p');
  p.addEventListener('click', () => {
    p.classList.add('para');
  });

  2. input
  let input = document.querySelector('input');
  input.addEventListener('input', () => {
    console.log("Typed");
  });

  let input = document.querySelector('input');
  input.addEventListener('input', (e) => {
    // console.log("Typed");
    // console.log(e);
    // console.log(e.data);
    if (e.data !== null) {
      console.log(e.data);
    }
  });

  3. change: event tab chlta h jab apka koi input select ya textarea m koi change hojaye
  
  let select = document.querySelector('select');
  let device = document.querySelector('#device');
  select.addEventListener('change', function(e) {
    // console.log(e.target.value);
    device.textContent = `Device Selected: ${e.target.value}`;
  });

  // Changing the content of the heading with event listener
  |
  let h1 = document.querySelector('h1');
  window.addEventListener('keydown', function(val) {
    // console.log(val.key);
    if (val.key === " ") {
      h1.textContent = "Space";
    } else {
      h1.textContent = val.key;
    }
  });


  4. submit
  // changing the style of the file input button and updating the textContent of the button with that current file_name.
  let btn = document.querySelector('#btn');
  let file_input = document.querySelector('#file-input');
  btn.addEventListener('click', () => {
    file_input.click();
  });

  file_input.addEventListener('change', (event) => {
    // console.log(event.target.files[0].name);
    const file = event.target.files[0];
    if (file) {
      btn.textContent = file.name;
    }
  });


  // creating a card from submit event on button
  let form = document.querySelector('form');
  let main = document.querySelector('#main');
  let inputs = document.querySelectorAll('input'); // nodelist

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let card = document.createElement('div');
    card.classList.add('card');

    let profile = document.createElement('div');
    profile.classList.add('profile');

    let img = document.createElement('img');
    img.setAttribute('src', inputs[0].value);

    let h3 = document.createElement('h3');
    h3.textContent = inputs[1].value;

    let h5 = document.createElement('h5');
    h5.textContent = inputs[2].value;

    let p = document.createElement('p');
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);

    inputs.forEach(function(inp) {
      if (inp.type !== "submit") {
        inp.value = "";
      }
    });
  });
  

  5. mouseover, mouseout, mousemove
  let abcd = document.querySelector('#abcd');
  abcd.addEventListener('mouseover', function() {
    abcd.style.backgroundColor = "yellow";
  });

  abcd.addEventListener('mouseout', function() {
    abcd.style.backgroundColor = "red";
  });
  
  window.addEventListener('mousemove', function(event) {
    // console.log(event.clientX, event.clientY);
    abcd.style.top = event.clientY + "px";
    abcd.style.left = event.clientX + "px";
  });

  6. keyup
  let p = document.querySelector('#log');
  document.querySelector('input').addEventListener('keyup', function(event) {
    event.preventDefault();
    // console.log(event.key);
    p.textContent += event.key;
  }) 

*/  

/*
  Event object: target, type, preventDefault
  
*/