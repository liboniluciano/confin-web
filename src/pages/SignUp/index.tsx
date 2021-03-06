import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import Header from '../../components/Header';

import api from '../../services/api';

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput, LabelError } from './styles';

interface IFormInput {
  name: string;
  mail: string;
  password: number;
}

const SignUp: React.FC = () => {
  /** Recurso para navegar entre as telas */
  const { push } = useHistory();

  /** API do react-hook-form */
  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = handleSubmit(async ({ name, mail, password }: IFormInput) => {
    /** Request para cadastrar o usuário */
    const request = await api.post('/users', {
      name,
      mail,
      password
    }).then((response) => {
      return response;
    }).catch((err) => {
      return err.response;
    });

    /** Se deu sucesso, redireciono para o Login */
    if (request.status === 201) {
      toast.success('Cadastro realizado com sucesso!');
      push('/');
    }
     
    /** Se deu erro, exibo a mensagem de erro (validações da API) */
    if (request.status === 400) {
      toast.error(request.data.message);
    }
  });

  return (
    <Container>
      <Header />
      <Fieldset>
        <Title>Cadastrar</Title>
        <Form onSubmit={onSubmit}>

          <FormItems className="form-items">
            <LabelInput>Nome</LabelInput>
            <Input className="input" name="name" ref={register({
              required: "Campo obrigatório",
              minLength: {
                value: 5,
                message: 'O nome deve possuir no mínimo 5 caracteres'
              },
              maxLength: {
                value: 40,
                message: 'O nome deve possuir no máximo 30 caracteres'
              }
            })}
            />
            <LabelError>{errors.name && errors.name.message}</LabelError>
          </FormItems>
          
          <FormItems className="form-items">
            <LabelInput>E-mail</LabelInput>
            <Input className="input" name="mail" type="email" ref={register({
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido"
              }
            })}
            />
            <LabelError>{errors.mail && errors.mail.message}</LabelError>
          </FormItems>

          <FormItems className="form-items">
            <LabelInput>Senha</LabelInput>
            <Input className="input" name="password" type="password" ref={register({
              required: "Campo obrigatório",
              minLength: {
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres'
              },
              maxLength: {
                value: 6,
                message: 'Senha deve ter no máximo 6 caracteres'
              }
            })}
            />
            <LabelError>{errors.password && errors.password.message}</LabelError>
          </FormItems>

          <FormItems className="form-items">
            <Button type='submit' onSubmit={onSubmit}>Criar conta</Button>
          </FormItems>
          
          <FormItems className="form-items">
            <Link to="/" style={{ textDecoration: 'none' }}>Voltar</Link>
          </FormItems>

        </Form>
      </Fieldset>

    </Container>
  );
}

export default SignUp;