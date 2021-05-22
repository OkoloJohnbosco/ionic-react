import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <Layout title="Trades" toolbarTitle="Tab 2">
      <ExploreContainer children="Trading Page" />
    </Layout>
  );
};

export default Tab3;
