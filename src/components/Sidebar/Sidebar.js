import './Sidebar.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Counter from '../Counter/Counter'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))

        getDocs(categoriesRef)
            .then(snapshot => {
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
            <nav className= "Sidebar col text-center">
                <ul className="list-unstyled ps-0">
                    <li className="border-top my-3"></li>
                    <div className="Categories">
                        <h3>Categorias:</h3>
                        {
                            categories.map(cat => {
                                return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                            })
                        }
                        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Todos</NavLink>
                    </div>
                    <li className="border-top my-3"></li>
                    <Counter />
                </ul>
            </nav>
    )
}


export default Sidebar