import React, { useState } from 'react'
import './produtoHome.css'

function ProdutoHome() {
  return (
    <>
    <div className='productHome'>
        <div className='borderImg'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgLogo' alt='' />
          </div>
          <div className='info'>
            <div className='name'>Pacote 40gb de Internet</div>
            <div className='price'>R$40</div>
            <button className='add'>Adcionar no carrinho</button>
          </div>
        </div>
        <div className='productHome2'>
        <div className='borderImg'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgLogo' alt='' />
          </div>
          <div className='info'>
            <div className='name'>Pacote 40gb de Internet</div>
            <div className='price'>R$40</div>
            <button className='add'>Adcionar no carrinho</button>
          </div>
        </div>
        <div className='productHome3'>
        <div className='borderImg'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgLogo' alt='' />
          </div>
          <div className='info'>
            <div className='name'>Pacote 40gb de Internet</div>
            <div className='price'>R$40</div>
            <button className='add'>Adcionar no carrinho</button>
          </div>
        </div>
        <div className='productHome4'>
        <div className='borderImg'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgLogo' alt='' />
          </div>
          <div className='info'>
            <div className='name'>Pacote 40gb de Internet</div>
            <div className='price'>R$40</div>
            <button className='add'>Adcionar no carrinho</button>
          </div>
        </div>
    </>
  );
}

export default ProdutoHome;


