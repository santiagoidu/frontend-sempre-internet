import React from 'react';

import './produto.css'
const TableRow = ({produto, preco}) => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgProduto' alt='' />
          <div className='info'>
            <div className='name'>{produto}</div>
            <div className='category'>Internet</div>
          </div>
        </div>
      </td>
      <td>{preco}</td>
      <td>
        <div className='qty'>
          <button>
            <i className='bx bx-minus'></i>
          </button>
          <span>1</span>
          <button>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$ 40,00</td>
      <td>
        <button className='remove'>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
