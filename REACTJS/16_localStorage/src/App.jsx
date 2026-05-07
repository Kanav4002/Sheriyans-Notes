import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user', 'kanav')
  // localStorage.setItem('age', 21);

  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age');
  // localStorage.removeItem('user');

  // const user = {
  //   username: 'Kanav',
  //   age: 21,
  //   city: 'Zirakpur'
  // };
  // in locaStorage data is stored in string format only so we convert the object into a string using JSON.stringfy() method.
  // localStorage.setItem('user', JSON.stringify(user));
  
  // here the user is in string format so we can convert it back to its original state by JSON.parse() method.
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    // <div>{user}, {age}</div>
    <div>

    </div>
  )
}

export default App