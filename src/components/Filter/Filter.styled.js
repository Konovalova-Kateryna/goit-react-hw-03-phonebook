import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;

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
export const FilterLabel = styled.label`
  display: flex;
`;
