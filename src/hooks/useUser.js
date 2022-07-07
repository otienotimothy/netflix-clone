import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../api/firebase/config"

export const useUser = () => {
    const [user, setUser] = useState(null)

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
