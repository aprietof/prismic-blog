import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: ${props => props.theme.margin.center};
`;

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
    <small>{input.primary.caption}</small>
  </Content>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired,
};
