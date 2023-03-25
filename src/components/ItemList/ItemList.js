<<<<<<< Updated upstream
=======
import './ItemList.css'
>>>>>>> Stashed changes
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
<<<<<<< Updated upstream
        <div className='catalogo' style={{display: 'flex'}}>
=======
        <div className='catalogo'>
>>>>>>> Stashed changes
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList