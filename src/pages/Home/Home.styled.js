import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 300px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;

  font-family: Helvetica Neue;

  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-top: 150px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: var(--primary-color-violet);

  @media only screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

export const SubTitle = styled.h3`
  margin-top: 26px;
  font-size: 18px;
  font-weight: 400;
  color: var(--primary-color-yellow);

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SpanText = styled.span`
  font-weight: 700;
  color: var(--primary-color-yellow);
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: var(--primary-color-violet);
`;
