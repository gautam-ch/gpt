import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/homepage';
import Dashboard from './routes/dashboard/dashboard';
import ChatPage from './routes/chatpage/chatpage';
import SignIn from './routes/signInPage/signInPage';
import SignUp from './routes/signUpPage/signUpPage';
import Layout from './layout/rootlayout/rootlayout.jsx'
import DashboardLayout from './layout/dashboardlayout/dashboardlayout.jsx'

const router = createBrowserRouter([
     {
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/sign-in/*',
          element:<SignIn/>
        },
        {
          path:'/sign-up/*',
          element:<SignUp/>
        },
        {
           element:<DashboardLayout/>,
           children:[
            {path:'/dashboard',element:<Dashboard/>},
            {path:'/dashboard/chats/:id',element:<ChatPage/>}
          ]
        }
      ] 
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
