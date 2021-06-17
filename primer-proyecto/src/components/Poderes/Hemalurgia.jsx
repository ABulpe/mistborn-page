import React, {Fragment} from 'react';
import Divisor from '../Divisor/Divisor.jsx'
import './poderes.css'



const Hemalurgia= () => {
 
  return (
    <div className="poderes">

          <article className= "ui text container">
                <Divisor />
                <h1 className= 'ui header'>Hemalurgia</h1>
                <div className='ui divider'/>
                <img src= '/img/Hemalurgia.png' className='img-fluid' height="100px"/>
                
                
                <div className='ui divider'/>
                <p>La Hemalurgia es una de las tres principales manifestaciones de Investidura en Scadrial. Los Scadrianos la conocen una de las tres Artes Metálicas y en la actualidad es la de menor expansión entre la población. Las personas que usan la hemalurgia son llamados hemalurgistas.</p>                
                
                <h1 className= 'ui medium header'>Mecánica</h1>
                <div className='ui divider'/>
                <p>La hemalurgia, por su naturaleza de fin-negativa, es la transferencia de atributos, como la Alomancia, la Feruquimia o la fuerza humana innata, a través del robo y el empalme de la red espiritual. En el Reino Físico, se inserta una objeto agudo metálico en un punto de unión, como el corazón, para cargarlo hemalurgicamente. El clavo, que ahora contiene un fragmento de la red espiritual robada, es luego arrancado e incrustado en el receptor, adhiriendo la habilidad directamente en su ADN espiritual. Esto causa desgaste en la red espiritual, creando "agujeros" a través de los cuales Ruina, o un poderoso encendedor o aplacador pueden susurrar o incluso controlar al objeto hemalúrgico. La hemalurgia se llama así por una peculiaridad en la colocación del punto de unión: debido a la interacción entre los Reinos Espiritual y Físico, el clavo debe entrar en contacto con la sangre en movimiento para eliminar o agregar un atributo. La intención es importante, pero la forma en que la hemalurgia interactúa con el Reino Cognitivo, si es que lo hace, se desconoce.</p>
                <p>Dado que la hemalurgia implica la transferencia de una habilidad (o Investidura) de una persona a otra, si el donante es asesinado entonces entrará en el Reino Cognitivo en un estado dañado y saldrán de él más rápido. Del mismo modo, si el destinatario muere, tardará más tiempo en irse de allí ya que posee mayor investidura. Para crear una carga hemalúrgica se requiere de una lesión física, pero la muerte no es un requisito para cargar el clavo, sin embargo si esto no se logra dejaría al donante en una condición espiritual sumamente deplorable.</p>
                <p>Después de que el clavo atraviesa a la persona inicial y es hemalurgicamente cargado, la Ley de Deterioro Hemalúrgico establece que el clavo pierde parte de su potencia. Mientras más largo se encuentre el clavo fuera del cuerpo, más débil se vuelve. Por lo tanto, cuando el Ministerio de Acero creaba un Inquisidor, se trataba de que el clavo estuviera fuera de la persona por el menor tiempo posible. Además, los clavos que se dividen físicamente en varias piezas dividirán la carga entre los pedazos rotos, y se perderá más potencia hemalúrgica cuando los clavos a su vez se dividan.</p>
                <p>Cubrir un clavo con sangre puede reducir la descomposición de la hemalurgia significativamente ya que sería similar a tenerlo colocado dentro del cuerpo. Se desconoce cuánta sangre es necesaria para que suceda ese efecto o, por cuánto tiempo, la sangre mantendrá este efecto antes de necesitar renovarse con un nuevo lote. Actualmente se piensa que no es posible robar múltiples atributos de la misma persona.</p>
                <p>La hemalurgia se puede usar en cualquier parte del Cosmere, siempre que haya una intención de crear un clavo hemalúrgico. La hemalurgia también puede robar atributos de otras formas de Investidura. Se puede utilizar en animales, pero no en plantas, y por alguna razón, los clavos hemalúrgicos no causan infecciones.</p>
                
                <h1 className= 'ui medium header'>Creaciones hemalúrgicas</h1>
                <div className='ui divider'/>
                <p>Cualquier Hemalurgia deforma la red espiritual, pero se requiere de un cambio físico notable para que un sujeto sea clasificado como una Creación Hemalúrgica. Se conocen cuatro tipos de creaciones hemalúrgicas en Scadrial:</p>
                
                <ul className='ui  list'>
                    <li  >Inquisidores de Acero:
                        <ul value='*'  className='ui  list'>
                            <p > antiguos humanos que poseen entre nueve a once clavos, cada uno cargada con un poder Alomántico o feruquimico. Sus característicos clavos en los ojos les otorgan la habilidad alomántica del Hierro y el Acero para "ver" de manera distinta en los ojos normales. Una clavo principal, colocado debajo del hombro, sostiene los restos de su deshilachada red espiritual y removerlo resulta en la muerte inmediata. Aquello conocidos como buscadores son los candidatos preferidos para ser convertidos en Inquisidores, ya que cuando se les coloca un clavo cargado con la habilidad alomántica del bronce, su habilidad natural se duplica y les permite atravesar la nubes de cobre.</p>
                        </ul>
                    </li>
                    <li  >Koloss:
                        <ul   className='ui  list'>
                            <p>seres monstruosos y brutales que se crean con cuatro clavos de Hierro, cada uno cargado con la fuerza humana. Pierden su inteligencia, pero obtienen una fuerza tremenda. Continúan creciendo hasta que mueren. Después de la Ascensión Final, Armonía los transformó en una raza reproductora.</p>
                        </ul>
                    </li>
                    <li  >Kandra:
                        <ul   className='ui  list'>
                            <p>antiguo Espectro de la Bruma al que se le otorgó la habilidad de la sapiencia con dos clavos, ambos cargados con el mismo atributo humano. Para el Kandra, esto se conoce como Bendición. Sin embargo también posible que un Kandra tenga sapiencia con solo un clavo.</p>
                        </ul>
                    </li>
                    <li  >Koloss:
                        <ul   className='ui  list'>
                            <p>  antiguos humanos convertidos por un solo clavo hecho con un metal desconocido y cargado con un atributo desconocido. Son cuadrúpedos, y sus rasgos se han torcido de tal manera hasta parecer caninos, además de tener cráneos más gruesos.</p>
                        </ul>
                    </li>
                </ul>
                <p>Cuantos más clavos tiene un sujeto, más se puede cambiar su forma y cuerpo</p>

                <table class="ui inverted table">
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">FÍSICO</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Hierro:<br/>Roba fuerza humana.</td>
                        <td>Acero:<br/>Roba Poderes Alomanticos.</td>
                        </tr>
                        <tr>
                        <td>Estaño:<br/>Roba sentidos humanos.</td>
                        <td>Peltre:<br/>Roba poderes Feruquimicos.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">COGNITIVO</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Zinc:<br/>Roba fortaleza emocional humana.</td>
                        <td>Latón:<br/>Roba poderes cognitivos feruquimicos.</td>
                        </tr>
                        <tr>
                        <td>Cobre:<br/>Roba fortaleza mental, memoria e inteligencia humana.</td>
                        <td>Bronce:<br/>Roba poderes mentales alomanticos.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Espiritual</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cromo:<br/>Roba el destino.</td>
                        <td>Nicrosil:<br/>Roba la investidura.</td>
                        </tr>
                        <tr>
                        <td>Aluminio:<br/>Elimina todos los poderes.</td>
                        <td>Duralumin:<br/>Roba conexiín/Identidad.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Hibrido</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cadmio:<br/>Roba poderes temporales Alomanticos.</td>
                        <td>Bendaleo:<br/>Robas poderes espirituales Feruquimicos.</td>
                        </tr>
                        <tr>
                        <td>Oro:<br/>Roba poderes feruquimicos hibrídos</td>
                        <td>Electrum:<br/>Roba poderes Alomanticos de mejora.</td>
                        </tr>
                    </tbody>
                    </table>

                    <table class="ui inverted table">
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">METALES DIVINOS</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Atium:<br/>Roba cualquier atributo, ya sea Alomantico, Feruquimico o humano.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lerasium:<br/>Roba todas las habilidades.
                            </td>
                        </tr>
                    </tbody>
                    </table>

                <h1 className= 'ui medium header'>Efectos Secundarios</h1>
                <div className='ui divider'/>
                <p>Cuando un alomántico puede percibir pulsos alománticos a través de una nube de cobre, generalmente se debe a un clavo hemalúrgico. Se debe a una cuestión de fuerza alomántica, por lo tanto si un Buscador tiene un clavo cargado con bronce alomántico, eso esencialmente lo hace dos veces más poderosos, lo que le permite atravesar una nube de cobre.</p>
                <p>La hemalurgia es un arte destructivo. Convierte el cuerpo en algo casi inhumano. Gracias a ese cambio es como los Inquisidores sobreviven con unos clavos atravesándoles los ojos y otros lugares vitales, y explica la deformación física de los Koloss. En el caso de los inquisidores, se sabe que su corazón está en un lugar diferente y su cerebro se forma alrededor de los clavos de sus ojos. La extracción de los clavos de un inquisidor en lugares tan importantes invertiría la transformación, causando su muerte.</p>
                <p>Sin embargo Ruina creó a la hemalurgia con un defecto: cada clavo crea agujeros en la mente, haciéndolos más fáciles de manipular. A través de la poderosa alomancia emocional, uno puede empujar o tirar de las emociones de una criatura atravesada por los clavos. De hecho, gracias a eso fue como el Lord Legislador pudo controlar a los enormes ejércitos de Koloss. Los Kandra también pueden ser controlados de esta manera, pero a medida que el poder de los alománticos fue disminuyendo generación tras generación, este conocimiento se fue olvidando.</p>
            



                <div className='ui divider'/>
                
                <Divisor />
            </article>
    </div>
  );
}

export default Hemalurgia;