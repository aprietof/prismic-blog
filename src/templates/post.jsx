import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Layout, Listing, Wrapper, PostContent, Title, SEO, Header } from 'components';
import Image from '../components/Image';
import Categories from '../components/Listing/Categories';
import website from '../../config/website';

const Hero = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  max-width: ${props => props.theme.maxWidthText};
  margin: ${props => `0 auto ${props.theme.contentSeparator}`};
  padding-top: 1rem;

  span {
    color: ${props => props.theme.colors.greyLighter};
    font-size: 0.9rem;
    margin-right: 10px;
  }

  a {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    font-weight: normal;
    height: 36px;
    letter-spacing: 0.3px;
    line-height: 17px;
    min-width: 200px;
    padding: 4px 12px;
    text-align: center;
    white-space: nowrap;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 999px inset;
      text-decoration: none;
      transition: box-shadow 0.2s ease-in-out;
    }
  }
`;

const PostTitle = styled.h1`
  max-width: ${props => props.theme.maxWidthText};
  margin: ${props => props.theme.margin.center};
`;

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost;
  let categories = false;
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name);
  }

  return (
    <Layout>
      <SEO title={`${data.title.text} | ${website._title}`} pathname={location.pathname} article />
      <Hero>
        <Wrapper>
          <Header />
        </Wrapper>
      </Hero>
      <Wrapper>
        <PostTitle>{data.title.text}</PostTitle>
        <Headline>
          <span>{data.date}</span> {categories && <Categories categories={categories} />}
        </Headline>
        <Image image={data.featured_image.localFile} />
        <PostContent slices={data.body} />
        <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
        <Listing posts={posts.edges} />
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            extension
            publicURL
          }
        }
        title {
          text
        }
        date(formatString: "DD.MM.YYYY")
        categories {
          category {
            document {
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyEmbed {
            slice_type
            id
            primary {
              content {
                embed_url
                height
                html
                provider_name
                title
                width
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              caption
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
