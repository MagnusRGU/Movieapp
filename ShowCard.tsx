import './ShowCard.css';
import {  
   IonCard, 
   IonCardContent, 
   IonItem, 
   IonLabel, 
   IonButton,
   IonIcon,
  IonThumbnail,
  IonBadge,
  useIonAlert } from '@ionic/react';
import { eye,heart,heartOutline} from 'ionicons/icons';
import placeHolderImg from '../images/ph.jpg'

interface ContainerProps {
  show:{
    _embedded:{
      show:{
        id:number,
        name:string,
        summary:string,
        image:{
          original:string
        },
        status:string
      }
    }
  }
}

const ShowCard: React.FC<ContainerProps> = ({show}) => {
  const {_embedded}=show
  const [presentAlert]=useIonAlert();
  const handleLike=(show:object)=>{
      const favouriteList=JSON.parse(localStorage.getItem('favourites')||'[]');
      console.log(favouriteList);
      favouriteList.push(show);
      localStorage.setItem('favourites',JSON.stringify(favouriteList));
      presentAlert({
        header: 'Added!',
        message: `The show has been added to favourite list.`,
        buttons: ['OK']
      })
  }
  return (
    <IonCard className='w100'>
    <IonItem>
      <IonThumbnail slot='start' className='mr10'>
        <img src={_embedded.show.image!==null?
          _embedded.show.image.original:
          placeHolderImg} alt='thumbnail' />
      </IonThumbnail>
      <IonLabel className='card-label'>{_embedded.show.name}</IonLabel>
      <IonItem lines='none' slot='end'>
      <IonBadge  color={_embedded.show.status==='Running'?'tertiary':'warning'}>{_embedded.show.status}</IonBadge>
      <IonButton className={'ml5'} fill="outline" href={`/show-detail/${_embedded.show.id}`} ><IonIcon icon={eye} /></IonButton>
      <IonButton onClick={()=>handleLike(_embedded.show)} className={'ml5'} color='danger'  fill="outline"><IonIcon icon={heart} /></IonButton>
      </IonItem>
      
    </IonItem>

    <IonCardContent>
      {
        _embedded.show.summary
      }
    </IonCardContent>
  </IonCard>
  );
};

export default ShowCard;
