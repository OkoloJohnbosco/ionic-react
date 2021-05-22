import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';

const Wallet: React.FC = () => {
  return (
    <Layout title="Wallet" toolbarTitle="Tab 2">
      <ExploreContainer children="Wallet Page" />
    </Layout>
  );
};

export default Wallet;
