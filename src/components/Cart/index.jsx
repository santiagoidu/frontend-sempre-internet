import './styles.css'

import PageHeader from '../../layout/PageHeader';
import PageTitle from '../../layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';

export default function Carrinho() {
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
                <TableRow />
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
