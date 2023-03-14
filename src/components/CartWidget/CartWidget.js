import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart-widget' className='cart'/>
            0
        </div>
    )
}

export default CartWidget