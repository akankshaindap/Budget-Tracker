import React from 'react'
import { createBudget, fetchData,wait,createExpense } from '../helper'
import { useLoaderData } from 'react-router-dom'
import Intro from '../Components/Intro'
import { toast } from 'react-toastify'
import AddBudget from '../Components/AddBudget'
import AddExpense from '../Components/AddExpense'
export const dashboardLoader = ()=> {
  const username = fetchData("username")
  const budget = fetchData("budget")

     return {username,budget}
}
export async function dashboardAction({ request }) {
  await wait();
  const data = await request.formData();
  const { _action, ...value } = Object.fromEntries(data)
  console.log(_action)
  if (_action==='newUser') {
    try {
   
      localStorage.setItem("username", JSON.stringify(value.username))
      return toast.success(`Welcome ${value.username}`)
    }
    catch (e) {
      throw new Error("There was some Problem in creating your account")
    }
  }
  if (_action === 'createExpense') {
    try {
      createExpense({
        name: value.expense,
        amount: value.amount,
        budgetId:value.newExpense
       
      })
      return toast.success(`Expense ${value.expense} created`)

    }
    catch (e) {
      throw new Error("There was some Problem in creating your Expense")
    }
  }
  if (_action === 'createBudget') {
    try {
      createBudget({
        name: value.budget,
        amount:value.amount
      })
      return toast.success(`Created Budget `)

    }
    catch (e) {
      throw new Error("There was some Problem in creating your Budget")
    }
  }

}


const Dashboard = () => {
  const { username, budget } =useLoaderData()
  return (
    <div>
      {username ?
        (<div className='p-2 mt-5 ml-5'><p className='sm:text-5xl text-3xl flex justify-center font-semibold'>
          Welcome back , 
          <span className='text-green'>
             {username}
      </span>
      </p>
          {budget && budget.length > 0 ? (
            <div className='sm:flex flex-wrap gap-12 justify-around m-8'>
            <AddBudget />
              <AddExpense budget={budget} />
              </div>):
          (
            <div className='m-4'>
            <p className='text-xl ml-2 cursor-w-resize'>
                  Personal budgeting is secret to financial freedom</p>
                <p className='ml-2'>
                  Create a budget to get started!
                  
              </p>
              <AddBudget />
              </div>
          )
         }
        
      </div>)
        : (<Intro />)}
    </div>
  )
}

export default Dashboard
