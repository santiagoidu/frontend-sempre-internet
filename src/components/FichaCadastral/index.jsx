import React, { useState } from 'react';
import InputPessoal from '../inputs/inputPessoal'
import './fichaCadastral.css'
import InputEnderecoInstalacao from '../inputs/EnderecoInstalacao';


function FichaCadastral() {
    return (
        <>
            <div className='formulario'>
                <h1>Ficha Cadastral</h1>
                <h5>Dados Pessoais</h5>
                <InputPessoal />
                <h5>Endereço da instalação</h5>
                <InputEnderecoInstalacao />
            </div>

        </>
    );
}

export default FichaCadastral;


