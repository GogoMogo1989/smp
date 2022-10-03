import { IonContent, IonHeader, IonPage, IonModal, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton  } from '@ionic/react';
import './Tab1.css';
import {useForm} from "react-hook-form"
import React, { useState } from 'react';

const Tab1: React.FC = () => {


  const {register, handleSubmit, formState: {errors}} = useForm()

 
  const onSubmit = (data:any) => {
    alert(JSON.stringify(data, null, 2));
  };


  const [title1, setTitle] = useState("")
  const [title2, setTitle2] = useState("")
  const [title3, setTitle3] = useState("")
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kovács-Farkas Dávid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            SMP Trial task, React + Ionic
          </IonCardHeader>


          <IonContent>
            <IonModal isOpen={showModal}>
              <p>"input_id1":"{title1}"</p>
              <p>"input_id2":"{title2}"</p>
              <p>"input_id3":"{title3}"</p>
              <IonButton onClick={() => setShowModal(false)}>
                  Close
              </IonButton>
            </IonModal>
          </IonContent>


          <form onSubmit={handleSubmit(onSubmit)}>
          <IonCardContent>
            <IonItem>
                <IonLabel>Input_ID1</IonLabel>
                <IonInput required 
                          value={title1}
                          onIonInput = {(e:any) => setTitle(e.target.value)}
                          {...register("input_id1", { required: true })}
                          />
            </IonItem>
            <IonItem>
                <IonLabel>Input_ID2</IonLabel>
                <IonInput required 
                          value={title2}
                          onIonInput = {(e:any) => setTitle2(e.target.value)}
                          {...register("input_id2", { required: true })} />
            </IonItem>
            <IonItem>
                <IonLabel>Input_ID3</IonLabel>
                <IonInput required 
                          value={title3}
                          onIonInput = {(e:any) => setTitle3(e.target.value)}
                          {...register("input_id3", { required: true })}  />
            </IonItem>
            <IonButton type="submit" onClick={()=>setShowModal(true)}>Submit</IonButton>
          </IonCardContent>
          </form>


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
