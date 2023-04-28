import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Orcamento from './pages/Orcamento'

export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" exact element={<Home />} />
                 <Route path='/orcamento' exact element={<Orcamento />} />
            </Routes>
        </BrowserRouter>
    )
}