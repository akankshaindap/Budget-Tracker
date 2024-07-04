import { useFetcher } from 'react-router-dom'
import { useRef,useEffect} from 'react'
const AddExpense = ({ budget }) => {
     
     const fetcher = useFetcher()
     const isSubmitting = fetcher.state === 'submitting'           //trackingState of submiting form       
     const formRef = useRef()  //giving eference to form
     useEffect(() => {
          if (!isSubmitting) {     //checking if  form is submiting or not
               formRef.current.reset()   //focus on infput if is submiting true then clear form from UI
          }
     }     
    ,[isSubmitting] ) //if is submiting true changes back to notSubmiting after action performed
     return (
    <>
               <div className='form'>
                    <p>Add New {" "} 
                    <span>
                              {budget.length === 1 && `${budget.map((b) => b.name)}`}</span>
                         {" "}
                          Expenses</p>
            <div className='flex p-2'>
                 <fetcher.Form method='post'                     
                 ref={formRef}>    
                           <label htmlFor='Expense'
                         >
                           Expense Name
                      </label>
                      <br />
                      <input className='textBox '
                           name='expense'
                           placeholder='Eg.Groceries' /><br/>
                      
                      <label htmlFor='amount'  className=' font-bold text-lg'>Amount</label><br/>
                      <input type='number' placeholder='500 rs'
                      name='amount'
                           inputMode='decimal'
                           required
                           id='budgetAmount'
                           step='0.01'
                                   className='textBox' />
                              <div hidden={budget.length===1}>
                              <label htmlFor='newExpense'>Budget Category</label>
                              <select name='newExpense' id='newExpense' required className='textBox'>
                                   {
                                        budget.sort((a , b) => a.createdAt - b.created)
                                             .map((budget) => {
                                             return (
                                                  <option key={budget.id} value={budget.id}>{ budget.name}</option>
                                             )
                                        })
                                   }
                                   </select>
                                   </div>
                              <input type='hidden' name='_action' value='createExpense' />
                              

                      
                      <button className='bg-darkBlue text-white p-2 rounded-sm mt-2 text flex ' disabled={isSubmitting}>
                           {
                                isSubmitting ? <span>Submitting..</span> : (
                                     <>
                           <span>Create Expense</span>
                                     </>
                                )
                         }
                          
                         </button>
                      
                 
                 </fetcher.Form>
                 </div>
            </div>
            </>
  )
}

export default AddExpense
