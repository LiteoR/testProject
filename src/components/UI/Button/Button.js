import React from "react";
import classes from './Button.module.scss';

const Button = ({text, className, onClick, isPrimary}) => {
    const cls = [
        className,
        classes.button,
        isPrimary && classes.primary
    ]

    return <button className={cls.join(' ')} onClick={onClick}>
        {text}
    </button>
}

export default Button;
