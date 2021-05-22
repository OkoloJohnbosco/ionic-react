import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, {useState, useEffect} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';
import './Tab1.css';
import {calculator, refresh} from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);

  const calculateBmi = () => {
    if (!height && !weight) {
      return;
    }
    let answer = weight / (height * height);
    setBmi(answer);
  };

  const clearForm = () => {
    setHeight(0);
    setWeight(0);
    setBmi(0);
  };
  return (
    <Layout title="Home" toolbarTitle="Tab 2">
      <ExploreContainer>
        <IonHeader className="ion-margin-bottom">
          <IonToolbar>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="floating">Your Height</IonLabel>
          <IonInput
            type="number"
            value={!height ? '' : height}
            onIonChange={(e) => setHeight(parseInt(e.detail.value!))}
          ></IonInput>
        </IonItem>
        <IonItemDivider>Paschal Sam</IonItemDivider>
        <IonItem>
          <IonLabel position="floating">Your Weight</IonLabel>
          <IonInput
            type="number"
            value={!weight ? '' : weight}
            onIonChange={(e) => setWeight(parseInt(e.detail.value!))}
          ></IonInput>
        </IonItem>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol>
              <IonButton color="primary" fill="outline" onClick={calculateBmi}>
                <IonIcon icon={calculator} slot="start" />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="danger" fill="outline" onClick={clearForm}>
                <IonIcon icon={refresh} slot="start" />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {!!bmi && (
          <IonCard>
            <IonCardContent>{bmi}</IonCardContent>
          </IonCard>
        )}
      </ExploreContainer>
    </Layout>
  );
};

export default Tab1;
