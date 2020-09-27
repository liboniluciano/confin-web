import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput } from './styles';

interface IFormInput {
  mail: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = handleSubmit(({ mail, password }: IFormInput) => {
    console.log(password, mail);
  });

  return(
    <Container>
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
          {errors.mail && errors.mail.message}
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
          {errors.password && errors.password.message}

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