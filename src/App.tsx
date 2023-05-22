import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes, LoginCheck } from "./services/AuthRoutes";
import Profile from "./pages/Profile";
// added routes and protected routes
function App() {
    return (
        <Routes>
            <Route element={<AuthRoutes />}>
                <Route path="/" element={<UserHome />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<LoginCheck />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
