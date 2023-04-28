import './nav.css'

import Cart from './cart.png'

function NavBarMenu() {
  return (
    <>
      <nav className='nav'>
        <a><p className='item1'>Sempre Internet</p></a>
        <a href='#'><p className='item2'>Solicitar Orçamento</p></a>
        <a href='#'><img src={Cart} className='item3'/><p className='cart'>Carrinho</p></a>
      </nav>
    </>
  );
}

export default NavBarMenu;


