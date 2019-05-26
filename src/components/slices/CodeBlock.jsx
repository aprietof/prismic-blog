import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Content = styled.div`
  margin: ${props => props.theme.margin.center};
  max-width: ${props => props.theme.maxWidthText};
  padding-bottom: ${props => props.theme.contentSeparator};
`;

const CodeBlock = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />;

export default CodeBlock;

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
};
