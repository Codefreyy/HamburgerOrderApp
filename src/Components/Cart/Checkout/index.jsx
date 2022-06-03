import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Checkout.module.css'
import { CloseSmall } from '@icon-park/react'

const checkoutRoot = document.getElementById('checkout-root')
const Checkout = (props) => {
    return ReactDOM.createPortal(
        <div className={styles.Checkout}>
            <div className={styles.close} onClick={() => props.onHide()}>
                <CloseSmall theme="outline" size="24" fill="#333" />
            </div>
        </div>,
        checkoutRoot
    )
}
export default Checkout;