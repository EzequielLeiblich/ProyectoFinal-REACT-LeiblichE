import './Footer.css'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const Footer = () => {
    return (
        <footer>
            <nav className="foot">
                <div className="copyright">&copy;Leiblich Ezequiel | Entrega Final | Curso de React en CoderHouse | Comision #39610</div>
                <div className='logos'>
                    <a href="https://www.facebook.com/"><img src={facebook} className="fb_icon" alt="facebook"/></a>
                    <a href="https://www.instagram.com/"><img src={instagram} className="ins_icon" alt="instagram"/></a>
                    <a href="https://web.whatsapp.com/"><img src={whatsapp} className="wap_icon" alt="whatsapp"/></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer