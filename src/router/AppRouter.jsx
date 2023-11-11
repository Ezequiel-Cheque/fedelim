import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PageRoutes } from "./PagesRouter";
import { Dashboard } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={
                <PublicRoute>
                    <PageRoutes />
                </PublicRoute>
            }/>

            <Route path="dashboard/*" element={
              <PrivateRoute>
                <Route path="dashboard" element={<Dashboard />} />
              </PrivateRoute>
            } />
            
        </Routes>
    )
};