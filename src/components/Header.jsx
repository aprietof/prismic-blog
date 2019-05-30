import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const StyledHeader = styled.header`
  padding-bottom: 2rem;
  a {
    color: ${props => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`;

function Header({ invert }) {
  return (
    <StyledHeader invert={invert}>
      <Link to="/">adrianprieto.com</Link>
    </StyledHeader>
  );
}

export default Header;

Header.propTypes = {
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};
