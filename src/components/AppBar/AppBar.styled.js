import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding: 15px 15px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 900px;
    padding: 33px;
  }
`;
export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
