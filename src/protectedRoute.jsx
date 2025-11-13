import React from 'react'
import { useContexts } from './config/contextApp';
import { Navigate } from 'react-router-dom';





 export default function ProtectedRoute({ children }) {
    const {user, setUser}=useContexts()
//   const [user, loading] = useAuthState(auth);



  return user ? children : <Navigate to="/login"/>;
}

