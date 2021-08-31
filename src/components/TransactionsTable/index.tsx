import { Container } from "./styles";

export function TransactionsTable(){
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
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">$600.00</td>
                        <td>Developer</td>
                        <td>20/05/2021</td>
                    </tr>
                    <tr>
                        <td>Pizza</td>
                        <td className="withdraw">- $10.00</td>
                        <td>Food</td>
                        <td>18/05/2021</td>
                    </tr>
                </tbody> 
            </table>
        </Container>
    );
}