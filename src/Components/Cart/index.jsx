import React, { useContext, useState } from 'react'
import styles from './Cart.module.css'
//这是私有的目录，服务器访问不到，所以在这里引入
import iconImg from '../../asset/bag.png'
import CartContext from '../../Components/store/cart-context'
import CartDetails from './Details/CartDetails'


const Cart = () => {
    //添加一个state来设置详情是否显示
    const [toggleDetails, setToggleDetails] = useState(false);
    //添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) return
        setToggleDetails(prevState => !prevState);
    }
    const ctx = useContext(CartContext);
    return (
        <>
            <div className={styles.Cart} onClick={toggleDetailsHandler}>
                {toggleDetails && <CartDetails />}
                <div className={styles.Icon}>
                    <img src={iconImg} alt="购物袋" />
                    {ctx.totalAmount === 0 ? null : <span className={styles.TotalAmount}>{ctx.totalAmount}</span>}

                </div>
                {ctx.totalAmount === 0 ? <p className={styles.noMeal}>未选购商品</p> : <p className={styles.Price}>{ctx.totalPrice}</p>}

                <button className={`${styles.Button} ${ctx.totalAmount === 0 ? styles.Disabled : ''}`}>去结算</button>
            </div>
        </>
    )
}
export default Cart;