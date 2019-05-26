import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

const Content = styled.div`
  margin: ${props => props.theme.margin.center};
  max-width: ${props => props.theme.maxWidthText};
  padding-bottom: ${props => props.theme.contentSeparator};

  small {
    display: block;
    margin: ${props => `${props.theme.margin.top.small} auto 0`};
    max-width: ${props => props.theme.maxWidthText};
  }
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
