import React, { useContext } from 'react';
import classes from './Counter.module.css';
import CartContext from '../../store/cart.context';


// 计数器的组件
const Counter = (props) => {
    const ctx = useContext(CartContext)
    const addButtonHandler = () => {
        ctx.addItem(props.meal)
    }
    const delButtonHandler = () => {
        ctx.removeItem(props.meal)
    }

    return (

        < div className={classes.Counter} >
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button
                            onClick={delButtonHandler}
                            className={classes.Sub}>-</button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button
                onClick={addButtonHandler}
                className={classes.Add}>
                +
            </button>
        </div >
    );
};

export default Counter;
