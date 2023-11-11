import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../style/navbar.css"

export const Navbar = ({}) => {
    const logo = "fede_logo";

    return (
        <div>
            <div className="div-logo">
                <div className="logo">
                    <div className="div-img">
                        <img src={`/src/assets/${ logo }.png`} alt="" />
                    </div>
                    <div className="div-title">
                        Federación De Jóvenes Bautistas ELIM
                    </div>
                </div>
            </div>
            <div className="div-menu">
                <ul className="list-menu">
                    <Link 
                        className="navbar-brand" 
                        to="/"
                    >
                        <li>Inicio</li>
                    </Link>
                    <Link 
                        className="navbar-brand" 
                        to="info"
                    >
                        <li>Nosotros</li>
                    </Link>
                    <Link 
                        className="navbar-brand" 
                        to="camp"
                    >
                        <li>Campamento</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}


