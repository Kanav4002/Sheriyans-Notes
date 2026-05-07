import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react';

const getInitialNotes = () => {
  const stored = localStorage.getItem('notes');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse notes from localStorage', e);
    return [];
  }
}

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState(getInitialNotes);

  // useEffect(() => {
  //   const stored = localStorage.getItem('notes');
  //   if (stored) {
  //     try {
  //       setTask(JSON.parse(stored));
  //     } catch (e) {
  //       console.error('Failed to parse notes from localStorage', e);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task));
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('Form submitted');
    // console.log(title);
    // console.log(details);

    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    // console.log(copyTask[idx]);
    // console.log('Note deleted');
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
        }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10' action=""
        >

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* First input for heading */}
        <input 
          type="text" 
          placeholder='Enter Notes Heading: '
          className='px-5 w-full py-2 border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log('Hello')
          }}
        />

        {/* Detailed input */}
        <textarea 
          type="text" 
          placeholder='Write Details: '
          className='px-5 w-full h-32 py-2 border-2 outline-none rounded font-medium'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button 
          className='bg-white w-full text-black px-5 py-2 rounded outline-none font-medium active:bg-gray-300 active:scale-95 hover:cursor-pointer'
          >Add Notes
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          
          {task.map(function(elem, idx) {

            return <div key={idx} 
              className="relative h-52 bg-cover w-40 rounded-2xl text-black py-10 px-5 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
             
              <h2 onClick={() => {
                deleteNote(idx)
              }} className='absolute cursor-pointer active:scale-125 top-5 right-0 bg-red-500 p-1 text-xs rounded-full'><X size={16} strokeWidth={2.75} color='#fff'/></h2>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-1 text-xs leading-tight font-semibold text-gray-700'>{elem.details}</p>

            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App;