import { cn } from '../../helper';
import styles from './button.module.scss'

export interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
}

export const Button = ({ name, onClick, className, type, disabled }: ButtonProps) => {
    return (
        <button
            className={cn(styles.button, className ?? false)}
            onClick={onClick}
            type={type ?? "button"}
            disabled={disabled}
        >
            {name}
        </button>
    )
}