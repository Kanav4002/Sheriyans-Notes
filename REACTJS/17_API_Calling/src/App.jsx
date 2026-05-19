import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  /*
    async function getData() {
      // console.log('Data received');
      // till the api isn't fetched, tabh tak wait kro
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res);
    }
  */

  /*
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
      const data = await res.json();
      console.log(data);
    }
  */

  const [data, setData] = useState([])
  
  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data);
    console.log(res.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx) {
          return <h3 key={idx}>Hello, {idx}, author: {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App