import styled from 'styled-components';

// -----------Form Component------//

export const Form = styled.form`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  color: var(--primary-color-violet);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
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
    width: 328px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 20px;

  padding: 6px 8px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background-color: var(--primary-color-yellow);
  border: none;
  border-radius: 6px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &: hover {
    background-color: var(--primary-color-violet);
  }
`;
