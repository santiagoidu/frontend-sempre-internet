import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
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

  const router = useNavigate();
  return (
    <>
    <div className='productsContainer'>
    {cart.map((props) => <div className='productHome'>
        <ProdutoServico {... props} />
      </div>)}
    </div>
    <div className='center'>
    <button className='button' onClick={() => {
                router("/orcamento")
            }}>Verificar disponibilidade</button>
          </div>
    </>
  );
}

export default ProdutoHome;


