import React from 'react'

const App = () => {

  // function btnClicked() {
  //   console.log('button is clicked');
  // }

  // function mouseEnter() {}

  // function onChangedInput(val) {
  //   console.log(val);
  // }

  const wheelScrolling = (elem) => {
    // console.log('Page scrolling at speed: ', elem); 
    if (elem > 0) console.log('Down scrolling speed: ', elem);
    else console.log('Up scrolling speed: ', elem);
  }

  return (
    <div>
      {/* <h1>Hello Guys</h1>
      <button onClick={btnClicked}>change user</button>
    s  <button onClick={btnClicked}>explore this</button>
      <textarea onMouseEnter={function () { console.log('mouse entered'); }} name="" id=""></textarea>
      <p onMouseEnter={() => { console.log('This is a paragrah') }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, architecto sit! Molestiae laboriosam non debitis soluta ducimus doloremque eius reprehenderit?</p> */}
      
      {/* <input onChange={(event) => {
        onChangedInput(event.target.value);
        // console.log(event.target.value);
        // console.log('input clicked');
      }} type="text" placeholder='Enter name' /> */}

      {/* <div onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }} className='box'>
      </div> */}

      <div onWheel={(elem) => {
          // console.log(elem.deltaY)
          wheelScrolling(elem.deltaY);
        }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>
    </div>
  )
}

export default App