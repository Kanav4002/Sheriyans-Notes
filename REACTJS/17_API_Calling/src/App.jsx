import React from 'react'

const App = () => {
  function getData() {
    console.log('Data received');
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App