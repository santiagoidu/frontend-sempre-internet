import React, { useState } from 'react'
import './produtoHome.css'
import { useNavigate } from 'react-router-dom';

function ProdutoServico({produto, preco}) {
  const router = useNavigate();

// function carrinho(p) {
//   router('/carrinho')
// }

return (
    <>
        <div className='borderImg'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgLogo' alt='' />
          </div>
          <div className='info'>
            <div className='name'><h3>{produto}</h3></div>
            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='price'><b>R${preco},00</b></div>
            <button className='add'>Adcionar no carrinho</button>
          </div>
          </>
);
}

export default ProdutoServico