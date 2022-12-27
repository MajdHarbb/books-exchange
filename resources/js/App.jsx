import './bootstrap'
import '../css/app.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Login'
import { router } from './router/index.jsx'
import Navbar from './components/Navbar'
function app() {
  return (
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default app




