import "../../style/banner.css";
import { Link} from 'react-router-dom';

export const Banner = () => {
    return (
        <div className="banner">
            <img src="/images/Banner.png" alt="" />
            <Link 
                className="navbar-brand" 
                to="/register"
            >
                <button>Registro</button>
            </Link>
        </div>
    );
};