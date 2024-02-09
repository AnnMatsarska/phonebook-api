// import { Link } from 'react-router-dom';
import { Title, SubTitle, Wrapper, SpanText, StyledLink } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

const HomePage = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <>
      <Wrapper>
        <Title>
          Welcome to the Online Phone<SpanText>BOOK</SpanText>
        </Title>

        {isAuthenticated ? (
          <SubTitle>CREATE - STORE - FIND</SubTitle>
        ) : (
          <SubTitle>
            <StyledLink to="/register">Register </StyledLink>
            <span style={{ margin: '0 5px' }}>or</span>
            <StyledLink to="/login"> sign in</StyledLink>
            <span style={{ margin: '0 5px' }}>to manage your contacts.</span>
          </SubTitle>
        )}
      </Wrapper>
    </>
  );
};

export default HomePage;
