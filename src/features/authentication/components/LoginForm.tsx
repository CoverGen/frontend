import { useState } from "react";

import LoginButton from "./LoginButton";
import LoginTextField from "./LoginTextField";
import classes from "./LoginForm.module.css";
import logo from "../../../assets/Logo.png";
import { AuthServices } from "../services";
import type { ILogin } from "../models/Login";
import { AxiosError } from "axios";

const LoginForm = () => {
    const [data, setData] = useState<ILogin>({ email: "", password: "" });

    const onLogin = async () => {
        const response = await AuthServices.logIn(data);
        if (response instanceof AxiosError) return;
        // TODO: Handle redirect to home page with router here
    };

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className={classes["login-card"]}>
            <img src={logo} />
            <p className={classes["login-title"]}>Login</p>
            <form className={classes["login-form"]}>
                <LoginTextField
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeField}
                />
                <LoginTextField
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={onChangeField}
                />
                <LoginButton onClick={onLogin} />
            </form>
            <p className={classes["help-text"]}>
                Do you forget your password? <a href="#">Click here to reset</a>
            </p>
        </div>
    );
};

export default LoginForm;
