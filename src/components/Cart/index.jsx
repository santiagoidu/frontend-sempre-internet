import './styles.css'

import PageHeader from '../../layout/PageHeader';
import PageTitle from '../../layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import { api } from '../../api';

export default function Carrinho() {

 const [cart, setCart] = useState([])

  const fetchData = () => {
    api.get('/product').then((data) => console.log(data) )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <PageHeader />
      <main className='main1'>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section className='section1'>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                 {cart.map( (itens) => {
                return <TableRow {... itens} />
                })}
                
                {cart.length === 0 && (
                <tr>
                  <td colSpan='5' style={{textAlign: 'center'}} >
                    <b>Carrinho de compras vazio </b>
                    </td>
                  </tr>
                  )}
              </tbody>
            </table>
          </section>
          <aside className='aside1'>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}
