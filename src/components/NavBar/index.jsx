import React, { useState } from 'react'
import './nav.css'

function NavBarMenu() {
  return (
      <nav className='nav'>
        <a><p className='item1'>Sempre Internet</p></a>
        <a href='#'><p className='item2'>Solicitar Orçamento</p></a>
      </nav>
  );
}

export default NavBarMenu;


