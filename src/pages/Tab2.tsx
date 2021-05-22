import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Layout from '../components/Layout';

const Tab2: React.FC = () => {
  return (
    <Layout title="Games" toolbarTitle="Tab 2">
      <ExploreContainer children="Market Page" />
    </Layout>
  );
};

export default Tab2;
