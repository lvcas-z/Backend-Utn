import React from 'react'

const CardItem = ({ id, title, price, description, stock }) => {
    return (
        <div style={{fontFamily:'Calibri'}} id={id}>
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <p>Description : {description}</p>
            <p>stock : {stock}</p>
            <div>
                <button>Modificar</button>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default CardItem