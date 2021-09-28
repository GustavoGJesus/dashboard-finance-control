import { useState } from 'react';
import Modal from 'react-modal';

import {Container} from './styles'
import {TransactionTypeContainer} from './styles'
import { RadioBox } from './styles'


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entrance.svg'
import outcomeImg from '../../assets/exit.svg'



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps ) {
    const [type, setType] = useState('deposit');

    return(
       <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="close modal" />
            </button>
            <Container>
                <h2>Register Transaction</h2>

                <input placeholder="Title"/>
                <input 
                    type="number" 
                    placeholder="Value" 
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrance" />
                        <span>Entrance</span>
                    </RadioBox>
                    < RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Exit" />
                        <span>Exit</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                    placeholder="Category"
                />

                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>
    );
};
