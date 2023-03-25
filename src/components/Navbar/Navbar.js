import './Navbar.css'
import logo from './assets/logo1.png'


const Navbar = () => {
    return (
        
        <div class="m-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div>
                        <a href="./"><img  src={logo} class="logo1" alt="logo"/></a>
                    </div>
                    <a href="../" class="navbar-brand fs-1 fw-bold">MECATRON REPUESTOS</a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center fs-3 fw-bold" id="navbarCollapse">
                        <div class="navbar-nav">
                            <button href="../" class="nav-item nav-link ">Nosotros</button>
                            <button href="../" class="nav-item nav-link">Contacto</button>
                            <button href="../" class="nav-item nav-link active">Compras</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar