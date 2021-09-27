import { useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionModal } from './components/NewTransactionModal'
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
     <GlobalStyle />
     <NewTransactionModal 
     isOpen={isNewTransactionModelOpen}
     onRequestClose={handleCloseNewTransactionModal}
     />
    
    </>
  );
}

