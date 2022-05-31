import React from 'react';
import classes from "./Meal.module.css";

const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src='/img/meals/1.png' alt='汉堡'></img>

            </div>
            <div>
                <h2 className={classes.title}>汉堡</h2>
                <p className={classes.Desc}>好吃便宜美味纯牛肉百分百搭配麻辣洋葱与番茄酱经典好吃至尊好吃新品上市必须尝尝</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>12</span>
                    <div>数量</div>
                </div>
            </div>
        </div>
    )
}

export default Meal;
