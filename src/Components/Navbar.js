import { NavLink } from "react-router-dom"


function Navbar (){
    return(
        <div>
            <NavLink to="/" exact > Home </NavLink>
            <NavLink to="/Author" exact > Author </NavLink>
        </div>
    )
}

export default Navbar