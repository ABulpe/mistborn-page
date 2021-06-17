import React, {Fragment,useState} from 'react';
import "./indice.css"
import Home from '../Home/Home.jsx'
import Libros from '../Libros/Libros.jsx'
import Personajes from '../Personajes/Personajes.jsx'
import Poderes from '../Poderes/Poderes.jsx'

const Indice = () => {

    const [mode,setMode]=useState(0)
    let body = ( 
        <Fragment>
         
        </Fragment>
    );
    switch(mode) {
        case 0:
          body =( 
             <Home />
          )
          break;
        case 1:
          body=(
              <Libros />
          )
          break;
        case 2:
            body=(
                <Personajes />
            )
            break;
        case 3:
            body=(
                <Poderes />
            )
        
        default:
          break;
      }
      
    return(
        <Fragment>
            {/* <nav className="btn-group" role='group' aria-label='Button group with nested dropdown'> */}
              {/* <button type='button' className='btn btn-primary'  onClick={()=>setMode(0)}>HOME</button> */}
                {/* <button type='button' className='btn btn-primary' onClick={()=>setMode(1)}>LIBROS</button> */}
                {/* <button type='button' className='btn btn-primary' onClick={()=>setMode(2)}>PERSONAJES</button> */}
                {/* <button type='button' className='btn btn-primary' onClick={()=>setMode(3)}>COLECCIONISMO</button> */}
            {/* </nav> */}
            <div  className="five grey ui buttons">
                <button type='button'  className='ui button'  onClick={()=>setMode(0)}>HOME</button>
                <button type='button' className='ui button' onClick={()=>setMode(1)}>LIBROS</button>
                <button type='button' className='ui button' onClick={()=>setMode(2)}>PERSONAJES</button>
                <button type='button' className='ui button' onClick={()=>setMode(3)}>PODERES</button>
            </div>
            {body}
        </Fragment>
        
    );



}

export default Indice;