import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
  margin: ${props => props.theme.margin.center};

  p {
    font-size: 17px;
    color: ${props => props.theme.colors.greyBlueDark};
    letter-spacing: 0.2px;
    line-height: 1.8;
    margin-bottom: ${props => props.theme.contentSeparator};
  }
`;

const BodyText = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />;

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};
