import styled from 'react-emotion';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 0 2rem;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 0 1.5rem;
  }
`;

export default Wrapper;
