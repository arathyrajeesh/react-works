import { Link } from "react-router-dom"


const Home = () => {
    return(

    <div>
        <h1>Welcome to home</h1>
        <Link to={'/about'}>Link to About</Link>
    </div>
    )

}

export default Home