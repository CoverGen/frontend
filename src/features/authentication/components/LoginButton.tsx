import Button from "../../../components/Button";
import type { ButtonHTMLAttributes } from "react";

interface ILoginButtonPropsType
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => Promise<void>;
}

const LoginButton = ({ onClick }: ILoginButtonPropsType) => {
    return (
        <div onClick={onClick}>
            <Button title="Login" />
        </div>
    );
};

export default LoginButton;
