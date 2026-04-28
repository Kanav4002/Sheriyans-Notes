import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full w-1/2 h-[90]'>
      <div className='p-6'>
        <h3 className='text-5xl font-bold mb-7'>E-com market is expected to exceed $300B in 2027</h3>
        <div className='flex gap-2 text-4xl'>
          <i className="ri-flashlight-line"></i>
          <p className='text-2xl w-[80%] font-medium text-black'>
          In india MSME contribution to eTailing sales is expected to grow between 60-70% annually to reach USD50Bn by FY 2027
          </p>
        </div>
      </div>
      <div className='flex gap-10 p-6'>
        <div className='bg-blue-500 h-60 w-65 rounded-4xl p-5 text-white flex flex-col justify-end relative'>
          <div className="absolute top-10 right-12 w-30 h-30 rounded-full translate-x-1/2 -translate-y-1/2"><i class="ri-arrow-right-up-line"></i></div>
          <h1 className='text-5xl font-bold'>26.7%</h1>
          <p className='mb-5 mt-3'>Expected annual growth of eCom market size</p>
        </div>
        <div className='bg-green-500 h-60 w-65 rounded-4xl p-5 text-black flex flex-col justify-end'>
          <h1 className='text-5xl font-bold'>25%</h1>
          <p className='mb-5 mt-3'>E-com share of the organized retail in 2020</p>
        </div>
      </div>
    </div>
  )
}

export default LeftContent