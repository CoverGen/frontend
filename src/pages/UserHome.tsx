// added user home page to test the protected routes
import { useNavigate } from "react-router-dom";

const UserHome = () => {
    const pageStyle = {
        fontSize: "1.5em",
    };
    const loggedEmail =
        localStorage.getItem("email") ||
        "- you are not supposed to enter this page -";
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };
    const goToProfile = () => {
        navigate("/profile");
    };
    return (
        <div style={pageStyle}>
            <h1>User Home Page</h1>
            <h2>Logged as {loggedEmail}</h2>
            <button onClick={goToProfile}>PROFILE</button>
            <br />
            <br />
            <button onClick={logout}>LOGOUT</button>
            <p>Clear local storage.</p>
        </div>
    );
};

export default UserHome;
