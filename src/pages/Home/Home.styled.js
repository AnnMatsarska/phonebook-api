import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 600px;

  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;

  font-family: Helvetica Neue;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: var(--primary-color-violet);
`;

export const SubTitle = styled.h3`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 400;
  color: var(--primary-color-yellow);
`;

export const SpanText = styled.span`
  font-weight: 700;
  color: var(--primary-color-yellow);
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: var(--primary-color-violet);

  &:hover,
  &:focus {
  }
`;
