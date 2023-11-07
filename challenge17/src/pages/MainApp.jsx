import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { ProductsPage } from '../components/ProductsPage';

export const MainApp = () => {
    return (

        // <NavLink to="products/J" >Product by ID</NavLink>
        <Routes>
            <Route path="products">
                <Route path=':id' element={<ProductsPage />} />
            </Route>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    )
}