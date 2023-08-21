import { useContext } from "react"
import { FilterContext } from "../context/filters"



export function useFilters() {

  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice && //de todso el array de producto vamos a filtrar los que cumplan con estas dos condiciones, que el precio del producto sea mayor o igual al precio minimo, que fijamos arriba como 0

        (
          filters.category === 'all' ||  // y ademas miramos si el filtercategory es all, lo mostramos independiente d ela categoria que tenga, pero si no es all 
          product.category === filters.category // los productos que tengan la categoria que sean los mismos de filtercategory
        )
      )
    }
    )
  }
  return { filters, filterProducts, setFilters }
}
