import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { Home, Info, Camp, Login } from '../pages';

export const PageRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="info" element={<Info />} />
                    <Route path="camp" element={<Camp />} />
                    <Route path="login" element={<Login />} />
                                    
                    <Route path="/" element={<Navigate to="/home" />} />

                </Routes>
            </div>
        </>
    )
};