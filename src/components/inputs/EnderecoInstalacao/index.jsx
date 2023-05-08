import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

function InputEnderecoInstalacao() {
        return (
            <>
            <div className='DadosPessoais'>
                    <TextField id="cep" label="CEP" className='nomeRazao' required variant="outlined"/>
                    <TextField id="rua" label="Rua/Avenida" value="" required className='rua' variant="outlined" />
                    <TextField id="numero" label="N°" value="" required className='numero' variant="outlined" />
                    <TextField id="complemento" value="" label="Complemento" className='complemento' variant="outlined" />
                    <TextField id="bairro" value="" label="bairro" required className='bairro' variant="outlined" />
                    <TextField id="cidade" value="" label="Cidade" required className='cidade' variant="outlined" />
                    <TextField id="uf" value="" label="UF" required className='uf' variant="outlined" />
                </div>
            </>
        );
    }
export default InputEnderecoInstalacao;
