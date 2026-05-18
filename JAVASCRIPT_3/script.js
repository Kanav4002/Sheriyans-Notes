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
      this.renderUI();
    },
    
    renderUI: function() {
      document.querySelector('.users').innerHTML = "";
      this.users.forEach(function(user, index) {
        const card = document.createElement("div");
          card.className =
            "bg-zinc-900 p-6 rounded-2xl shadow-lg text-center w-[300px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer";

          const img = document.createElement("img");
          img.src = user.photo;
          img.className =
            "w-20 h-20 rounded-full mx-auto mb-4 border-4 border-zinc-700";

          const heading = document.createElement("h3");
          heading.className = "text-lg font-semibold";
          heading.textContent = user.username;

          const role = document.createElement("p");
          role.className = "text-sm text-gray-400 mb-2";
          role.textContent = user.role;

          const description = document.createElement("p");
          description.className = "text-sm text-gray-400";
          description.textContent = user.bio;
          
          const removeBtn = document.createElement("button");
          removeBtn.textContent = "Delete";
          removeBtn.className =
            "mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition";

          // DELETE EVENT
          removeBtn.addEventListener("click", () => {
            this.removeUser(index);
          });

          card.appendChild(img);
          card.appendChild(heading);
          card.appendChild(role);
          card.appendChild(description);
          card.appendChild(removeBtn);

          document.querySelector('.users').appendChild(card);
      })
    },
    removeUser: function(index) {
      this.users.splice(index, 1);
      this.renderUI();
    },
  };

  userManager.init();
*/

// Object Oriented Programming
/*
  function createBiscuits(name, price, qty, company, category) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
  }

  const biscuits1 = new createBiscuits('Oreo', 10, 5, 'Mondelēz', 'Chocolate');
  const biscuits2 = new createBiscuits('Parle-G', 10, 10, 'Parle', 'Vanilla');


  OOPs mein hum factories ya blueprints banana seekhte hain.
  Matlab ek baar decide kar do ki har object ka structure kaisa hoga, phir ussi blueprint se hum bahut saare naye objects bana sakte hain — bas unki values alag hongi.

  Easy example 👇

  Socho ek Car ka blueprint hai:

  * Har car mein color
  * brand
  * speed

  yeh sab cheezein hongi.

  Ab isi blueprint se hum alag alag cars bana sakte hain:

  * Red BMW
  * Black Audi
  * White Tesla

  Structure same rahega, sirf values change hongi.

  Programming mein isi blueprint ko mostly Class bolte hain,
  aur usse bane real objects ko Objects bolte hain.

  Simple line mein:

  OOPs ka main kaam hai ek reusable blueprint banana taaki hum easily naye naye similar objects create kar sakein.

  function Cars(color, brand, speed) {
    this.color = color;
    this.brand = brand;
    this.speed = speed;
  }

  const car1 = new Cars("Red", "BMW", 220);
  const car2 = new Cars("Black", "Audi", 240);
  const car3 = new Cars("White", "Tesla", 260);

  ******************************************************************************************************

  function Cars(color, brand, speed, company) {
    this.color = color;
    this.brand = brand;
    this.speed = speed;
    this.company = company;
  }

  Cars.prototype.write = function(text) {
      let h1 = document.createElement('h1');
      h1.textContent = text;
      h1.style.color = this.color;
      console.log(h1);
      document.body.append(h1);
    }

  const car1 = new Cars("red", "BMW", 220, 'BMW Group');
  const car2 = new Cars("black", "Audi", 240, 'Volkswagen Group');
  const car3 = new Cars("white", "Tesla", 260, 'Elon Musk');
  const car4 = new Cars("gold", "Bugatti Chiron", 300, 'Rimac Group');
*/

/*
  Classes

  class CreatePhones {
    constructor(brand, model, color, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.color = color;
    }

    erase() {
      document.body.querySelectorAll('h1').forEach((elem) => {
        if (elem.style.color === this.color) {
          elem.remove();
        }
      })
    }

    write(text) {
      let h1 = document.createElement('h1');
      h1.textContent = text;
      h1.style.color = this.color;
      document.body.appendChild(h1);
    }
  }

  const phone1 = new CreatePhones('Apple', 'iPhone 15', 'black', '79,900');
  const phone2 = new CreatePhones('Samsung', 'S24 Ultra', 'gray', '1,29,999');
  const phone3 = new CreatePhones('OnePlus', '12R', 'blue', '39,999');
  const phone4 = new CreatePhones('Google', 'Pixel 8 Pro', 'white', '1,06,999');
  const phone5 = new CreatePhones('Nothing', 'Phone 2', 'yellow', '44,999');
*/

/*
  class User {
    constructor(name, address, username, email) {
      this.name = name;
      this.address = address;
      this.username = username;
      this.email = email;
      this.role = 'user';
    }

    checkRole () {
      // console.log(`You are a ${this.role}`);
      return `You are a ${this.role}`;
    }

    write(text) {
      let h1 = document.createElement("h1");
      h1.textContent = `${this.name}: ${text}`;
      document.body.appendChild(h1);
    }
  }

  class Admin extends User {
    constructor(name, address, username, email) {
      super(name, address, username, email);
      this.role = "admin";
    }

    remove() {
      document.querySelectorAll("h1")
        .forEach(elem => elem.remove());
    }
  }

  let u1 = new User(
    'Kanav',
    'Zirakpur',
    'kanav2111',
    'kumarkanav5753@gmail.com'
  );

  let u2 = new User(
    'Kannan',
    'Zirakpur',
    'kannan2112',
    'kannan2112.be23@chitkara.edu.in;'
  );

  let a1 = new Admin(
    'admin1',
    'India',
    'admin',
    'admin@gmail.com'
  );
*/

/*
  Classical Inheritance - Java/CPP
  classical banana and unhe extend krdena

  Inheritance: class se inherit krna, class -> class

  Prototypal Inheritance - Java
  ek object hai aap chaaho to uski saari props/methods ko inherit kara dete ho doosre object mein

  let coffee = {
    color: 'dark',
    drink: function() {
      console.log('sip sip sip...');
    }
  }

  let arabiataCoffee = Object.create(coffee);
  // console.log(arabiataCoffee);
  arabiataCoffee.taste = 'bitter';
  arabiataCoffee.drink();
*/

// Callback, Promises & Async & Await
/*
  By default, JavaScript executes code line by line, and this is the natural behavior of JavaScript.

  However, in real-world situations, there are cases where some code takes time to complete (like fetching data from an API, reading a file, or waiting for a timer). Instead of making the entire program stop and wait, JavaScript allows other code to continue running while that task completes in the background.

  So, while one piece of code is waiting, the next lines of code can execute, and once the waiting task finishes, JavaScript handles it later.


  console.log('hey1');
  console.log('hey2');

  setTimeout(() => {
    console.log('hey3');
  }, 2000); // 

  console.log('hey4');
*/

/*
  Synchronous and Asynchronous

  Sync: aisa code jo line by line chale hota hai sync code
  Async: aisa code jo jab chalne ke liye ready ho jaaye tab chale wo hai async

  function afterSomeTime (func) {
    setTimeout (func, Math.floor(Math.random() * 10) * 200
    );
  }

  // afterSomeTime(12);
  afterSomeTime(function () {
    console.log('hey');
  });
*/

/*
  Callback and Callback Hell

  function profileFetch(username, cb) {
    console.log('Fetching profile...');
    setTimeout(() => {
      cb({ _id: 2111, username, age: 21, email: "kumarkanav5753@gmail.com" });
    }, 2000);
  }

  function allPosts(id, cb) {
    console.log('Fetching all posts...');
    setTimeout(() => {
      cb({ _id: id, posts: ['hey', 'hello', 'good morning']});
    }, 3000);
  }

  function savePostsFetch(id, cb) {
    console.log('Fetching saved posts...');
    setTimeout(() => {
      cb({_id: id, saved: [1, 2, 3, 5, 8, 13, 21]});
    }, 3000);
  }

  // This is callback hell
  profileFetch("kanav", function(data) {
    console.log(data);
    allPosts(data._id, function(posts) {
      console.log(posts);
      savePostsFetch(data._id, function(saved) {
        console.log(saved);
      })
    });
  });
*/

/*
  Promises
  
  aap ek promise bnate ho jo ki do states mein se ek state mein jaa sakta hai and wo yaa to resolve hoga ya to reject hoga abh wo kya hoga ye to waqt bataayega par humein dono ke liye code likhna padta hai

  let pr = new Promise(function (res, rej) {
    setTimeout(() => {
      let rn = Math.floor(Math.random() * 10);
      if (rn > 5) res('Resolved with ' + rn);
      else rej('Rejected with ' + rn);
      res('Kanav');
    }, 3000);
  })

  pr
  .then(function(val) {
    console.log(val);
  })
  .catch(function(val) {
    console.log(val);
  })
*/

/*
  Async & Await

  let pr = new Promise(function (res, rej) {
    setTimeout(() => {
      let rn = Math.floor(Math.random() * 10);
      if (rn > 5) res('Resolved with ' + rn);
      else rej('Rejected with ' + rn);
      res('Kanav');
    }, 1000);
  })

  async function abcd() {
    try {  
      let val = await pr;
      console.log(val);
    } catch (err) {
      console.log(err);
    }
  }

  abcd();

  // With async keyword we can use await keyword which things wait till pr is calculates. 
*/

