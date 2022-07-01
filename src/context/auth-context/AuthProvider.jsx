import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signup, login, logout } from "../../api/firebase/auth";
import { auth } from "../../api/firebase/config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
			if (signedInUser) {
				setUser(signedInUser);
			} else {
				setUser(null);
			}
			setLoading(false)
		});

		return unsubscribe;
	}, [user]);


	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logout,
				user
			}}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
