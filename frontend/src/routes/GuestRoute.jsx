import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from "react-router-dom"
const GuestRoute = ({ location, children }) => {
    const isAuth = useSelector((state)=>state.auth.isAuth)
  return isAuth ? (
		<Navigate to="/rooms" state={{ from: location }} />
	) : (
		children
	);
}

export default GuestRoute