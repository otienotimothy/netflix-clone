import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../api/firebase/config"

export const useUser = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else {
                setUser(null)
            }
            setLoading(false)
        })

        return unsubscribe

    }, [user])

  return {
    user,
    loading,
    setUser
  }
}
