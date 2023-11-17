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
                <button>Registro</button>
            {/* </Link> */}
        </div>
    );
};