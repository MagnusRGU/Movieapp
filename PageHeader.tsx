import {
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './PageHeader.css';

interface ContainerProps {
  name: string;
}

const PageHeader: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader mode='ios' collapse='fade' translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class='ion-title'>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default PageHeader;
