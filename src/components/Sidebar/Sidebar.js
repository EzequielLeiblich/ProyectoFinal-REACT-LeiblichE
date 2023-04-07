import './Sidebar.css'

import { NavLink } from 'react-router-dom'
import Counter from '../Counter/Counter'

const Sidebar = () => {
    return (
            <nav className= "Sidebar col text-center">
                <ul className="list-unstyled ps-0">
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button id="agregarRepuesto" className="btn btn-secondary btn fs-5">Agregar Repuesto</button>
                    </li>
                    <li className="border-top my-3"></li>
                    <form className="d-flex">
                        <input id="buscador" className="form-control me2" placeholder="Buscar nombre o marca" aria-label="Search"/>
                        <button id="btnBuscar" className="btn btn-outline-success"><i className="bi-search"></i></button>
                    </form>
                    <li className="border-top my-3"></li>
                    <select id="selectOrden" className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="" hidden>Ordenar por:</option>
                        <option value="1">Mayor a menor</option>
                        <option value="2">Menor a mayor</option>
                        <option value="3">Alfabeticamente</option>
                    </select>
                    <li className="border-top my-3"></li>
                    <div className="Categories">
                        <h3>Categorias:</h3>
                        <NavLink to='/category/Motor' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motor</NavLink>
                        <br/>
                        <NavLink to='/category/Electricidad' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Electricidad</NavLink>
                        <br/>
                        <NavLink to='/category/Frenos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Frenos</NavLink>
                        <br/>
                        <NavLink to='/category/Carroceria' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Carroceria</NavLink>
                        <br/>
                        <NavLink to='/category/Suspension' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Suspension</NavLink>
                        <br/>
                        <NavLink to='/category/Limpieza' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Limpieza</NavLink>
                        <br/>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Todos</NavLink>
                    </div>
                    <li className="border-top my-3"></li>
                    <Counter />
                </ul>
            </nav>
    )
}


export default Sidebar