import { IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel

   } from '@ionic/react';
import {useState,useEffect} from 'react';
import './Favourite.css';

const Favourite: React.FC = () => {
  const [favList,setFavList]=useState([]);
  useEffect(()=>{
    const favouriteList=JSON.parse(localStorage.getItem('favourites')||'[]');
    setFavList(favouriteList);
  },[]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
          {
          favList.map(show=>{
            return(
              <IonCol>
              <IonCard>
              <IonCardHeader>
                <IonImg src={show['image']['original']}/>
              </IonCardHeader>
    
              <IonCardContent>
                <IonLabel>{show['name']}</IonLabel>
                <p>
                {show['summary']}
                </p>
          </IonCardContent>
            </IonCard>
            </IonCol>
            )
          })
        }
          </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Favourite;
