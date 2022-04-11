import React from "react";
import classes from './Input.module.scss';
import Icon from "../Icons";

const Input = ({placeholder, className}) => {
    return(
        <div className={[classes.input, className].join(' ')}>
            <input className={classes.field} placeholder={placeholder}/>
            <button className={classes.button}>
                <Icon type={'setting'}/>
            </button>
        </div>
    )
}

export default Input;
