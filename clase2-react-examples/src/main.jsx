import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ProductContextProvider, { ProductContext } from './Components/Context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
  </BrowserRouter>,
)
