import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: 'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag: 'Satisfied', 
      color: 'blue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: 'Prime customers, that have access to bank credit and are not satisfied with the current product',
      tag: 'Underserved',
      color: 'purple'
    },
    {
      img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: 'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag: 'Underbanked', 
      color: 'crimson'
    },
  ]

  return (
    <div className=''>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App