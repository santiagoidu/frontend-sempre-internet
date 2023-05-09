import React, { useState } from 'react'
import './nav.css'

import IconCart from './iconCart.png'

function NavBarMenu()

{
  return (
    <header className='header2'>
      <span>
        Sempre Internet
      </span>
      <a href='/carrinho' className='aIcon'><img src={IconCart} alt="" className='iconCart' /></a>
    </header>
  );
}

export default NavBarMenu;


