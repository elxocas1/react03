import logo from './logo.svg';
import './App.css';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
import AppForm from './components/AppForm';
//import MatrizOperaciones from './components/P7matrizOperaciones';


function App() {
  return (
    <div style={{background:"blue", width:"350px",padding:"10px"}}>
      <AppForm />
      <i class="material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino  ---- x -  A</p>
      <p>2. Rosa Maria  25 Femenino   ---- x -  A</p>
      <p>3. Luis Miguel 40 Masculino  ---- x -  A</p>
      
    </div>
  );
}


export default App;
