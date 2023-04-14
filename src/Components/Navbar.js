import { NavLink } from "react-router-dom"


function Navbar (){
    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
      };

    return(
        <div className="header">
            <NavLink to="/" exact style={linkStyles} > Author </NavLink>
            <NavLink to="/Books" exact style={linkStyles} > Books </NavLink>
            <NavLink to="/BookAdd" exact style={linkStyles} > Add Book </NavLink>
        </div>
    )
}

export default Navbar