import React, {useState} from "react";
import classes from './CountrySlider.module.scss';
import Slider from "./Slider/Slider";

const CountrySlider = ({list, className}) => {
    const [activeCountry, setCountry] = useState(list[0])

    const toggleCountry = (number) => {
        setCountry(list[number])
    }

    return(
        <div className={[classes.countrySlider, className].join(' ')}>
            <h1 className={classes.title}>{activeCountry}</h1>
            <Slider
                onSlideChange={(value) => toggleCountry(value)}
                items={list}
            />
            <hr className={classes.line}/>
            <span className={classes.text}>
                Мир Breezzor огромный, исследуй его!
            </span>
        </div>
    )
}

export default CountrySlider;
