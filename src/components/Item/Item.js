const Item = ({ nombre, imagen, precio }) => {
    return (
        <div className="Item">
            <img src={imagen} alt={nombre} style={{width: 100}}/>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default Item