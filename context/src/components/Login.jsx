import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const Login = () => {

    const { setIsLoggedIn, loggedIn } = useContext(AuthContext)

    return (

        <div>
            <button onClick={()=> setIsLoggedIn(prev=> !prev) }>{loggedIn ? 'logout' : 'login'}</button>
        </div>

    )
}
export default Login