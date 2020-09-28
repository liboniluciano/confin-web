import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import api from '../../services/api';

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput, Select, OptionSelect } from './styles';

interface IFormInput {
  name: string;
  value: number;
  typeTransaction: number;
}

const Transactions: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = handleSubmit(async ({ name, value, typeTransaction }: IFormInput) => {
    const data = { name, value, typeTransaction };

    console.log(data);
    const response = await api.post('/usersTransactions', {
      headers: {
        Authorization: sessionStorage.getItem('@AppConFin:token')
      },
      name,
      value, 
      typeTransaction
    });

    console.log(response.status);
  });

  return(
    <Container>
      <Fieldset>
      <Title>Cadastrar Transação</Title>
      <Form onSubmit={onSubmit}>
        <FormItems>
           <LabelInput>Nome</LabelInput>
          <Input name="name" ref={register({ 
            required: "Campo obrigatório",
            })} 
          />
          {errors.name && errors.name.message}
        </FormItems>
        <FormItems>
          <LabelInput>Valor</LabelInput>
          <Input name="value" type="text" ref={register({ 
            required: "Campo obrigatório",
          })} 
          />
          {errors.value && errors.value.message}
        </FormItems>
        <FormItems>
          <LabelInput>Tipo Transação</LabelInput>
          <Select name="typeTransaction" ref={register({ 
              required: "Campo obrigatório",
            })} >
            <OptionSelect value={1}>
              Income
            </OptionSelect>
            <OptionSelect value={2}>
              Outcome
            </OptionSelect>
          </Select>
        </FormItems>
        <FormItems>
          <Button type='submit' onSubmit={onSubmit}>Cadastrar</Button>
          <Link to="/teste">
            <Button type='button' onSubmit={onSubmit}>Saldo</Button>
          </Link>
        </FormItems>
      </Form>
      </Fieldset>

    </Container>
  );
}

export default Transactions;