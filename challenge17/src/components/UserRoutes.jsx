import { NavLink, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./ProductsPage"
import { AboutPage } from "../pages/AboutPage"

export const UserRoutes = () => {
    return (
        <>
            <NavLink to='/'> Index </NavLink>
            <NavLink to='about'> About </NavLink>
            <NavLink to='products'> Products</NavLink>
            <NavLink to='search'> Search </NavLink>
            <NavLink to='login'> Login </NavLink>

            <Routes>
                <Route path='about' element={ <AboutPage /> } />
                <Route path='products' element={ <ProductsPage /> } />
                <Route path='search' element={ <h1>Search</h1> } />
            </Routes>
        </>
    )
}