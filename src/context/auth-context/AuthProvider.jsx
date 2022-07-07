import { createContext, useContext } from "react";
// import { useQuery, useQueryClient } from "react-query";
import { signup, login, logout } from "../../api/firebase/auth";
import { useUser } from "../../hooks/useUser"


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	// const client = useQueryClient()

	// const { isError, isLoading, error, data } = useQuery(
	// 	"checkUser",
	// 	checkAuthState,
	// 	{ retry: false }
	// );

	// console.log(data)

	const {user, setUser} = useUser()

	const logoutUser = () => {
		console.log('running...')
		logout();
		setUser(null)
		// client.invalidateQueries('checkUser')
	};

	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logoutUser,
				setUser,
				user,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
