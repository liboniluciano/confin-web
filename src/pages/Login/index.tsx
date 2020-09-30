import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';

import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput, LabelError } from './styles';

interface IFormInput {
  mail: string;
  password: string;
}

const Login: React.FC = () => {
  const context = useAuth();

  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = handleSubmit(async ({ mail, password }: IFormInput) => {

    /** Solução provisória */
    const request = await api.post('/session', {
      mail,
      password
    }).then((response) => {
      return response;
    }).catch((err) => {
      return err.response;
    });

    if (request.status === 401) {
      toast.error(request.data.message);
      return;
    }

    context.Login(mail, password);
  });

  return (
    <Container>
      <Header />
      <Fieldset>
        <Title>Entrar</Title>
        <Form onSubmit={onSubmit}>

          <FormItems>
            <LabelInput>E-mail</LabelInput>
            <Input name="mail" type="email" ref={register({
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido"
              }
            })}
            />
            <LabelError>{errors.mail && errors.mail.message}</LabelError>
          </FormItems>

          <FormItems>
            <LabelInput>Senha</LabelInput>
            <Input name="password" type="password" ref={register({
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

          <FormItems>
            <Button type='submit' onSubmit={onSubmit}>Entrar</Button>
          </FormItems>

          <FormItems>
            <Link to="/signUp">Desejo me cadastrar</Link>
          </FormItems>

        </Form>
      </Fieldset>
    </Container>
  );
}

export default Login;