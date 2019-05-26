import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import getVideoId from 'get-video-id';
import ResponsiveIframe from '../ResponsiveIframe';

export default function Embed({ input }) {
  const {
    primary: {
      content: { provider_name: providerName, title, embed_url: url },
    },
  } = input;

  return (
    <Content>
      {(() => {
        switch (providerName) {
          case 'YouTube':
            return (
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/${getVideoId(url).id}?feature=oembed`}
                title={title}
              />
            );

          default:
            return (
              <p>
                {providerName} : {url}
              </p>
            );
        }
      })()}
    </Content>
  );
}

Embed.propTypes = {
  input: PropTypes.object.isRequired,
};

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
  margin: ${props => props.theme.margin.center};
  padding-bottom: ${props => `calc(${props.theme.contentSeparator} / 4)`};
`;
