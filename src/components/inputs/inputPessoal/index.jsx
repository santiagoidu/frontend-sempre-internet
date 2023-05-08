import React from 'react'
import TextField from '@mui/material/TextField';
import './inputPessoal.css'


function InputPessoal() {
    return (
        <>
            <div className='DadosPessoais'>
            <TextField id="standard-basic" label="Nome Razão" className='nomeRazao' required variant="outlined" />
            <TextField id="standard-basic" label="Telefone" className='telefone' required variant="outlined" />
            <TextField id="standard-basic" label="Telefone2" className='telefone2' variant="outlined" />
            <TextField id="standard-basic" label="E-mail" required className='email' variant="outlined" />
            <TextField id="standard-basic" label="CPF/CNPJ" required className='cpfCnpj' variant="outlined" />
            </div>

        </>
    );
}

export default InputPessoal;


