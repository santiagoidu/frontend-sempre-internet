import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Orcamento from './pages/Orcamento'
import Carrinho from './components/Cart'

export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" exact element={<Home />} />
                 <Route path='/orcamento' exact element={<Orcamento />} />
                 <Route path='/carrinho' exact element={<Carrinho /> } />
            </Routes>
        </BrowserRouter>
    )
}