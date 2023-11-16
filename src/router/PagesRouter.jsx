import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { Home, Info, Camp, Login } from '../pages';
import { Footer } from '../ui/footer';
import { Register } from '../pages/Register';

export const PageRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<Info />} />
                    <Route path="camp" element={<Camp />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                                    
                    <Route path="/" element={<Navigate to="/home" />} />

                </Routes>
            </div>
            <Footer />
        </>
    )
};