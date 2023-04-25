import LoginButton from "./LoginButton";
import LoginTextField from "./LoginTextField";
import classes from "./LoginForm.module.css";
import logo from "../../../assets/Logo.png";

const LoginForm = () => {
    return (
        <div className={classes["login-card"]}>
            <img src={logo} />
            <p className={classes["login-title"]}>Login</p>
            <form className={classes["login-form"]}>
                <LoginTextField type="email" />
                <LoginTextField type="password" />
                <LoginButton
                    onClick={() => {
                        console.log("Login...");
                    }}
                />
            </form>
            <p className={classes["help-text"]}>
                Do you forget your password? <a href="#">Click here to reset</a>
            </p>
        </div>
    );
};

export default LoginForm;
