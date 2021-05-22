import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {statsChartOutline, star, newspaper, home, wallet} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Futures from './pages/Futures';
import Wallet from './pages/Wallet';

import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Tab1} exact={true} />
          <Route path="/market" component={Tab2} exact={true} />
          <Route path="/trades" component={Tab3} />
          <Route path="/futures" component={Futures} />
          <Route path="/wallet" component={Wallet} />

          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="market" href="/market">
            <IonIcon icon={statsChartOutline} />
            <IonLabel>Markets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trades" href="/trades">
            <IonIcon icon={star} />
            <IonLabel>Trades</IonLabel>
          </IonTabButton>

          <IonTabButton tab="futures" href="/futures">
            <IonIcon icon={newspaper} />
            <IonLabel>Futures</IonLabel>
          </IonTabButton>

          <IonTabButton tab="wallet" href="/wallet">
            <IonIcon icon={wallet} />
            <IonLabel>Wallet</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
