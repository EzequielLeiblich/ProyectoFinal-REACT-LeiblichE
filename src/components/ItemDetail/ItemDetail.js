import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, marca, category, description, price, stock }) => {
    
    const { addItem, getProductQuantity } = useCart()
    const { setNotification } = useNotification()
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock, img
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Marca: {marca}
                </p>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Utilidad: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1}/>
            </footer>
        </article>
    )
}

export default ItemDetail