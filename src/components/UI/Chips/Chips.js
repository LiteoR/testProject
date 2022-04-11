import React from "react";
import classes from './Chips.module.scss';

const Chips = ({text, isActive, onClick, className}) => {
    const cls = [
        className,
        classes.chips,
        isActive && classes.active,
    ]
    return <button
        className={cls.join(' ')}
        onClick={onClick}
    >
        {text}
    </button>
}

export default Chips;
