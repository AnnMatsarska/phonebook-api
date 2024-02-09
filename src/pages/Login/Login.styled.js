import Button from '@mui/material/Button';
import styled from '@emotion/styled';

export const StyledButton = styled(Button)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: var(--primary-color-violet);
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: var(--primary-color-yellow);
  }
  `}
`;
