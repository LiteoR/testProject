import React from 'react';
import classes from './Main.module.scss'
import CountrySlider from "../../components/CountrySlider/CountrySlider";
import Search from "../../components/Search/Search";

const Main =  () => {
    const listCountries = ['Мексика', 'Испания', 'Франция', 'Сент Винсент и Гренадины', 'Португалия', 'Саудовская Аравия'];
    const data = [
        {
            name: 'Пляжи',
            placeholder: 'название пляжа'
        },
        {
            name: 'Breezzor Pass',
            placeholder: 'названию отеля'
        },
        {
            name: 'Впечатления',
            placeholder: 'названию впечатления'
        },
        {
            name: 'Маршруты',
            placeholder: 'названию маршрута'
        },
    ];

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <CountrySlider list={listCountries} className={classes.slider}/>
                <Search data={data}/>
            </div>
        </div>
    )
}

export default Main;
