import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10 rounded-4xl'>
      {props.users.map(function (val, idx) {
        return <RightCard key={idx} id={idx} color={val.color} img={val.img} tag={val.tag} intro={val.intro}/>
      })}
    </div>
  )
}

export default RightContent