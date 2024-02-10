import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: var(--primary-color-violet);

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const SpanText = styled.span`
  font-weight: 700;
  color: var(--primary-color-yellow);
`;

export const Section = styled.section`
  font-family: Helvetica Neue;
  padding-top: 35px;
`;
