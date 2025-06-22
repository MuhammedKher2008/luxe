import { Link } from "react-router-dom"



const Navbar = () => {
    return(
        <nav>
            <Link to="/" >home</Link>
            <Link to="/service" >service</Link>
            <Link to="/contact" >contact</Link>
        </nav>
    )
}


export default Navbar ; 