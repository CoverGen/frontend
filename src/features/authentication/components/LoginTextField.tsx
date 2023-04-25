import classes from "./LoginTextField.module.css";

type LoginTextFieldType = {
    type: "email" | "password";
};

const LoginTextField = ({ type }: LoginTextFieldType) => {
    const placeholder = type === "email" ? "Username" : "Password";
    return (
        <input
            type={type}
            className={classes["user-input"]}
            placeholder={placeholder}
        />
    );
};

export default LoginTextField;
