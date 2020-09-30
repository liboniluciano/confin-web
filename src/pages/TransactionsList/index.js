import React, { useEffect, useState } from 'react';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css"

import api from '../../services/api';
import { Container, Content, BalanceContent ,BalanceInfo, BalanceText } from './styles';

const TransactionsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);

    const getUserTransactions = async () => {
      const response = await api.get('/usersTransactions', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('@AppConFin:token')}`
        }
      });

      setTransactions(response.data);
      console.log('response.data: ', response.data.length);
    }
  
    const getUserBalance = async () => {
      const response = await api.get('/balance', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('@AppConFin:token')}`
        }
      });

      setBalance(response.data.balance);
      console.log('api balance', response.data);
    }

  useEffect(() => {
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
          !isLoading && transactions && transactions.length > 0 && 
            <ReactFlexyTable 
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