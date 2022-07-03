import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context/AuthProvider";

export const HomeRedirect = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <h1 className="text-3xl text-white"> Loading... </h1>;
	} else if (user) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};
