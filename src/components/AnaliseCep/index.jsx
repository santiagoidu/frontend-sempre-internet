import React, { useState } from 'react'
import Modal from 'react-modal'

import './AnaliseCep.css'

//Modal.setAppElement('#root')

export default function AnaliseCep() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }
    function handleCloseModal(){
        setIsOpen(false)
    }
    const custonStyles = {
        content: {
            top: '20%',
            left: '10%',
            right: '20%',
            botton: 'auto',
            marginRight:'-10%',
            border: '10px solid #000'
        }
    }
  return (
    <div>
       <button className='modal-button cart' onClick={handleOpenModal}>Verificar Cobertura</button>
       <Modal
       isOpen={modalIsOpen}
       onRequestClose={handleCloseModal}
        style={custonStyles}
       >
        <div className='nameCart'>
            <h1>Carrinho</h1>
        </div>
       </Modal>
    </div>
  );
}