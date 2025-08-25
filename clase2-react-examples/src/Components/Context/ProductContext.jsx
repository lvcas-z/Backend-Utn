import { createContext, useState } from "react";
import { getProducts } from "../../services/productService";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const productsData = getProducts()
    const [products, setProducts] = useState(productsData)

const addNewProduct = (product) => {
        /* Recibimos los datos del producto y creamos el nuestro */
        const new_product = {...product, id: products.length + 1}

        /* Modificamos el estado de producto */
        setProducts(
            (prev_products) => {
                return [...prev_products, new_product]
            }
        )
    }

    return (
        <ProductContext.Provider
            value={{ products ,addNewProduct }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider