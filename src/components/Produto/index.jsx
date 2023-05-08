import React, { useState, useEffect } from 'react'
import './produtoHome.css'
import ProdutoServico from './produto';
import { api } from '../../api'

function ProdutoHome() {

  const [cart, setCart] = useState([])

  const fetchData = async () => {
    const { data } = await api.get('/product')
    setCart(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='productsContainer'>
    {cart.map((props) => <div className='productHome'>
        <ProdutoServico {... props} />
      </div>)}
    </div>
  );
}

export default ProdutoHome;


