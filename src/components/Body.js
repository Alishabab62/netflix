import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import ViewPage from './ViewPage'



const Body = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/view/:id",
          element:<ViewPage/>
        }
    ])


  return (
    <div><RouterProvider router={router}/></div>
  )
}

export default Body