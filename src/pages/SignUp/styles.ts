import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
`;

export const Fieldset = styled.fieldset`
  border: none;
  width: 30rem;
  height: 50rem;
  margin-top: 3rem;

  @media(min-width: 70rem){
    width: 80rem;
    height: 60rem;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font: 700 3rem Poppins;
  @media(min-width: 70rem){
    font: 700 5rem Poppins;
  }
`;

export const Form = styled.form`

`;

export const FormItems = styled.div``;

export const LabelInput = styled.label`
  color: #fff;
`;

export const Input = styled.input`
  text-align: center;
  height: 5rem;
  width: 25rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #000;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  @media(min-width: 70rem){
    height: 7rem;
    width: 50rem;
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  font-size: 2.5rem;
  color: #FFF;
  margin-top: 3rem;
  width: 25rem;
  height: 5rem;
  background: #1f4068;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 1.6;
`;