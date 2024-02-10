import { useSelector } from 'react-redux';

import { selectAuthAuthenticated } from 'redux/auth/selectors';

import { NavList, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </li>
          ) : (
            <>
              <li>
                <StyledNavLink to="/register">Sign up</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/login">Sign in</StyledNavLink>
              </li>
            </>
          )}
        </NavList>
      </nav>
    </>
  );
};
