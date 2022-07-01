import { Navigate } from 'react-router-dom'
import { useAuth } from "../context/auth-context/AuthProvider"

export const PrivateRoute = ({children}) => {

    const { user } = useAuth()

    console.log(user)

    if(!user){
        return <Navigate to='/login' />
    }

    return children
}
