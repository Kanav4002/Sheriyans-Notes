import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-20 pb-16 pt-6 px-18 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content