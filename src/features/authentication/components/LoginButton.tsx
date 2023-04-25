import Button from "../../../components/Button";

type LoginButtonPropsType = {
    onClick: () => void;
};

const LoginButton = ({ onClick }: LoginButtonPropsType) => {
    return (
        <div onClick={onClick}>
            <Button title="Login" />
        </div>
    );
};

export default LoginButton;
