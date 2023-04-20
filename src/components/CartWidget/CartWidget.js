import './CartWidget.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return(
        <div to='/cart' className="CartWidget" onClick={() => navigate('/cart')}>
            <p className='carrito'>Carrito de Compras</p>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            <div className='cant'>
                {totalQuantity}
            </div>
        </div>
    );
}

export default CartWidget