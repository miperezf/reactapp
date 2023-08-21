import { createContext, useState } from "react";


//1. Crear el Contexto
export const FilterContext = createContext();

//2. crear el provider, para proveer el contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FilterContext.Provider value={{ filters, setFilters }}  >
            {children}
        </FilterContext.Provider>
    )

}


//voy a controlar el contexto con un estado, su estado se va a compartir