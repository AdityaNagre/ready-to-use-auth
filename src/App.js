import './App.css';
import React,{useState, useContext} from 'react'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { UserAuthContextProvider } from './Context/UserAuthContext';
import AfterAuth from './Components/AfterAuth';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <>

    <BrowserRouter>
    <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/authorized" element={<ProtectedRoute><AfterAuth/></ProtectedRoute>} />
        </Routes>
        </UserAuthContextProvider>
    </BrowserRouter>

    </>
  );
}

export default App;