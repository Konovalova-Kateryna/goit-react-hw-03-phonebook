import styled from 'styled-components';

export const ContactFormStyle = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  border-radius: 4px;
  padding: 5px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  &:hover,
  &:active,
  &:focus-visible {
    border-color: violet;
    border: 2px solid violet;
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Label = styled.label`
  font-size: 18px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const ContactFormBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
`;
