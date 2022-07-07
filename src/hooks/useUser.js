import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../api/firebase/config"
// import { useMutation } from "react-query"
// import { signup, login, logout } from "../../api/firebase/auth";

export const useUser = () => {
    const [user, setUser] = useState(null)

    // const authMutation = (cb) => {
    //     return useMutation((authData) => cb(authData))
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else {
                setUser(null)
            }
        })

        return unsubscribe

    }, [user])

  return {
    user,
    setUser
  }
}
