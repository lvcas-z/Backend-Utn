import React, { useContext, useState } from 'react'
import Title from '../../Title/Title'
import Products from '../../Products/Products'
import { ProductContext } from '../../Context/ProductContext'

const HomeScreen = () => {

    const [count, setCount] = useState(0)
    const {products} = useContext(ProductContext)
    return (
        <>
            <Title>
                Hola <span style={{ color: "blue" }}>Mundo</span>
            </Title>
            <Products products={products}/>
        </>
    )
}

export default HomeScreen