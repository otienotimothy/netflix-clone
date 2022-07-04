import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context/AuthProvider";

export const HomeRedirect = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <h1 className="absolute top-1/2 left-1/3 text-2xl text-white"> Loading... </h1>;
	} 
	
	if (user && !loading) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};
