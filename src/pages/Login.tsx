import LoginForm from "../features/authentication/components/LoginForm";
import classes from "./Login.module.css";
import logo from "../assets/Logo.png";

const Login = () => {
    return (
        <div className={classes.container}>
            <div className={classes.covergen}>
                <img src={logo} />
                <p>CoverGen</p>
            </div>
            <div className={classes["inner-container"]}>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
