import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'


//paginas
import  Home  from "./routes/Home.jsx"
import  Adocao  from './routes/Adocao.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/adocao",
        element: <Adocao/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
