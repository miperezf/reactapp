import { useContext } from 'react'  //usamos el useContext para leer el contexto
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

//este hook se crea para leer el contexto
// una buena practica en el custom hooks que consumen un contexto es el hecho de revisar si el conexto que ha leido es undefined
//en este caso si contex (podria llamarse cart o lo que sea) es undefined quiere decir que estas usando el custom hooks donde no puede
//por que esa parte de tu app no esta envuelta en el provider
