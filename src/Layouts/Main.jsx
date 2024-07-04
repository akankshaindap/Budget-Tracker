import React from 'react'
import { Outlet,useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'
import Navbar from '../Components/Navbar'
export const mainLoaader = () => {
     const username = fetchData("username")
     return {username}
     
}
const Main = () => {
     const { username }  = useLoaderData()
  return (
       <>
            
            <Navbar username={username}/>
            <Outlet/>
       </>
  )
}

export default Main