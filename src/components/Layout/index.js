import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
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
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
