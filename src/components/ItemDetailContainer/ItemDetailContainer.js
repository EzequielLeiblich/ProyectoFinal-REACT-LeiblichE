import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getProductById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = ({ greeting }) => {
    const { itemId } = useParams()
    
    const getProductWithId = () => getProductById(itemId)

    const { data: product, error, loading} = useAsync(getProductWithId, [itemId])

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

    return(
        <div>
            <h1>{greeting}</h1>
            <div className='ItemDetailContainer' >
                <ItemDetail  {...product} />
            </div>
        </div>    
    )
}

export default ItemDetailContainer