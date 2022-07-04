import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context/AuthProvider";

export const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();

	console.log(loading)
	console.log(user)

	if (loading) {
		return (
			<h1 className="absolute top-1/2 left-1/3 text-2xl text-white">
				{" "}
				Loading...{" "}
			</h1>
		);
	}

	if (!loading && !user) {
		return <Navigate to="/login" />;
	} else {
		return children;
	}
};
