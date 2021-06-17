import React,{Fragment} from 'react';
import './home.css'
import Divisor from '../Divisor/Divisor.jsx'
const Home = () =>{


    return(
        <div className ="home">
            
            <article className= "ui text container">
                <Divisor />
                <h1 className= 'ui header'>¿Que es Mistborn?</h1>
                <div className='ui divider'/>
                <img src= '/img/mistborn1.jpg' className='img-fluid' width="80%" height="480"/>
                <div className='ui divider'/>
                <p>
                    <b>Importante:</b> <br /> Debido a que Mistborn pertenece al universo del Cosmere, un universo vivo y en constante expansión, esta página estará siempre en perpeturo<br></br>
                desarrollo. Por ello, está sujeta a cambios y revisiones de forma permanente.
                </p>
                <div className='ui divider'/>
                <p>Mistborn es una saga de literatura fantástica escrita por el autor estadunidense Brandon Sanderson.</p>
                <p>La saga se compone de dos series de tres libros cada una:</p>
                
                <ul role='list' className='ui bulleted list'>
                    <li role='listitem' className='item'>La primerta triología, formada por:
                        <ul  role='list' className='ui bulleted list'>
                            <li role='listitem' className='item'>El imperio Final (2008)</li>
                            <li role='listitem' className='item'>El pozo de la Ascencion (2009)</li>
                            <li role='listitem' className='item'>El héroe de las eras (2010)</li>
                        </ul>
                    </li>
                    <li role='listitem' className='item'>La segunda triología, formada por:
                        <ul  role='list' className='ui bulleted list'>
                            <li role='listitem' className='item'>Aleación de ley (2012)</li>
                            <li role='listitem' className='item'>Sombras de Identidad (2016)</li>
                            <li role='listitem' className='item'>Brazales de duelo (2017)</li>
                        </ul>
                    <li role='listitem' className='item'>De la tercera triología no tenemos aun titulos.</li>
                    </li>
                </ul>

                <p>La historia tiene lugar en un planeta llamado Scadrial, situado dentro del universo del Cosmere1​creado por el autor. Antes de la primera trilogía era un planeta con múltiples similitudes con La Tierra, pero donde algunos de los habitantes hacen uso de poderes mágicos. El mundo está gobernado por dos seres que los habitantes toman por divinidades, Ruina y Conservación. En la época de la primera trilogía el mundo es mucho más caluroso y se caracteriza por las lluvias de cenizas y brumas nocturnas, pero tras los sucesos de dicha trilogía vuelve a sus aspecto original similar al terrestre. Tecnológicamente hablando la primera trilogía se sitúa en una época medieval tardía y la segunda trilogía, que ocurre 300 años después, en una época industrial temprana.</p>
                <p> Desde 2006, y en solo diez años, Brandon Sanderson se ha convertido en el gran renovador de la fantasía del siglo XXI y el autor más prolífico del mundo. Ha logrado ganarse a ocho millones de lectores, ser publicado en treinta países y postularse como el heredero de todo un género. Sombras de identidad es el quinto libro de la saga Nacidos de la Bruma (Mistborn), una obra iniciada con El imperio final y parte imprescindible del Cosmere, el universo destinado a convertirse en la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica.</p>
                <p>En esta web vamos a mostrar información sobre los personajes, libros y otras cuestiones de interés sobre mistborn.</p>
                <div className='ui divider'/>
                <Divisor />
            </article>
           
        </div>
    
    );


}
export default Home;