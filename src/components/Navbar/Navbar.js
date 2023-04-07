import './Navbar.css'
import logo from './assets/logo1.png'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        
        <div className="m-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <a href="./"><img  src={logo} className="logo1" alt="logo"/></a>
                    </div>
                    <a href="../" className="navbar-brand fs-1 fw-bold">MECATRON REPUESTOS</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav-item" >
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar