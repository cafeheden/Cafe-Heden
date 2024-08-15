import React from 'react';
import { Route, Routes} from 'react-router-dom';

// Importing Pages
import Home from './pages/Home'
import AdminHomePage from './pages/Admin Side/AdminHomePage'
import AdminLogin from './pages/Admin Side/AdminLogin'
import ManageMenu from './pages/Admin Side/ManageMenu'
import ManageOrders from './pages/Admin Side/ManageOrders'
import Billing from './pages/Admin Side/Billing'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path='/admin/home' element={<ProtectedRoute><AdminHomePage /></ProtectedRoute>} />
      <Route path='/admin/manage-menu' element={<ProtectedRoute><ManageMenu /></ProtectedRoute>} />
      <Route path='/admin/manage-orders' element={<ProtectedRoute><ManageOrders /></ProtectedRoute>} />
      <Route path='/admin/billing' element={<ProtectedRoute><Billing /></ProtectedRoute>} />
    </Routes>
  )
}

export default App;