import './Tab2.css';
import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom'; // import RouteComponentProps
import './Tab2.css';
import { withRouter } from 'react-router';

interface Servant {
  id: number;
  name: string;
  class: string;
  rarity: number;
  atkMax: number;
  hpMax: number;
  cost: number;
  attribute: string;
  growthCurve: string;
  cards: string[];
  np: {
    name: string;
    rank: string;
    type: string;
    detail: string;
  };
}

const Tab2: React.FC<RouteComponentProps> = ({ history }) => { // add RouteComponentProps to the component props
  const [servants, setServants] = useState<Servant[]>([]); // add Servant[] as the type for the state

  useEffect(() => {
    fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
      .then(response => response.json())
      .then(data => setServants(data));
  }, []);

  // const handleServantClick = (servant: Servant) => { // create a function to handle the click event
  //   history.push(ServantDetails); // navigate to the servant details page with the servant object as a parameter
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='font-raleway padd-title' size='large'>SERVANTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SERVANTS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList> 
          {servants.map((servant: Servant) => (
            <IonItem key={servant.id} routerLink='/ServantDetails' /*onClick={() => handleServantClick(servant)}*/> 
              <IonLabel>{servant.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

interface ServantDetailsProps {
  servant: Servant; // add the servant prop with the Servant type
}

const ServantDetails: React.FC<ServantDetailsProps> = ({ servant }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='font-raleway padd-title' size='large'>{servant.name}</IonTitle> {/* display the servant name as the title */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{servant.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Class:</IonLabel>
            <IonLabel>{servant.class}</IonLabel> {/* display the servant class */}
          </IonItem>
          <IonItem>
            <IonLabel>Rarity:</IonLabel>
            <IonLabel>{servant.rarity}</IonLabel> {/* display the servant rarity */}
          </IonItem>
          <IonItem>
            <IonLabel>Max ATK:</IonLabel>
            <IonLabel>{servant.atkMax}</IonLabel> {/* display the servant max ATK */}
          </IonItem>
          <IonItem>
            <IonLabel>Max HP:</IonLabel>
            <IonLabel>{servant.hpMax}</IonLabel> {/* display the servant max HP */}
          </IonItem>
          <IonItem>
            <IonLabel>Cost:</IonLabel>
            <IonLabel>{servant.cost}</IonLabel> {/* display the servant cost */}
          </IonItem>
          <IonItem>
            <IonLabel>Attribute:</IonLabel>
            <IonLabel>{servant.attribute}</IonLabel> {/* display the servant attribute */}
          </IonItem>
          <IonItem>
            <IonLabel>Growth Curve:</IonLabel>
            <IonLabel>{servant.growthCurve}</IonLabel> {/* display the servant growth curve */}
          </IonItem>
          <IonItem>
            <IonLabel>Cards:</IonLabel>
            <IonLabel>{servant.cards.join(', ')}</IonLabel> {/* display the servant cards */}
          </IonItem>
          <IonItem>
            <IonLabel>NP:</IonLabel>
            <IonLabel>{servant.np.name}</IonLabel> {/* display the servant NP name */}
          </IonItem>
          <IonItem>
            <IonLabel>NP Rank:</IonLabel>
            <IonLabel>{servant.np.rank}</IonLabel> {/* display the servant NP rank */}
          </IonItem>
          <IonItem>
            <IonLabel>NP Type:</IonLabel>
            <IonLabel>{servant.np.type}</IonLabel> {/* display the servant NP type */}
          </IonItem>
          <IonItem>
            <IonLabel>NP Detail:</IonLabel>
            <IonLabel>{servant.np.detail}</IonLabel> {/* display the servant NP detail */}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};


export default withRouter (Tab2);
