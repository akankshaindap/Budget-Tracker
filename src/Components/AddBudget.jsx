import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'
import { CurrencyRupeeIcon } from '@heroicons/react/20/solid'

const AddBudget = () => {
     const fetcher = useFetcher();
     const isSubmitting = fetcher.state === 'submitting'           //trackingState of submiting form       
     const formRef = useRef()  //giving eference to form
     useEffect(() => {
          if (!isSubmitting) {     //checking if  form is submiting or not
               formRef.current.reset()   //focus on infput if is submiting true then clear form from UI
          }
     }
          , [isSubmitting]) //if is submiting true changes back to notSubmiting after action performed
     return (  
          <div className='form'>
               <p className='text-2xl  text-center text-button'>Create Budget</p>
               <div className='flex p-2'>
                    <fetcher.Form method='post'
                         ref={formRef}>
                         <label htmlFor='budget'
                              >
                              Budget Name
                         </label>
                         <br />
                         <input className='textBox'
                              name='budget'
                              placeholder='Eg.Groceries' /><br />

                         <label htmlFor='amount' className=' font-bold text-lg'>Amount</label><br />
                         <input type='number'
                              placeholder='500 rs'
                              name='amount'
                              inputMode='decimal'
                              required
                              id='budgetAmount'
                              step="0.01"
                              className='textBox' />
                         <input type='hidden' name='_action' value='createBudget' />

                         <button disabled={isSubmitting}>
                              {
                                   isSubmitting ? <span>Submitting..</span> : (
                                        <>
                                             <CurrencyRupeeIcon width={22} />
                                             <span>Create Budget</span>
                                        </>
                                   )
                              }

                         </button>


                    </fetcher.Form>
               </div>
          </div>
     )
}

export default AddBudget
