import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [title, setTitle] = useState('Primer titulo')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                console.log(snapshot)
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProducts(products)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Segundo titulo')
        }, 2000)
    }, [])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{title}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer