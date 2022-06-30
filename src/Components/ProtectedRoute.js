import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

export default function ProtectedRoute({children}) {
    let {User}=useUserAuth();
    if(!User){
       return <Navigate to="/" />
    }
    return children
}
