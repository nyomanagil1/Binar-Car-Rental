import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';
import Cars from './pages/Cars/Cars';
import Dashboard from './pages/Dashboard/Dashboard';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Landing />} />
        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cars" element={<Cars />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
