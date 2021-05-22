import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Layout.css';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  toolbarTitle: string;
}

const Layout: React.FC<LayoutProps> = ({title, children, toolbarTitle}) => {
  // const [james, setJames] = React.useState<number>(2);
  return (
    <IonPage className="layout">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{toolbarTitle}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Layout;
