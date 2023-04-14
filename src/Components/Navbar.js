import { NavLink } from "react-router-dom"


function Navbar (){
    return(
        <div>
            <NavLink to="/" exact > Author </NavLink>
            <NavLink to="/Books" exact > Books </NavLink>
            <NavLink to="/BookAdd" exact > Add Book </NavLink>
        </div>
    )
}

export default Navbar