import * as React from 'react';
import Layout from 'src/components/Layout';
import MembershipForm from 'src/sections/MembershipForm';
import Seo from 'src/components/Seo';

const MembershipPage = () => (
  <Layout>
    <Seo title="Mitgliedschaft" />
    <MembershipForm />
  </Layout>
);

export default MembershipPage;
