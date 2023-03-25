import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className='catalogo'>
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList