import React from 'react';

import './produto.css'
const TableRow = ({name, value}) => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://sempreinternet.com.br/wp-content/uploads/2021/04/sempre.png' className='imgProduto' alt='' />
          <div className='info'>
            <div className='name'>{name}</div>
            <div className='category'>Internet</div>
          </div>
        </div>
      </td>
      <td>R${value}</td>
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
