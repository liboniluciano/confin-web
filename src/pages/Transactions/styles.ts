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
  height: 55rem;
  margin-top: 3rem;

  @media (min-width: 70rem) {
    width: 80rem;
    height: 60rem;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font: 700 3rem Poppins;
  @media (min-width: 70rem) {
    font: 700 5rem Poppins;
  }
`;

export const Form = styled.form``;

export const FormItems = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  color: #fff;
`;

export const Input = styled.input`
  height: 5rem;
  width: 25rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #000;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  @media (min-width: 70rem) {
    height: 7rem;
    width: 50rem;
    font-size: 2rem;
  }
`;

export const LabelError = styled.label`
  color: #ea5455;
  font-size: 1.3rem;
  text-align: center;
`;

export const Select = styled.select`
  height: 5rem;
  width: 25rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #000;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  @media (min-width: 70rem) {
    height: 7rem;
    width: 50rem;
    font-size: 2rem;
  }
`;

export const OptionSelect = styled.option``;

export const ButtonsContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 3rem;
  width: 18rem;
  height: 5rem;
  background: #0f4c75;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 1.6;
`;
