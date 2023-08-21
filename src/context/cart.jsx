import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

//1-creamos contexto
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState) //dispac se va a encargar de enviar las acciones a reducer

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const subtractToCart = product => dispatch({
    type: "SUBTRACT_TO_CART",
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart, subtractToCart }
}


//2-crear provider
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, subtractToCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      subtractToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}


//se crea un nuevo carrito con el structuresClone, hace copias profundas de los array y objetos y por lo tanto tendremos un carrito nuevo
// el spreadOperator hace un clon pero superficial, no profunda y eso puede traer problemas