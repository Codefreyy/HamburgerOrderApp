import React, { useContext } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Delete } from '@icon-park/react'
import styles from './CartDetails.module.css'
import CartContext from '../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';

const CartDetails = () => {
    const ctx = useContext(CartContext);
    return (
        <>
            <Backdrop>
                <div className={styles.CartDetails}>
                    <header className={styles.header}>
                        <h2 className={styles.title}>餐品详情</h2>

                        <div className={styles.clear}>
                            <Delete theme="outline" size="24" fill="#333" />
                            <span> 清空购物车</span>
                        </div>
                    </header>

                    <div>
                        {
                            ctx.items.map(item =>
                                <Meal key={item.id} meal={item} />)
                        }
                    </div>
                </div>
            </Backdrop>
        </>
    )
}
export default CartDetails;