import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { auth } from "./config";

export const signup = (formData) => {
	const { email, password } = formData;
	return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (formData) => {
	const { email, password } = formData;
	return signInWithEmailAndPassword(auth, email, password);
};

export const checkAuthState = () => {
	return new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => {
			console.log('being called...')
			if (user) {
				resolve(user)
			} else {
				reject(null)
			}
		})
	})

}

export const logout = () => {
	return signOut(auth);
};
