import { Route, Routes } from "react-router-dom"
import CoasterDetailsPage from "../pages/CoasterDetailsPage/CoasterDetailsPage"
import CoastersPage from "../pages/CoastersPage/CoastersPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NewCoasterPage from "../pages/NewCoasterPage/NewCoasterPage"
import SignupPage from "../pages/SignupPage/SignupPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes