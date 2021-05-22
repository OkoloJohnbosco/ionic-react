import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';
import {IonButton} from '@ionic/react';

const Futures: React.FC = () => {
  return (
    <Layout title="Futures" toolbarTitle="futures">
      <ExploreContainer>
        <IonButton color="primary">Boss</IonButton>
        <p>Futures Page</p>
      </ExploreContainer>
    </Layout>
  );
};

export default Futures;
