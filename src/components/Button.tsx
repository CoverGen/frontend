import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string;
};

const Button = ({ title }: ButtonPropsType) => {
    return (
        <div className={classes.button}>
            <p className={classes["button-text"]}>{title}</p>
        </div>
    );
};

export default Button;
