import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'


function CartItem({ thumbnail, price, title, quantity, addToCart, subtractToCart, removeFromCart }) {


    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title} </strong>- ${price}
            </div>

            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={subtractToCart}>-</button>
                <button onClick={addToCart}>+</button>
                <button onClick={removeFromCart}>
                    <ClearCartIcon />
                </button>

            </footer>
        </li>
    )
}

export function Cart() {

    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart, subtractToCart, removeFromCart } = useCart()
    return (
        <>
            <label htmlFor={cartCheckBoxId} className='cart-button'>
                <CartIcon />
            </label>

            <input id={cartCheckBoxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            subtractToCart={() => { subtractToCart(product) }}
                            removeFromCart={() => removeFromCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
