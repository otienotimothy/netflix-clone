import { createContext, useContext } from "react";
import { signup, login, logout } from "../../api/firebase/auth";
import { useUser } from "../../hooks/useUser";

import "../../api/firebase/db"


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const {user, loading, setUser} = useUser()

	const logoutUser = () => {
		console.log('running...')
		logout();
		setUser(null)
	};

	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logoutUser,
				setUser,
				user,
				loading
			}}>
			{children}
		</AuthContext.Provider>
	);
};
