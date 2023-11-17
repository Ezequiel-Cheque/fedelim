import "../../style/banner.css";
import { Link} from 'react-router-dom';
import banner from "../../../images/Banner.png";

export const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
            {/* <Link 
                className="navbar-brand" 
                to="/register"
            > */}
            {/* </Link> */}
            <a href="https://forms.gle/jCN12BA3W6nkANLE6" target="_blank">
                <button>Registro</button>
            </a>
        </div>
    );
};