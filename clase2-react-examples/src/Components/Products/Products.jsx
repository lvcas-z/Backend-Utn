import React, { useContext } from 'react'
import CardItem from './CardItem/CardItem'
import { ProductContext } from '../Context/ProductContext'

const Products = ({products}) => {
    
    return (
        <div>
            <h1>Productos:</h1>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                {products.map(product => {
                return (<CardItem key={product.id}{...product} />)
                })}
            </div>
        </div>
    )
}

export default Products