import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, title, noindex }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const metaDeafault = [
    {
      name: 'description',
      content: metaDescription
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: metaDescription
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata?.author || ''
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: metaDescription
    }
  ];

  if (noindex) {
    metaDeafault.concat({
      name: 'robots',
      content: 'noindex'
    });
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : null}
      meta={metaDeafault.concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  noindex: false,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  noindex: PropTypes.bool
};

export default Seo;
