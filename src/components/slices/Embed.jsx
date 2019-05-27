import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import getVideoId from 'get-video-id';
import { Tweet } from 'react-twitter-widgets';
import getTweetId from 'twitter-url-parser';
import ResponsiveIframe from '../ResponsiveIframe';

export default function Embed({ input }) {
  const {
    primary: {
      content: { provider_name: providerName, title, embed_url: url, html },
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
          case 'Twitter':
            return (
              <IframeWrapper>
                <Tweet tweetId={getTweetId(url).id} />
              </IframeWrapper>
            );
          case 'Vimeo':
            return <ResponsiveIframe src={`https://player.vimeo.com/video/${getVideoId(url).id}`} title={title} />;

          default:
            return <DefaultEmbed dangerouslySetInnerHTML={{ __html: html }} />;
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
  margin: ${props => `0 auto ${props.theme.contentSeparator}`};
`;

const IframeWrapper = styled.div`
  margin: ${props => props.theme.margin.center};
  max-width: 500px;
`;

const DefaultEmbed = styled.div`
  display: block;
  margin: ${props => props.theme.margin.center};
  max-width: 100%;
`;
