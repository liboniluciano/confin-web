import React from 'react';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css"

import dataSet from './data.json';

import { Container, Content, BalanceContent ,BalanceInfo, BalanceText } from './styles';

const data = dataSet

export default function TransactionsList () {
 
  return (
    <Container>
      <Content>
        <BalanceContent>
          <BalanceInfo>
            <BalanceText>Income: R$ 3.000,00</BalanceText>
          </BalanceInfo>
          <BalanceInfo>
            <BalanceText>Outcome: R$ 2.000,00</BalanceText>
          </BalanceInfo>
          <BalanceInfo>
            <BalanceText>Balance: R$: 1.000,00</BalanceText>
          </BalanceInfo>
        </BalanceContent>
     
        <ReactFlexyTable 
          data={data} 
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
      </Content>
    </Container>
    
  );
}
