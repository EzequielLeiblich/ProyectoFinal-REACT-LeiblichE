<<<<<<< Updated upstream
const Item = ({ nombre, imagen, precio }) => {
    return (
        <div className="Item">
            <img src={imagen} alt={nombre} style={{width: 100}}/>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
        </div>
=======
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, description, price }) => {
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
                    Utilidad: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
                </footer>
        </article>
>>>>>>> Stashed changes
    )
}

export default Item