import './bootstrap'
import '../css/app.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Landing from './Landing'
import Signup from './pages/Signup'
import Home from './pages/Auth/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Sellbook from './pages/Auth/Sellbook';
import Mybooks from './pages/Auth/Mybooks';
import PurchaseBook from './pages/Auth/PurchaseBook';
import Purchased from './pages/Auth/Purchased';
import Notifications from './pages/Auth/Notifications';
import EditProfile from './pages/Auth/EditProfile';
import ChangePassword from './pages/Auth/ChangePassword';
import EditPassword from './pages/Auth/EditPassword';
function app() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/sell-books' element={<Sellbook />} />
          <Route path='/my-books' element={<Mybooks />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/purchased' element={<Purchased />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/change-password' element={<EditPassword />} />
          <Route path="/purchase-book/:bookId" element={<PurchaseBook />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default app




