import React from 'react';

const Summary = () => {
  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>R$ 40,00</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ 40,00</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;
