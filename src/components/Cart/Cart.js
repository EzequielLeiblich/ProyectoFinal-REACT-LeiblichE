import './Cart.css'
import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = ({ greeting }) => {
    const { cart, total, incrementQuantity, decrementQuantity, clearCart } = useCart()

    return (
        <div>
            <div className='enCarrito'>
            <h1>{ greeting }</h1>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className='prodEnCarrito'>
                                <h2>{prod.name} |</h2>
                                <h2>| Precio: ${prod.price} |</h2>
                                <h2>| Cantidad: {prod.quantity}/{prod.stock} |</h2>
                                <button className="restar" onClick={() => decrementQuantity(prod.id)}>- 1</button>
                                <button className="sumar" onClick={() => incrementQuantity(prod.id, prod.stock)}>+ 1</button>
                            </div>
                        )
                    })
                }
            <h1>Total de la compra ${total}</h1>
            <button className="Clear" onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout' className="Checkout">Checkout</Link>
            </div>

        </div>
    )
}

export default Cart