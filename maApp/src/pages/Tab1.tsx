import { IonContent, IonHeader, IonPage, IonModal, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton  } from '@ionic/react';
import './Tab1.css';
import {useForm} from "react-hook-form"
import React, { useState } from 'react';

const Tab1: React.FC = () => {


  const initialValues = {
    input_id1:"",
    input_id2: "", 
    input_id3:""
  }

  const {register, handleSubmit}= useForm({
    defaultValues : initialValues
  })

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data, null, 2));
  };
  

  const [showModal, setShowModal] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Input practises</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            Test Input Form
          </IonCardHeader>


          <IonContent>
            <IonModal isOpen={showModal}>
              <IonButton onClick={() => setShowModal(false)}>
                  Close Modal
              </IonButton>
            </IonModal>
          </IonContent>


          <form onSubmit={handleSubmit(onSubmit)}>
          <IonCardContent>
            <IonItem>
                <IonLabel>Title1</IonLabel>
                <IonInput {...register("input_id1", { required: true })}  />
            </IonItem>
            <IonItem>
                <IonLabel>Title2</IonLabel>
                <IonInput {...register("input_id2", { required: true })} />
            </IonItem>
            <IonItem>
                <IonLabel>Title3</IonLabel>
                <IonInput {...register("input_id3", { required: true })}  />
            </IonItem>
          <IonButton type="submit">SAVE</IonButton>
          </IonCardContent>
          </form>


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
