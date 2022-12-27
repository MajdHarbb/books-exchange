import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Auth/Home'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path:'register',
        element: <Signup />
    },
    {
        path:'home',
        element: <Home />
    }
])