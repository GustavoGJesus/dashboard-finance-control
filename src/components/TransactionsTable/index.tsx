import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

     useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    },[]);

    return(
        <Container>
            <table>
               <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Categories</th>
                        <th>Date</th>
                    </tr>
                </thead>
                
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('en',{
                                        style:'currency',
                                        currency: 'USD'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('en').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody> 
            </table>
        </Container>
    );
}