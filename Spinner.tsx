import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';
import './Spinner.css'
const Spinner: React.FC = () => {
return(
    <div className='spinner-container'>
    <h1>Loading...</h1>
    <IonSpinner color={'warning'} name='crescent'/>
    </div>
  )
};

export default Spinner