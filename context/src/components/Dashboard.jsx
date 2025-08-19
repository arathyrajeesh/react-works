import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



const Dashboard = () => {

    const { loggedIn } = useContext(AuthContext)


    return (
        <div>

        {loggedIn ? "Dashboard is available" : "Unauthorized route - 403"}
        
        </div>
    )
}
export default Dashboard