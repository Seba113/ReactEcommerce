import{useState, useId} from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters (){
    const {filters, setFilters} = useFilters()
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div className='filtro'>
                <label htmlFor="minPriceFilterId">Precio a partir de: </label>
                <input onChange={handleChangeMinPrice} type="range" id="minPriceFilterId" min="0" max="700" value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div className='filtro'>
                <label htmlFor="categoryFilterId">Categoría</label>
                <select id="categoryFilterId" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
        </section>
    )
}