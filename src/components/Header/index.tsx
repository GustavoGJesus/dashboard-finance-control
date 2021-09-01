import { useState } from 'react';

import  logoImg  from '../../assets/logo.svg';
import Modal from 'react-modal'
import { Container, Content } from './styles';

//Modal
interface HeaderProps{
    onOPenNewTransactionModal: () => void;
}
export function Header({onOPenNewTransactionModal}: HeaderProps){
    
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Finance Control" />
                <button type="button" onClick={onOPenNewTransactionModal}> 
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}