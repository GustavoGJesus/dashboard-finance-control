import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from './components/Header';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root'); //boas prácticas, elemento root da aplicação

export function App() {
    //react-modal Github
    const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false)
    
    function handleOpenNewTransactionModal(){
       setIsNewTransactionModelOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModelOpen(false)
    }
  return (
    <>
     <Header onOPenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
     <Modal isOpen={isNewTransactionModelOpen} 
            onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>
     <GlobalStyle />
    </>
  );
}

