import './Sidebar.css'

const Sidebar = () => {
    return (
            <nav className= "Sidebar col text-center">
                <ul class="list-unstyled ps-0">
                    <li class="border-top my-3"></li>
                    <li class="mb-1">
                        <button id="agregarRepuesto" className="btn btn-secondary btn fs-5">Agregar Repuesto</button>
                    </li>
                    <li class="border-top my-3"></li>
                    <form class="d-flex">
                        <input id="buscador" class="form-control me2" placeholder="Buscar nombre o marca" aria-label="Search"/>
                        <button id="btnBuscar" class="btn btn-outline-success"><i class="bi-search"></i></button>
                    </form>
                    <li class="border-top my-3"></li>
                        <select id="selectOrden" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Ordenar por:</option>
                            <option value="1">Mayor a menor</option>
                            <option value="2">Menor a mayor</option>
                            <option value="3">Alfabeticamente</option>
                        </select>
                        <li class="border-top my-3"></li>
                        <li className="nav-item" >
                            <a id="botonCarrito" data-bs-toggle="modal" data-bs-target="#idModalCarrito" class="btn btn-secondary btn fs-5"><i class="fas fa-shopping-cart fa-1x"></i> Carrito de Compras</a>
                        </li>
                        <li class="border-top my-3"></li>
                </ul>
            </nav>
    )
}


export default Sidebar