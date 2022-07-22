import './index.css'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios';
import placeHolderImg from '../images/ph.jpg'
import {IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonItem,
  IonBadge,
  IonLabel,
  IonPage
} from '@ionic/react'
import Spinner from '../components/Spinner'
const ShowDetail: React.FC = () => {
    const {id}=useParams<{id:string;}>();
    const [detail,setDetail]=useState({
      name:"",
      summary:"",
      premiered:"",
      genres:[],
      image:{
        medium:""
      },
      rating:{
        average:0
      }
    });
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
      getDetail(id)
    },[id]);
    const getDetail=async(showId:string)=>{
      setIsLoading(true);
      const {data}=await axios.get(`https://api.tvmaze.com/shows/${showId}`);
      setDetail(data);
      setIsLoading(false);
      }
    
    return (
      <IonPage>
      <IonContent fullscreen>
      <div className='detail-container'>
        {
          isLoading?<Spinner/>:
          <IonGrid>
            <IonRow>
              <IonCol className={'justify-center'}>
                 <img className='show-img' src={detail.image==null?placeHolderImg:detail.image.medium} alt="picture with kittens"/>
              </IonCol>
              <IonCol>
              <div className='detail-content'>
                  <h2 className='detail-heading'>{detail.name}</h2>
                  <p className='detail-text'>
                    {detail.summary}
                  </p>
                  <IonItem>
                    <IonLabel>Premiered</IonLabel>
                    <IonBadge color={'medium'}>{detail.premiered}</IonBadge>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Language</IonLabel>
                    <IonBadge color={'light'}>English</IonBadge>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Genres</IonLabel>
                    {
                      detail.genres.length===0?<IonBadge color={'primary'}>Not specified</IonBadge>:
                      detail.genres.map(genre=><IonBadge color={'primary'}>{genre}</IonBadge>)
                    }
                    
                  </IonItem>
                  <IonItem>
                    <IonLabel>Rating</IonLabel>
                    <IonBadge color={'warning'}>{detail.rating.average===null?"Not specified":detail.rating.average}</IonBadge>
                  </IonItem>
              </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        }
          
          
          </div>
          </IonContent>
          </IonPage>
     
    );
  };
  
  export default ShowDetail;