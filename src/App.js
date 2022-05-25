import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';
import AddNewCar from './pages/AddNewCar/AddNewCar';
import CarDetail from './pages/CarDetail/CarDetail';
import Cars from './pages/Cars/Cars';
import CarsCustomer from './pages/CarsCustomer/CarsCustomer';
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
        <Route path="cars" element={<CarsCustomer />} />
        <Route path="detail" element={<CarDetail />} />
        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="list-car" element={<Cars />} />
          <Route path="add-car" element={<AddNewCar />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
