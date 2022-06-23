import { createContext, useContext, useEffect, useState} from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { signup, login, logout } from "../../api/firebase/auth";
import { auth } from "../../api/firebase/config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const [signInUser, setSignInuser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user){
                setSignInuser(user)
            }else {
				setSignInuser(null)
			}
        })

		return unsubscribe
    })


	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logout,
				signInUser
			}}>
			{children}
		</AuthContext.Provider>
	);
};
