import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import { Container, Fieldset, Title, Form, FormItems, Input, Button, LabelInput } from './styles';

interface IFormInput {
  name: string;
  mail: string;
  password: number;
}


const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = handleSubmit(({ name, mail, password }: IFormInput) => {
    console.log(name, mail);
  });

  return(
    <Container>
      <Fieldset>
      <Title>Entrar</Title>
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
          {errors.name && errors.name.message}
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
          {errors.mail && errors.mail.message}
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
          {errors.password && errors.password.message}

        </FormItems>
        <FormItems className="form-items">
          <Button type='submit' onSubmit={onSubmit}>Entrar</Button>
        </FormItems>
        <FormItems className="form-items">
          <Link to="/">Voltar</Link>
        </FormItems>

      </Form>
      </Fieldset>

    </Container>
  );
}

export default SignUp;