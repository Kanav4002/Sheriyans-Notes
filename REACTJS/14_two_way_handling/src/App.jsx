import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('');

  const submitHandler = () => {
    console.log("Form submitted", title);
  } 

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitHandler();

        setTitle('');
      }}>
        <input 
          type="text" 
          placeholder='Enter your name:'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App