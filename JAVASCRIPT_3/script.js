// Scope, Execution Context, and Closures
/*
  Scope h ke aap apne created variables and functions kaha tak use kar skte ho

  Scope - functional scope, global scope, block scope

  1. functional scope: function ke andar hi use ho skti h

    function abcd() {
      var a = 10;
    }
    console.log(a);

  2. global scope: poore code mein kahi bhi use ho skti h. Ager aapka code kisi bhi {} ke andar nhi h to aapka code global h
    
    var a = 12;

  3. block scope: {} curly braces mein hi use ho skti h
  
    if (){  or while () {}
      
    }
*/

/*
  Execution Context: Its Abstract. Hypothetical scenior, a box. It creates two phases memory phase and execution phase. In memory phase, space are allocated for variables and in the execution phase the code is run.
  
  JS sabse pehle jaise hi aapka function dekhta h sabse pehle js bnata h execution context, ye ek process h jo ki do different phases mein chalta h, memory phase and doosre ka naam h execution phase
*/

/*
  Lexical Scope and Dynamic Scope
  JS - lexical scoping: ki aap kaha par physically available ho ye poori tareeke se depend krta h ki aap kya access kro paoyge. Lexical meaning physically.
  
  function abcd() {

    let a = 12;

    function defg() {
      console.log(a);
    }
  }
    
  Dynamic scoping: Kaha se call kr rhe ho uspe depend krge ki kya value milegi
  - If Js was dynamically scoped the answer would've been 13.

  let a = 12;

  function abcd() {
    console.log(a);
  }

  function defg() {
    let a = 13;
    abcd();
  }

  defg();
*/

/*
  Closures: hote h functions jo ki kisi parent function ke andar ho aur andar wala function return ho rha ho, and returning function use kre, parent ka koi variable 

  function abcd() {
    let a = 12;
    return function() {
      console.log(a);
    }
  };

  let ans = abcd();
  ans();

  Advantages:
  1. private variables
  2. global pollution


  // counters
  function countForMe() {
  
  let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }

  let ans = countForMe();
  ans();
  ans();
  ans();

  let ans2 = countForMe();
  ans2();
  ans2();
  ans2();
  ans2();

 
  function clickLimiter() {
    // its a private variable cannot be changed from out of this function
    let click = 0;
    return function() {

      if (click < 5) {
        click++;
        console.log(`clicked : ${click} times`);
      } else {
        console.error("limit exceeded, try after some time");
      }
    };
  }

  let ans = clickLimiter();
  ans();
  ans();
  ans();
  ans();
  ans();
  ans();
*/

/*
  Practice

  1. // Toaster Notification
  function createToaster(config) {
    return function(notification) {
      // kuch karega
      let div = document.createElement('div');
      div.className = `fixed ${config.positionX === 'right' ? 'right-10' : 'left-10'} ${config.positionY === "top" ? 'top-10' : "bottom-10"} ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded-lg shadow-lg opacity-100 pointer-events-none`;

      div.textContent = notification;
      document.body.appendChild(div);

      setTimeout(function() {
        document.body.removeChild(div);
      }, config.duration * 1000);
    };
  }

  let toaster = createToaster( {
    positionX: 'right',
    positionY: 'top',
    theme: 'dark',
    duration: 2
  });

  toaster("This is a dummy notification!");


  2. Toaster Notification 2.0
  // Toaster Notification
  function createToaster(config) {
    const parent = document.querySelector('.parent');

    parent.classList.add(
      'fixed',
      config.positionX === 'right' ? 'right-5' : 'left-5',
      config.positionY === 'bottom' ? 'bottom-5' : 'top-5',
      'flex',
      'flex-col',
      'gap-2'
    );

    return function(str) {
      let div = document.createElement('div');

      div.textContent = str;
      div.className = `inline-block ${
        config.theme === 'dark'
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-black'
      } px-6 py-3 rounded-lg shadow-lg w-72`;

      parent.appendChild(div);

      setTimeout(() => {
        parent.removeChild(div);
      }, config.duration * 1000);
    };
  }

  let toaster = createToaster({
    positionX: 'right',
    positionY: 'bottom',
    theme: 'dark',
    duration: 3,
  });

  toaster("Downloading...");

  setTimeout(() => {
    toaster('Download done!');
  }, 2000);
*/

// This Keyword
/*
  The this keyword is a special keyword.
  Unlike other keywords whose value or behavior usually stays the same, the value of this changes depending on where and how it is used.

  this does not have a fixed value — it depends on the context in which you use it.

  This's value:
  global - window
  function - window
  method with es5 function - object
  method with es6 arrow function - window
  es5 function inside es5 method - window
  arrow function inside es5 method - object
  event handler - element
  class - blank object


  1. global scope

  console.log(this);

  2. functional scope

  function fun () {
    console.log(this);
  }
  fun();

  3. method: a function within an object is a method, this here is the obj and we are checking the name

  let obj = {
    name: "kanav",
    age: 21, 
    sayName: function () {
      console.log(this.name, this.age);
    },
  };
  obj.sayName();


  4. event handler : this is which add event listener is applied on.
  if we use () => { } it loses itself and becomes a window
  document.querySelector('h1').addEventListener('click', function() {
    console.log(this.style.color = 'red');
  });


  5. class
  class Car {
    // let speed = 100; // var, let, const don't work
    // speed = 100; // works
    constructor () {
      console.log("Car is fast");
      this.speed = 100;
    }
  };

  let val = new Car();
*/

/*
  Arrow function with lexical this

  let obj = {
    sayName(): function() => {
      
    }
  }
  
  but in case of arrow function

  let obj = {
    sayName: () => {
    
    } 
  }

  arrow function value parent se lete h aur parent obj h, joh ki global space m hai that's why iski value window hogi
*/

/*
  Manual Binding: bind, call, apply
  function ko call krte waqt app set kr skte ho ki uski this ki value kya hogi

  let obj = {
    name: "Kanav",
    age: 21,
  };

  function abcd(a, b, c) {
    console.log(this, a, b, c);
    // console.log(this.name);
  }

  // abcd.call(obj);
  // abcd.apply(obj, [1, 2, 3]);
  let fnc = abcd.bind(obj, 1, 2, 3);
  fnc();
*/

/*

*/


let form = document.querySelector('form');
let role = document.querySelector('#role');
let username = document.querySelector('#name');
let bio = document.querySelector('#bio');
let photo = document.querySelector('#photo');

const userManager = {
  users: [],
  init: function () {
    form.addEventListener('submit', this.submitForm.bind(this));
  },

  submitForm: function(event) {
    event.preventDefault();
    this.addUser();
  },

  addUser: function() {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value
    });

    console.log(this.users); // check in console
    form.reset();
  },
  removeUser: function() {},
};

userManager.init();
