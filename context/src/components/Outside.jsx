import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Outside = () => {
    const {loggedIn} = useContext(AuthContext)
    console.log(loggedIn)
    return (
        <div>
        hiii
        </div>
    )
}
export default Outside