import React, { useState } from 'react'

const App = () => {
 
  /*
    Variables created are:
    1. a: which is read only
    2. setA: which is write only
  */

  // 1.
  /*
    const [age, setAge] = useState('20');
    const [username, setUsername] = useState('Kannan');
    const [users, setUsers] = useState([2111, 2112, 2130, 2151]);

    function onClicked() {
      setAge(21);
      setUsername('Kanav');
      setUsers([1, 2, 3, 4]);
    }
  */
  /*
    <div>
      <h1>My name is {username} and i am {age} years old and total {users} users.</h1>
      <button onClick={onClicked}>Click Me</button>
    </div>
  */

  // 2.
  /*
    const [num, setNum] = useState(0);

    function increase() { // val
      // setNum(prev => prev + val);
      setNum(num + 1);
      // console.log('increased');
    }
    

    function decrease() { // val
      // setNum(prev => prev - val);
      setNum(num - 1);
      // console.log('decreased');
    }

    function increaseByTen() {
      setNum(num + 10);
    }

    function decreaseByTen() {
      setNum(num - 10);
    }
  */
  /*
    <h1>{num}</h1>
    <button onClick={() => increase(1)}>increase</button>
    <button onClick={() => increase(10)}>increase by 10</button>
    <button onClick={() => decrease(1)}>decrease</button>
    <button onClick={() => decrease(10)}>decrease by 10</button>

    <button onClick={increase}>increase</button>
    <button onClick={increaseByTen}>increase by 10</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={decreaseByTen}>decrease by 10</button>
  */

  // const [num, setNum] = useState({user: 'Kanav', age: 21});
  const [num, setNum] = useState(0);
  // const [num, setNum] = useState([10, 20, 30, 40, 50]);

  const btnClicked = () => {
    // const newNum = {...num};
    // newNum.user = 'Piyush';
    // newNum.age = 20;
    // setNum(newNum);
    // setNum(prev => ({...prev, age: 22}));
    // console.log(newNum);

    // batch update
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));

    // const newNum = [...num];
    // newNum.push(60);
    // console.log(newNum);
    // setNum(newNum);

    // console.log(num.user, num.age);
    // console.log('Btn clicked: ', num);
    // setNum(20); // this works asynchronously
    // console.log('Btn clicked: ', num);
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App