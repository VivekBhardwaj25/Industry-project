import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUS/About.jsx'
import Contacts from './components/Contacts/Contact.jsx'
import Product from './components/Product/Product.jsx'
import Projects from './components/Projects/Projects.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contacts/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
