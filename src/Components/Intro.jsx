import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/16/solid'
import main from '../assets/main.jpg'
const Intro = () => {
  return (
    <>
      <div className='mt-15 ml-12 lg:flex xs:flex-wrap' >
        <div className='mt-28 ml-18 p-3 '>
            <h1 className=' font-bold text-7xl'>Take Control of <span className='text-lightGreen '>Your Money</span> </h1>
        <p className='text-2xl'>Personal budgeting is the secret to financial freedom. </p>
          <p className='text-xl'>Start your journey today.</p>
          
       
            <Form
            
            method='post'
       
               >
            <input placeholder='Enter Your Name...' name="username" required aria-label='username' autoComplete='given-name' className='border border-black w-60 px-2 flex py-2 mt-2 ' />
            <input type='hidden' name='_action' value="newUser"></input>
            <button type='submit' className='bg-darkBlue text-white p-2 rounded-sm mt-2 text flex'>Create Account
              <UserPlusIcon height={22} className='ml-2 '/>
            </button>
          </Form>
          </div>
      
        <div >
            <img src={main} className='h-100' /> 
            </div>
        </div>
    </>
  )
}

export default Intro
