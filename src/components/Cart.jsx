import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import './Cart.css'

function CartItem({images, price, title, quantity, addToCart}){
    return(
        <li >
            <img 
                src={images}
                alt={title}
            />
            <div>
                <strong>
                    {title}
                </strong>
            </div>
            <div><p>
            ${price}</p>
            </div>
            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart (){
    const cartCheckBoxId = useId();
    const {cart, clearCart, addToCart} = useCart()
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    return(
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem key={product.id}
                        addToCart = {() => addToCart(product)}
                        {...product} />
                    ))}

                </ul>
                <p>Total: ${total.toFixed(2)}</p>
                <hr />
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}