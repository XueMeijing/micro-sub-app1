import { useNavigate } from 'react-router-dom'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/react'
import {
  filterOutline,
  addOutline
} from 'ionicons/icons'
import './index.less'

const Index = () => {
  const navigate = useNavigate()
  return (
    <>   
      <h1
        onClick={() => { 
          console.log(1111)
          window.location.hash = '/microReact/main/expenses'
        }}
      >
        ng Expenses
      </h1> 
      {/* <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
        color='light'
      >
        <h1 onClick={() => { 
          console.log(1111)
          window.location.hash = '/microReact/main/expenses'
        }}>ng xepens</h1>
      </IonContent> */}
    </>
  )
}

export default Index