import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, marca, category, description, price, stock }) => {
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {id, name, price, quantity}
        console.log(productToAdd)
    }

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
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail