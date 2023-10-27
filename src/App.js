import logo from './logo.svg';
import './App.css';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
import AppForm from './components/AppForm';
import { db } from "./firebase/firebase";
import { useState } from 'react';
import { onSnapshot, query, collection, getDocs, doc, deleteDoc, where} from 'firebase/firestore';
//import MatrizOperaciones from './components/P7matrizOperaciones';


function App() {

  ///// READ - LECTURA - fnRead //////
  const [docBD, setDocsBD] = useState([]);
  const fnRead = () => {
      const xColeccionConQuery = query(collection(db, "persona"));
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach( (doc) => {
          xDoc.push({id: doc.id, ...doc.data()});
          //console({id: doc.id, ...doc.data()});
        });
        setDocsBD(xDoc);
      });
  }
  fnRead();
  //console.log(docBD);
  ///// DELETE - ELIMINAR - fnDelete /////
  const [idActual, setIdActual] = useState("");
  const fnDelete =(xId) =>{
  }
  
  return (
    <div style={{background:"blue", width:"350px",padding:"10px"}}>
      <AppForm {...{idActual}} />
      <i class="material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino  ---- x -  A</p>
      <p>2. Rosa Maria  25 Femenino   ---- x -  A</p>
      <p>3. Luis Miguel 40 Masculino  ---- x -  A</p>
      
    </div>
  );
}


export default App;
