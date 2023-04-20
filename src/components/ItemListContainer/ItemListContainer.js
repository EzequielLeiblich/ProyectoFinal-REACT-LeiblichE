
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <h1>Hubo un error</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer