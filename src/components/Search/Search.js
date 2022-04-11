import React, {useState} from "react";
import classes from './Search.module.scss';
import Chips from "../UI/Chips/Chips";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Search = ({data}) => {
    const [activeChips, setChips] = useState(data[0])

    return(
        <div className={classes.search}>
            <div className={classes.item}>
                {data?.length && data.map((item) => {
                    return <Chips
                        key={item.name}
                        text={item.name}
                        isActive={activeChips.name === item.name}
                        onClick={() => setChips(item)}
                        className={classes.chipsItem}
                    />
                })}
            </div>
            <Input
                placeholder={'Поиск по стране, региону, городу, ' + activeChips.placeholder}
                className={classes.item}
            />
            <div className={classes.buttons}>
                <Button text={'На карте'} onClick={() => {}} isPrimary/>
                <Button text={'Все пляжи страны'} onClick={() => {}} className={classes.button}/>
            </div>
        </div>
    )
}

export default Search;
