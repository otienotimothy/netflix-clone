import { createContext, useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Navigate } from "react-router-dom";
import { signup, login, logout, checkAuthState } from "../../api/firebase/auth";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const client = useQueryClient()

	const { isError, isLoading, error, data } = useQuery(
		"checkUser",
		checkAuthState,
		{ retry: false }
	);

	console.log(data)

	const logoutUser = () => {
		console.log('running...')
		logout();
		client.invalidateQueries('checkUser')
	};

	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logoutUser,
				user: data,
				loading: isLoading
			}}>
			{children}
		</AuthContext.Provider>
	);
};
