import React,{Fragment} from "react"
import Header from  './components/Header/Header.jsx'
import Indice from './components/Indice/Indice.jsx'

import {styles} from './app'



const App = () => {
  let numero = 4;
  return (
    
      <div style={styles.app}>
      <Header />
      <Indice />
      
    
     
      </div>
    
    
    
  );
}

export default App;
