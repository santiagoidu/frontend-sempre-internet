import React, { useState } from 'react';
import InputPessoal from '../inputs/inputPessoal'
import './fichaCadastral.css'


function FichaCadastral() {
    return (
        <>
            <div className='formulario'>
                <h1>Ficha Cadastral</h1>
                <h5>Dados Pessoais</h5>
                <InputPessoal />
            </div>

        </>
    );
}

export default FichaCadastral;


