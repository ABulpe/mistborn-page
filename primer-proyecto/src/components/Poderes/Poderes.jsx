import React, {Fragment,useState} from 'react';
import {styles} from './poderes.js'
import Divisor from '../Divisor/Divisor.jsx'
import Alomancia from './Alomancia.jsx'
import Feruquimia from './Feruquimia.jsx';
import Hemalurgia from './Hemalurgia.jsx'


const Poderes= () => {
 
    const [mode,setMode]=useState(0);
    let body = (
        <div style={styles.poderes}>
            <Divisor/>
            <div class="ui link cards">

                    <div class="card">
                    <div class="image">
                        <img src="/img/Alomancia.png" style={{height:'300px',width: '290px'}} onClick={()=>setMode(1)}/>
                    </div>
                    <div class="content">
                        <div class="header">ALOMANCIA</div>
                        <div class="meta">
                        <a onClick={()=>setMode(1)} >La Alomancia es una de las tres principales manifestaciones de Investidura en Scadrial. Los Scadrianos la conocen una de las tres Artes Metálicas y en la actualidad es la de mayor propagación entre la población.</a>
                        </div>
                        <div class="description">
                        {/* Aquí puedes meter una descripción */}
                        </div>
                    </div>
                    </div>

                    <div class="card">
                    <div class="image">
                        <img src="/img/Feruquimia.png" style={{height:'300px',width: '290px'}} onClick={()=>setMode(2)} />
                    </div>
                    <div class="content">
                        <div class="header">FERUQUIMIA</div>
                        <div class="meta">
                        <a onClick={()=>setMode(2)} >La Feruquimia nació contemporáneamente con las otras dos Artes Metálicas, la Alomancia y la Hemalurgia, como resultado de las interacciones entre el planeta Scadrial con sus Fragmentos, Conservación y Ruina. A diferencia de la Alomancia y la Hemalurgia, que están cada una en sintonía con uno de los Fragmentos, la Feruquimia está igualmente en sintonía con ambos y representa el equilibrio entre ellos.</a>
                        </div>
                        <div class="description">
                        {/* Aquí puedes meter una descripción */}
                        </div>
                    </div>
                    </div>

                    <div class="card">
                    <div class="image">
                        <img src="/img/Hemalurgia.png" style={{height:'300px',width: '290px'}}  onClick={()=>setMode(3)} />
                    </div>
                    <div class="content">
                        <div class="header">HEMALURGIA</div>
                        <div class="meta">
                        <a onClick={()=>setMode(3)}>La Hemalurgia es una de las tres principales manifestaciones de Investidura en Scadrial. Los Scadrianos la conocen una de las tres Artes Metálicas y en la actualidad es la de menor expansión entre la población. Las personas que usan la hemalurgia son llamados hemalurgistas.</a>
                        </div>
                        <div class="description">
                        {/* Aquí puedes meter una descripción */}
                        </div>
                    </div>
                    </div>
            </div>
            <Divisor/>
        </div> 
    );

    switch (mode) {
        case 1:
            body=(
                <Alomancia />
            )
            break;
        case 2:
            body=(
                <Feruquimia />
            );
            break;
        
        case 3:
            body=(
                <Hemalurgia />
            );

            break;
        default:
            break;
        
    }

    return (
        <Fragment>
            {body}
        </Fragment>
        
        
     
  );
}

export default Poderes;
