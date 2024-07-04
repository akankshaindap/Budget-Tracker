export const wait =()=>new Promise(res=>setTimeout(res,Math.random() *2000))
const generateColor = () => {
     const existingBudgetLength = fetchData("budget")?.length ?? 0;
     return `${existingBudgetLength * 64} 46% 62%`
}
export const  fetchData = (key) => {
     return JSON.parse(localStorage.getItem(key))
}
export const createBudget = ({ name, amount }) => {    
     const newItem = {
          id: crypto.randomUUID(),
          name : name,
          createdAt :Date.now(),
          amount: +amount,
          color:generateColor()
     }
     const existingBudget = fetchData("budget") ?? []
     return localStorage.setItem("budget",
          JSON.stringify([...existingBudget,newItem    ])
     )
}
export const deleteItem = ({ key }) => {
     return localStorage.removeItem(key)
}
export const createExpense = ({ name, amount ,budgetId}) => {    
     const newItem = {
          id: crypto.randomUUID(),
          name : name,
          createdAt :Date.now(),
          amount: +amount,
          budgetId:budgetId

     }
     const existingExpenses = fetchData("expense") ?? []
     return localStorage.setItem("expense",
          JSON.stringify([...existingExpenses,newItem    ])
     )
}