import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ShowCard from '../components/ShowCard';
import PageHeader from '../components/PageHeader';
import Spinner from '../components/Spinner';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './index.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  const [shows,setShows]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
     getShows();
  },[])
  const getShows=async()=>{
    setIsLoading(true);
    const {data}=await axios.get('https://api.tvmaze.com/schedule/full',
    {params:{_limit:20}});
    setShows(data);
    setIsLoading(false);
  }
 

  return (
    <IonPage>
      <IonContent fullscreen>
        {
          isLoading?<Spinner/>:
          shows.map((show)=>{
            return show['_embedded']['image']!==null?<ShowCard key={show['id']} show={show}/>:<></>
        })
        }
       </IonContent>
    </IonPage>
  );
};

export default Page;
