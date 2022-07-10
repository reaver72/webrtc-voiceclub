import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ location, children }) => {
	const isAuth = useSelector((state)=>state.auth.isAuth);
	const isActivated = useSelector((state)=>state.auth.user.isActivated)
	return true? (
		children
	) : !isAuth ? (
		<Navigate to="/" state={{ from: location }} />
	) : (
		<Navigate to="/activate" state={{ from: location }} />
	);
};

export default ProtectedRoute;
