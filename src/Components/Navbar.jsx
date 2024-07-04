import React from 'react'
import { NavLink,Form } from 'react-router-dom'
import logo from '../assets/logo.png';
import { TrashIcon } from '@heroicons/react/20/solid';
const Navbar = ({username}) => {
 
  return (
  
    <div className='flex justify-between p-2 bg-lightBlue xs:w-full'>
      <div className=' flex  '>
        <NavLink to='/'>
        <img src={logo}  className='inline h-7 m-1' />
        <span className='text-xl font-serif text-blue'>BudgetBuddy</span>
        </NavLink>
      </div>
      
      {username && (
        <Form
          method='post'
          action='logout'
          onSubmit={(e)=>{
            if(!confirm('Delete User and All Data'))
      e.preventDefault()}}>
          <button type='submit' className='bg-red-700 p-2 mr-2 rounded-md flex justify-between text-white '>
          <TrashIcon height={23} />
        
           
          </button>
          
        </Form>
      )}
    </div>
  )
}

export default Navbar
