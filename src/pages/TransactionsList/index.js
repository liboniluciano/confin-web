import React, { useEffect, useState } from 'react';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css"
import Header from '../../components/Header';

import api from '../../services/api';
import { Container, Content, BalanceContent ,BalanceInfo, BalanceText } from './styles';

const TransactionsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);

    const getUserTransactions = async () => {
      /** Busco todas as transações do cliente (token já foi inserido quando loga -> contexto) */
      const response = await api.get('/usersTransactions');

      setTransactions(response.data);
    }
  
    const getUserBalance = async () => {
      /** Busco o balanço das transações do cliente  (token já foi inserido quando loga -> contexto) */
      const response = await api.get('/balance');

      setBalance(response.data.balance);
    }

  useEffect(() => {
    /** Busco todas as transações e o balanço do cliente quando o componente é criado */
    const _load = async () => {
      await getUserTransactions();
      await getUserBalance();
    };

    try {
      _load();
      setIsLoading(false);
    } catch (e){
      console.log('e: ', e);
    }
  }, []);
 
  return (
    <Container>
      <Content>
        <Header />
        <BalanceContent>
          <BalanceInfo>
            <BalanceText></BalanceText>
          </BalanceInfo>
          <BalanceInfo>
            <BalanceText>Income: {!isLoading ? `R$ ${balance.income}` : 'Loading...'}</BalanceText>
          </BalanceInfo>

          <BalanceInfo>
            <BalanceText>Outcome: {!isLoading ? `R$ ${balance.outcome}` : 'Loading...'}</BalanceText>
          </BalanceInfo>

          <BalanceInfo>
            <BalanceText>Balance: {!isLoading ? `R$ ${balance.balance}` : 'Loading...'}</BalanceText>
          </BalanceInfo>
        </BalanceContent>
     
        { 
          /** Manipulo visibilidade e monto grid com as transações do cliente
           * utilizando uma lib que monta o grid através de uma massa de dados
           */
          !isLoading && transactions && transactions.length > 0 && 
            <ReactFlexyTable className="table-transacitons"
            data={transactions ?? []}
            nonFilterCols={["value","typeTransaction"]} 
            filterable
            pageSizeOptions={[5, 10]}
            previousText="Anterior"
            nextText="Próxima"
            rowsText=" "
            pageText=" Página"
            ofText="de "
            filteredDataText="Resultados filtrados "
            totalDataText="Total de registros "
            />
        }
      </Content>
    </Container>
  );
}

export default TransactionsList;