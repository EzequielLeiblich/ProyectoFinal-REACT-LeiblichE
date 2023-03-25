import { useEffect, useState } from 'react'
<<<<<<< Updated upstream
import { getProducts } from "../../asyncMock"
=======
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../asyncMock"
>>>>>>> Stashed changes
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

<<<<<<< Updated upstream
    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])
=======
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])
>>>>>>> Stashed changes

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer