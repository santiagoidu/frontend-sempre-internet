import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'

export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                 <Route path="/" exact element={<Home />} />
                {/* <Route path="/pacientes/:idPaciente" exact component={PacientesDatails} /> */}

                {/* Rota Admin */}
                {/* <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/pacientes" exact component={Pacientes} />
                <Route path="/admin/pacientes/cadastrar" exact component={PacientesCadastrar} />
                <Route path="/admin/pacientes/editar/:idPaciente" exact component={PacientesEditar} />
       */}
                {/* <Route path="/admin/usuario" exact component={Usuarios} />
                <Route path="/admin/usuario/editar/:idUsuario" exact component={UsuariosEditar} /> */}

                {/* Rota Cadastro */}
                {/* <Route path="/cadastrar" exact component={UsuariosCadastrar} /> */}
            </Routes>
        </BrowserRouter>
    )
}