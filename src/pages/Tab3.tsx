import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Api from '../middleware/Api';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='font-raleway padd-title' size='large'>OTHERS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">OTHERS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Api/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
