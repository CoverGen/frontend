import classes from "./LoginTextField.module.css";
import type { InputHTMLAttributes } from "react";

const LoginTextField = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const placeholder = props.type === "email" ? "Username" : "Password";
    return (
        <input
            type={props.type}
            className={classes["user-input"]}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default LoginTextField;
