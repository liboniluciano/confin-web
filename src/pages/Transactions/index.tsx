import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Container, Fieldset, Title, Form, FormItems, Input, LabelError, Button, LabelInput, Select, OptionSelect, ButtonsContainer,
} from './styles';

import Header from '../../components/Header';

interface IFormInput {
  name: string;
  value: number;
  typeTransaction: number;
}

interface TypeTransaction {
  id: number;
  name: string;
}

const Transactions: React.FC = () => {
  const [typeTransaction, setTypeTransaction] = useState([]);

  /** Responsável por buscar os tipos de transação, salvar em um estado e mostrar no option */
  const findTypesTransactions = async () => {
    const transactions = await api.get('/typesTransactions');

    setTypeTransaction(transactions.data);
  };

  /** Toda vez que a tela é carregada, busca as transações do cliente */
  useEffect(() => {
    findTypesTransactions();
  }, []);

  /** API do react-hook-form */
  const {
    register, handleSubmit, errors, reset,
  } = useForm<IFormInput>();

  const onSubmit = handleSubmit(async ({ name, value, typeTransaction }: IFormInput) => {
    /** Tento criar uma nova transação (token já foi inserido quando loga -> contexto) */
    const request = await api.post('/usersTransactions', {
      name,
      value,
      typeTransaction,
    }).then((response) => {
      console.log(response);
      return response;
    }).catch((err) => {
      console.log(err);
      return err.response;
    });

    /** Mensagem para o cliente de acordo com a requisição */
    if (request.status === 201) {
      toast.success('Transação criada com sucesso!');
    }

    if (request.status === 401) {
      toast.error(request.data.erro);
    }

    /** Limpo o formulário */
    reset();
  });

  return (
    <Container>
      <Header />
      <Fieldset>
        <Title>Cadastrar Transação</Title>
        <Form onSubmit={onSubmit} id="create-transaction">

          <FormItems>
            <LabelInput>Nome</LabelInput>
            <Input
              className="input"
              name="name"
              ref={register({
                required: 'Campo obrigatório',
              })}
            />
            <LabelError>{errors.name && errors.name.message}</LabelError>
          </FormItems>

          <FormItems className="form-items">
            <LabelInput>Valor</LabelInput>
            <Input
              name="value"
              type="text"
              ref={register({
                pattern: {
                  value: /^[0-9]{1,6}(\\.\\d{1,2})?$/,
                  message: 'São válidos valores numéricos',
                },
                required: 'Campo obrigatório',
              })}
            />
            <LabelError>{errors.value && errors.value.message}</LabelError>
          </FormItems>

          <FormItems className="form-items">
            <LabelInput>Tipo Transação</LabelInput>
            <Select
              name="typeTransaction"
              ref={register({
                required: 'Campo obrigatório',
              })}
            >
              {typeTransaction.map((types: TypeTransaction) => (
                <OptionSelect key={types.id} value={types.id}>{types.name}</OptionSelect>
              ))}
            </Select>
          </FormItems>

          <ButtonsContainer>
            <Button type="submit" onSubmit={onSubmit}>Cadastrar</Button>
            <Link to="/transactions">
              <Button type="button" onSubmit={onSubmit}>Saldo</Button>
            </Link>
          </ButtonsContainer>

        </Form>
      </Fieldset>

    </Container>
  );
};

export default Transactions;
