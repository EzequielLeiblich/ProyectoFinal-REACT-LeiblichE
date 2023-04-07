import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState()

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        // getProductById(itemId).then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <h1>Detalles del producto:</h1>
            <div className='ItemDetailContainer' >
                <ItemDetail  {...product} />
            </div>
        </div>    
    )
}

export default ItemDetailContainer