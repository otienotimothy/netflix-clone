import { createContext, useContext } from "react"
import { signup, login, logout, checkAuthState } from "../../api/firebase/auth";
import { useQuery } from 'react-query';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const { isError, isLoading, error, data } = useQuery('checkUser', checkAuthState, {retry: false})

	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logout,
				user: data,
				loading: isLoading
			}}>
			{children}
		</AuthContext.Provider>
	);
};
