import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"

export const useUser = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((user) => {
            if(user){
                setUser(user)
            }else {
                setUser(null)
            }
        })

        return unsubscribe

    }, [user])

    const loginUser = (email, password) => {

    }

  return {
    user
  }
}
