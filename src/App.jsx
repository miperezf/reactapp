import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Navbar'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'




function App() {

  const [products] = useState(initialProducts)

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Nav/>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>

  )
}

export default App
