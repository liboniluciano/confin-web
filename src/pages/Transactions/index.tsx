import React from 'react';
import { useForm } from "react-hook-form";

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput, Select, OptionSelect } from './styles';

interface IFormInput {
  name: string;
  value: number;
}

const Transactions: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = handleSubmit(({ name, value }: IFormInput) => {
    console.log(name, value);
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
          <Input name="password" type="password" ref={register({ 
            required: "Campo obrigatório",
          })} 
          />
          {errors.value && errors.value.message}
        </FormItems>
        <FormItems>
          <LabelInput>Tipo Transação</LabelInput>
          <Select>
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
          <Button type='button' onSubmit={onSubmit}>Saldo</Button>
        </FormItems>
      </Form>
      </Fieldset>

    </Container>
  );
}

export default Transactions;