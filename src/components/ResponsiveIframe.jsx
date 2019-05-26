import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

export default function ResponsiveIframe({ src, title }) {
  return (
    <Wrapper>
      <iframe allowFullScreen frameBorder="0" height="100%" src={src} title={title || ''} width="100%" />
    </Wrapper>
  );
}

ResponsiveIframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ResponsiveIframe.defaultProps = {
  title: '',
};

const Wrapper = styled.div`
  height: 0;
  margin-bottom: 20px;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    left: 0;
    position: absolute;
    top: 0;
  }
`;
