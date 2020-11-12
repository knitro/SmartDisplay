import React from 'react';

import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import './FooterTabs.css';
import { searchOutline, heartOutline, cogOutline } from 'ionicons/icons';

/**
 * Creates the Default FooterTabs of the App.
 */
const FooterTabs: React.FC = () => {
  return (
    <IonTabBar slot="bottom">

        {/*Tab 1: QuickSearch*/}
        <IonTabButton tab="QuickSearch" href="/quick-search">
          <IonIcon icon={searchOutline} />
          <IonLabel>Quick Search</IonLabel>
        </IonTabButton>

        {/*Tab 2: Life Counter*/}
        <IonTabButton tab="LifeCounterNewGame" href="/life-counter/new-game">
          <IonIcon icon={heartOutline} />
          <IonLabel>Life Counter</IonLabel>
        </IonTabButton>

        {/*Tab 3: Settings*/}
        <IonTabButton tab="Settings" href="/settings">
          <IonIcon icon={cogOutline} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>

    </IonTabBar>
  );
};

export default FooterTabs;