import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-top: 30px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  width: 290px;

  border: 1px solid var(--primary-color-yellow);

  border-radius: 6px;
  margin-top: 6px;
  padding: 6px 8px;

  @media only screen and (min-width: 768px) {
    width: 317px;
  }
`;
