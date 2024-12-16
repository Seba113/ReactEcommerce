import { useState, useEffect,} from 'react'
import { Products } from './components/Products.jsx'
import { products as fetchProducts} from './services/products'
import {Header } from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import {useFilters} from './hooks/useFilters.js'
import { CartProvider } from './context/cart.jsx'
import { Cart } from './components/Cart.jsx'
import './App.css'



function App() {
  const [productList, setProductList] = useState([]);
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(productList)

  
  useEffect(() => {
      fetchProducts()
      .then(data => setProductList(data))
      .catch(err => console.error(err));
    }, []);

  return(
    <CartProvider>
      <Header />
      <Cart />
      <Products products ={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
