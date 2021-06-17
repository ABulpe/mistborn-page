import React, {Fragment} from 'react';
import {styles} from "./header.js"


const Header= () => {
 
  return (
    <Fragment>
      <header style={styles.header}>
    
          <img src='/img/mistborn-logo.png' className='img-fluid' alt=""/>
        
      </header>
     
    </Fragment>
  );
}

export default Header;
