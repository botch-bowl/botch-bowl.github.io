import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Index from '../Header';
import './reset.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Index siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem'
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;