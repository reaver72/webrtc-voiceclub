import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const SemiProtectedRoute = ({ location, children }) => {
  
    const isAuth = useSelector((state)=>state.auth.isAuth)
	const isActivated = useSelector((state) => state.auth.user.isActivated);
  
  return (
      !isAuth? <Navigate to="/" state={{ from: location }} /> 
          : isAuth && isActivated ? <Navigate to="/rooms" state={{from:location}}/> : children
  )
}

export default SemiProtectedRoute