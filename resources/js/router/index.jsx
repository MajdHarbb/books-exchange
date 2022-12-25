import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])