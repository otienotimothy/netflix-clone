import { async } from '@firebase/util'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './config'

export const signup = async (email, password) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user
    } catch (error) {
        return error.message
    }
}

export const login = async (email, password) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    } catch (error) {
        return error.message   
    }
}

export const logout = async () => {
    await signOut(auth)
}