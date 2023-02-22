import { HTMLProps } from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from "../utils/getClasses";
const buttonTypes = {
    primary: "primary",
    secondary: "secondary",
};
export default function Button({ children, type, variant, ...rest }: IButtonProps) {
    return (
        <button
            className={getClasses([
                styles.button,
                styles[`button--${buttonTypes[variant]}`],
            ])}
            type={type === "submit" ? "submit" : "button"}
            {...rest}
        >
            {children}
        </button>
    );
}

function SelectButton({ children, ...rest }: ISelectProps) {
    return (
        <select
            className={getClasses([styles.button, styles.button__select])}
            {...rest}
        >
            {children}
        </select>
    );
}
export { SelectButton };

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    children: React.ReactNode,
    variant: 'primary' | 'secondary'
}

interface ISelectProps extends HTMLProps<HTMLSelectElement> {
    children: React.ReactNode,
}