// added profile page to test the protected routes
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const pageStyle = {
        fontSize: "1.5em",
    };
    const loggedEmail =
        localStorage.getItem("email") ||
        "- you are not supposed to enter this page -";
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };
    return (
        <div style={pageStyle}>
            <h1>Profile Page</h1>
            <h2>Logged as {loggedEmail}</h2>
            <button onClick={goToHome}>USER HOME</button>
        </div>
    );
};

export default Profile;
