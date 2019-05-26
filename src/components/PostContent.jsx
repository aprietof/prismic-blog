import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { prism } from 'styles';
import { BodyText, CodeBlock, Image, Quote } from './slices';

export default function PostContent({ slices }) {
  return (
    <PostContentWrapper>
      {slices.map(slice => {
        switch (slice.slice_type) {
          // These are the API IDs of the slices
          case 'text':
            return <BodyText key={slice.id} input={slice} />;
          case 'code_block':
            return <CodeBlock key={slice.id} input={slice} />;
          case 'image':
            return <Image key={slice.id} input={slice} />;
          case 'quote':
            return <Quote key={slice.id} input={slice} />;
          default:
            return null;
        }
      })}
    </PostContentWrapper>
  );
}

PostContent.propTypes = {
  slices: PropTypes.array.isRequired,
};

const PostContentWrapper = styled.div`
  ${prism};
  padding: 2rem 0;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 19px;
    line-height: 1.68;

    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  blockquote {
    padding-left: 1.45rem;
    border-left: 2px solid ${props => props.theme.colors.primary};
    p {
      font-size: 19px;
      font-style: italic;
    }
  }
`;
