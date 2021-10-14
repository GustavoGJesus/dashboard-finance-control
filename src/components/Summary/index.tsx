import { useContext } from "react";

import { Container } from "./styles";
import entradasImg from '../../assets/entrance.svg';
import saidasImg from '../../assets/exit.svg';
import totalImg from '../../assets/total.svg'

import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const { transactions } = useContext(TransactionsContext);

   const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type == 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else{
           acc.withdraws += transaction.amount;
           acc.total -= transaction.amount;
        }

        return acc;
   } , {
        deposit: 0,
        withdraws:0,
        total: 0,
   })
    return (
        <Container> 
            <div>
                <header>
                    <p>Entrance</p>
                    <img src={entradasImg} alt="income" />
                </header> 
                    <strong>
                        {new Intl.NumberFormat('en',{
                            style:'currency',
                            currency: 'USD'
                        }).format(summary.deposit)}
                    </strong>
                </div>
            <div>
                <header>
                    <p>Exit</p>
                    <img src={saidasImg} alt="Outcome"/>
                    </header>
                    <strong>
                        {new Intl.NumberFormat('en',{ //Formatação dos números
                            style:'currency',
                            currency: 'USD'
                        }).format(summary.withdraws)}
                    </strong>
               
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                    <strong>
                        {new Intl.NumberFormat('en',{
                            style:'currency',
                            currency: 'USD'
                        }).format(summary.total)}
                    </strong>
            </div>
        </Container>
    )
}