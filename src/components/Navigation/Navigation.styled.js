import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;

  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Helvetica Neue;
  color: var(--primary-color-violet);
  font-weight: 700;
  font-size: 20px;
  outline: none;
  padding: 8px 12px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  transition: all 300ms;

  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow-transparent);

    border-radius: 15px;
  }

  &.active {
    background-color: var(--secondary-color-yellow-transparent);

    border-radius: 15px;
  }
`;
