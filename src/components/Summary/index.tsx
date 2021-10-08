import { useContext } from "react";

import { Container } from "./styles";
import entradasImg from '../../assets/entrance.svg';
import saidasImg from '../../assets/exit.svg';
import totalImg from '../../assets/total.svg'

import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const { transactions } = useContext(TransactionsContext);
    
    console.log(transactions)

    return (
        <Container> 
            <div>
                <header>
                    <p>Entrance</p>
                    <img src={entradasImg} alt="income" />
                </header> 
                    <strong>
                        $1000,00
                    </strong>
                </div>
            <div>
                <header>
                    <p>Exit</p>
                    <img src={saidasImg} alt="Outcome"/>
                    </header>
                    <strong>
                        - $500,00
                    </strong>
               
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                    <strong>
                        $7000,00
                    </strong>
            
            </div>
        </Container>
    )
}