import {Filters} from './Filters.jsx'
import { CartIcon } from './Icons.jsx'
import './Header.css'

export function Header () {
    return(
        <header>
            <h1>React Shop <CartIcon></CartIcon></h1>
            <Filters />
        </header>
    )
}