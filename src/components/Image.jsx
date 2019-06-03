import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

export default function Image({ image }) {
  const { alt, childImageSharp, extension, publicURL } = image;

  if (!childImageSharp && extension === 'svg') return <img src={publicURL} alt={alt} />;
  return <Img fluid={childImageSharp.fluid} />;
}

Image.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
  }).isRequired,
};
