import './CartWidget.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
        <div to='/cart' className="CartWidget">
            <p className='carrito'>Carrito de Compras</p>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            <div className='cant'>
            {totalQuantity}
            </div>
        </div>
    );
}

export default CartWidget