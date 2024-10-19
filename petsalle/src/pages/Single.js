import React from 'react'
import SinglePet from '../components/SinglePet'
import Customer from '../components/categorypage/Customer'
import NewPet from '../components/categorypage/NewPet'

const Single = () => {
  return (
    <div>
    <div className='px-24 pt-20' >
        <SinglePet/>
    </div>
    <div className='px-24 pt-5' >
        <Customer/>
    </div>
    <div className='px-24 pt-5' >
        <NewPet/>
    </div>
    </div>
  )
}

export default Single