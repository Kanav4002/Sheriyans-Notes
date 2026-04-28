import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page2Content = () => {
  return (
    <div className='flex items-center gap-20 pb-16 pt-6 px-18 h-[90vh]'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page2Content