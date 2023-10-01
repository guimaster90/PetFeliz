import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navBar">
        <h2>
            <Link to={'/'}>PetFeliz</Link>
        </h2>
        <ul>
            <li> 
                <Link to={"/"}>Home</Link> 
            </li>
            <li> 
                <Link to={"/adocao"} className="new-btn">
                    Adocao
                </Link> 
            </li>
        </ul>
    </nav>
  )
}

export default NavBar