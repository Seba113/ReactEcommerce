import  { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Products.css'
import {products} from '../services/products.js'
import { useCart } from '../hooks/useCart.js'

export function Products ({products}){
    const {addToCart,removeFromCart, cart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return(

                        <li key={product.id}>
                            <img src={product.images} alt={product.title} />
                            <div>
                                <h3><strong>{product.title}</strong></h3>
                                <p> ${product.price}</p>
                            </div>
                            <div> 
                                <p>{product.rating[0]}⭐</p>
                            </div>
                            <div>
                                <span>{product.category}</span>
                            </div>
                            <div>
                                <button style={{backgroundColor : isProductInCart ? 'red' : '#09f'}} onClick={()=> 
                                isProductInCart
                                ? removeFromCart(product)
                                : addToCart(product)
                                }>
                                {
                                    isProductInCart
                                    ?<RemoveFromCartIcon />
                                    :<AddToCartIcon />
                                }          
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}