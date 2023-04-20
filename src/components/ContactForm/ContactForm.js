import './ContactForm.css'
import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    
    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== confirmEmail) {
            alert("Los correos electrónicos no coinciden")
            return
        }
        const userData = {
            name, phone, email, confirmEmail
        }
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="name">Nombre:</label>
            <input id="name" placeholder="Ingrese su nombre.." required value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="phone">Teléfono:</label>
            <input id="phone" placeholder="Ingrese su telefono.." required value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input id="email" placeholder="Ingrese su E-mail.." required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="confirm-email">Confirmar Email:</label>
            <input id="confirm-email" placeholder="Confirme su E-mail.." required value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
            <button>Generar orden</button>
        </form>
    )
}

export default ContactForm
