import React from 'react';
import classes from "./Meal.module.css";
import Counter from '../../UI/Counter/index'

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt='汉堡' ></img>

            </div>
            <div>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <p className={classes.Desc}>{props.meal.desc}</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter onAdd={props.onAdd} meal={props.meal} onDel={props.onDel} />
                </div>
            </div>
        </div>
    )
}

export default Meal;
