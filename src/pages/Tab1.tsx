import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../global.css'
import { Route } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import Tab2 from './Tab2';
import { IonButton } from '@ionic/react';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter> */}

      <IonHeader>
        <IonToolbar>
          <IonTitle className='font-raleway padd-title' size='large'>PLANNER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PLANNER</IonTitle>
          </IonToolbar>
        </IonHeader> 
        
      <IonTitle className='font-raleway my-10'>EVENTS</IonTitle>
      <IonCard color="light" className='padd-2 marg-5'>
        <IonButton href='/Tab2' color={'light'}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERoL2JM3P9lpVBCnnSuvXqZF5wfdkjPJ4nJHgA3SToDH5WU8sqwkoCljkTEv8UZ-lYx4&usqp=CAU" width={1000} alt="Events"/>
        </IonButton>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
