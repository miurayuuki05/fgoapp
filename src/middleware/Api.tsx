import { IonText, IonPage } from "@ionic/react";


const fetchData = async () => {
    try {
        const response = await fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

fetchData().then(data => data.map((item: any) => console.log(item.battleName)));

const Api : React.FC = () => {
    return (
        <IonPage>
            <IonText>{}</IonText>
        </IonPage>
    );
}

export default Api;