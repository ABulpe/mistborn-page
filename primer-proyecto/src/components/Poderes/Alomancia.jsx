import React, {Fragment} from 'react';
import Divisor from '../Divisor/Divisor.jsx'
import './poderes.css'



const Alomancia= () => {
 
  return (
    <div className="poderes">

          <article className= "ui text container">
                <Divisor />
                <h1 className= 'ui header'>Alomancia</h1>
                <div className='ui divider'/>
                <img src= '/img/Alomancia.png' className='img-fluid' height="100px"/>
                
                
                <div className='ui divider'/>
                <p>La Alomancia es una de las tres principales manifestaciones de Investidura en Scadrial. Los Scadrianos la conocen una de las tres Artes Metálicas y en la actualidad es la de mayor propagación entre la población. Las personas que tienen una o más habilidades alománticas son llamados alománticos. La alomancia tiene muchos efectos generalizados, como el aumento y amortiguación de las emociones, empujar y tirar de los metales, e incluso posee efectos temporales. Cada poder alomántico tiene su propio metal, que debe ser ingerido y "quemado" para ser activado. </p>
                <p>Aunque la alomancia es hereditaria, una vez que los poderes alománticos despiertan en una persona, esta comienza a actuar de manera instintiva. Todo lo que un alomántico requiere para usar su poder es suficiente metal correcto para quemar.</p>
                
                <h1 className= 'ui medium header'>Mecanica</h1>
                <div className='ui divider'/>
                <p>Cuando una persona nace con una habilidad alomántica hereditaria, no puede quemar metales hasta que dicha habilidad despierte en ellos. El proceso mediante el cual se activa la alomancia dentro de una persona se llama Rompimiento. En la era del Imperio Final de Scadrial, el Rompimiento requería de un trauma inmenso, por eso era usual que la persona fuera sometida a una paliza intensa a una edad temprana. Era posible también que la alomancia se manifestara luego de una emoción intensa, como la alegría, pero eso rara vez sucedía. Se supo pensar que cuanto más poderoso era el alomántico, más intenso tenía que ser el trauma para ocasionar el Rompimiento. Sin embargo después de la Ascensión Final, Armonía cambió el funcionamiento del Rompimiento, no obstante no se sabe de qué manera fue alterado.</p>
                <p>Una vez que un alomántico ha atravesado el Rompimiento, comienza a sentir una reserva de poder en el estómago después de ingerir un metal para quemar. Los metales se ingieren usualmente bebiendo viales que contienen copos de metal suspendidos en una solución de alcohol u otro líquido tal como, por ejemplo, aceite de bacalao. La “quema” del metal es un proceso que el cuerpo realiza de manera instintiva por lo tanto no se requiere de entrenamiento para hacerlo (sin embargo, el uso adecuado del metal si precisa de un entrenamiento). El proceso es tan instintivo que en algunas circunstancias, un alomántico puede quemar metales incluso mientras está inconsciente. Un alomántico también puede quemar sus metales a un ritmo acelerado, lo que se conoce como “extinguir". La extinción otorga más potencia para una determinada habilidad, pero provoca que la reserva de metales también se agote mucho más rápido.</p>
                <p>A un alomántico que puede quemar un solo metal se lo conoce como Brumoso, y al que puede quemar todos los metales se lo llama Nacido de la Bruma. No existe una forma natural para que una persona tenga solo dos poderes. Una persona nace teniendo una habilidad o todas ellas. A cada tipo de brumoso se lo conoce con un nombre particular según su habilidad, como Atraedor, Lanzamonedas, Ojo de estaño, Brazo de peltre o violento, Aplacador, Encendedor, Ahumador y Buscador.</p>
                <h1 className= 'ui medium header'>Sabios</h1>
                <div className='ui divider'/>
                <p>Los alománticos que queman intensamente su metal durante períodos prolongados de tiempo pueden verse alterados fisiológicamente por la afluencia constante de poder alomántico. Estas personas son conocidas como sabios alománticos. Estas personas experimentan una mayor capacidad y mayor dependencia de cualquier metal que estén quemando de esa manera. En la mayoría de las circunstancias, esto se consideró irreversiblemente perjudicial.</p>
                <h1 className= 'ui medium header'>Nacidobles y Componedores</h1>
                <div className='ui divider'/>
                <p>Después del Imperio Final, los terrisanos y nobles comenzaron a cruzarse, por lo que se hizo posible que sus descendientes tuvieran una habilidad alomántica y una feruquimica. Las personas con tales poderes comenzaron a ser conocidas como Nacidobles. Al igual que brumosos, un Nacidoble obtiene un nombre dependiendo de su combinación específica de habilidades.</p>
                <p>Un tipo especial de Nacidoble es un Componedor: un Nacidoble que depende del mismo metal tanto para sus habilidades alománticas como feruquimicas. Un Componedor puede quemar de forma alomántica su mente de metal cargada feruquimicamente, obteniendo un estallido masivo del atributo feruquimico almacenado. Los Componedores son considerados inmensamente poderosos. Aunque el término "Componedor" apareció por primera vez en el vocabulario Scadriano después del Imperio Final, tal vez el Componedor más famoso fue el mismísimo Lord Legislador.</p>
                <h1 className= 'ui medium header'>Metales Alomanticos</h1>
                <div className='ui divider'/>
                <p>Hay dieciséis metales alománticos básicos (aunque, a pesar de ser llamados metales "alománticos", estos mismos metales se comparten en las tres artes metálicas). Los metales vienen en pares: un metal puro emparejado con una aleación (una mezcla) de ese metal base. Estos pares tienen efectos complementarios. El Hierro tira de los metales cercanos, mientras que el acero (una aleación de hierro) empuja a los metales. Del mismo modo, cada metal base se clasifica como una habilidad de "Tirar", mientras que cada aleación se clasifica como una habilidad de "Empujar". La pureza de los metales es importante. Cuanto más puro es un metal, más efectivos son. Las aleaciones requieren porcentajes de metal precisos para obtener la potencia máxima. Si un alomántico quema un metal o una aleación que es impura, pueden enfermarse, e incluso pueden ocurrir efectos más graves si un alomántico intenta quemar un metal que no es uno de los dieciséis.</p>
                <p>Además de las clasificaciones Tirar y Empujar, existen metales externos e internos. Los poderes externos influyen en las cosas fuera del cuerpo de un alomántico, mientras que los poderes internos influyen en el alomántico. Esto naturalmente divide los dieciséis metales alománticos en cuatro grupos de cuatro metales cada uno: poderes físicos, mentales, temporales y de mejora. Cada cuadrante tiene un par de metal y aleación de potencia externa y otro par de potencia interna. Por ejemplo, los poderes físicos externos son de hierro y acero, mientras que los poderes físicos internos son el estaño, que aumenta los sentidos del alomántico, y el peltre, que mejora los atributos físicos del alomántico.</p>
                <p>También hay tres "Metales Divinos" conocidos por los Scadrianos: Lerasium, Atium y Ettmetal que, junto con otros de otros planetas, no entran en la Tabla moderna de Metales Alománticos. El Atium fue clasificado como un metal temporal durante la época del Imperio Final por el Ministerio de Acero, pero se demostró que eso era desacertado. Los Metales Divinos son esencias de los Fragmentos que han tomado residencia en Scadrial, Conservación y Ruina, y más tarde Armonía. Las aleaciones de Metales Divinos pueden conducir a habilidades adicionales.</p>
                
                <h1 className= 'ui medium header'>Habilidades</h1>
                <div className='ui divider'/>

                <table class="ui inverted table">
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">FÍSICO</th></tr>
                        <tr>
                        <th></th>
                        <th>Tirar</th>
                        <th>Empujar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Externo</td>
                        <td>Hierro(Atraedor):<br/>Los brumosos atraedores que queman hierro pueden tirar de fuentes cercanas de metal. Los tirones deben ser dirigidos hacia el centro de gravedad del atraedor.</td>
                        <td>Acero(Lanzamonedas):<br/>Los brumosos lanzamonedas que queman acero pueden empujar fuentes cercanas de metal. Los empujones deben ser impelidos directamente desde el centro de gravedad del lanzamonedas.</td>
                        </tr>
                        <tr>
                        <td>Interno</td>
                        <td>Estaño(Ojo de Estaño):<br/>Los brumosos ojos de estaño que queman estaño aumentan la sensibilidad de sus cinco sentidos. Todos se incrementan al mismo tiempo.</td>
                        <td>Peltre(Violento):<br/>Los brumosos brazos de peltre, o violentos, queman peltre para aumentar su fuerza, velocidad y resistencia física, aumentando también la capacidad de su cuerpo para sanar.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Mental</th></tr>
                        <tr>
                        <th></th>
                        <th>Tirar</th>
                        <th>Empujar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Externo</td>
                        <td>Zinc(Encendedor):<br/>Los brumosos encendedores queman zinc para inflamar (encender) las emociones de los individuos cercanos. Puede dirigirse a un solo individuo o a una zona general, y el encendedor puede concentrarse en emociones concretas.</td>
                        <td>Latón(Aplacador):<br/>Los brumosos aplacadores queman latón para aplacar las emociones de los individuos cercanos. Puede hacerse con un individuo concreto o con un área general, y el aplacador puede concentrarse en emociones concretas.</td>
                        </tr>
                        <tr>
                        <td>Interno</td>
                        <td>Cobre(Ahumador):<br/>Los ahumadores queman cobre para crear una nube invisible a su alrededor, que oculta a los alománticos cercanos para que no sean detectados por un buscador y que protege a los individuos cercanos de los efectos de la alomancia emocional.</td>
                        <td>Bronce(Buscador):<br/>Los brumosos buscadores queman bronce para «oír» los pulsos emitidos por otros alománticos que queman metales. Diferentes metales producen pulsos diferentes.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Mejora</th></tr>
                        <tr>
                        <th></th>
                        <th>Tirar</th>
                        <th>Empujar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Externo</td>
                        <td>Cromo(Sangüijuela):<br/>Los brumosos sanguijuelas que queman cromo mientras tocan a otro alomántico anulan las reservas de metal de ese alomántico.</td>
                        <td>Nicrosil(Nicroestallante):<br/>Los brumosos nicroestallantes que queman nicrosil mientras tocan a otro alomántico quemarán instantáneamente cualquier metal que queme ese alomántico, liberando un enorme (y a veces inesperado) estallido del poder de esos metales.</td>
                        </tr>
                        <tr>
                        <td>Interno</td>
                        <td>Aluminio(Mosquito de aluminio):<br/>Un nacido de la bruma que quema aluminio metaboliza instantáneamente todos sus metales sin producir ningún otro efecto, anulando todas sus reservas alománticas. Los brumosos que pueden quemar aluminio se llaman «mosquitos de aluminio» por la poca efectividad de esta habilidad.</td>
                        <td>Duralumin(Mosquito de duralumín):<br/>Un nacido de la bruma que quema duralumín abrasa instantáneamente todos los otros metales que arden al mismo tiempo, liberando un enorme estallido de poder de esos metales. Los brumosos que pueden quemar duralumín se llaman «mosquitos de duralumín» debido a la poca efectividad de esta habilidad en sí misma.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Temporal</th></tr>
                        <tr>
                        <th></th>
                        <th>Tirar</th>
                        <th>Empujar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Externo</td>
                        <td>Cadmio(Pulsador):<br/>Los brumosos pulsadores queman cadmio para estirar el tiempo en una burbuja a su alrededor, haciendo que pase más despacio dentro de la burbuja. Esto causa que lo que sucede fuera de la burbuja se mueva a velocidad cegadora desde el punto de vista del pulsador.</td>
                        <td>Bendaleo(Deslizador):<br/>Los brumosos deslizadores queman bendaleo para comprimir el tiempo en una burbuja, haciendo que pase más rápidamente dentro de la burbuja. Esto hace que los hechos fuera de la burbuja se muevan a ritmo glacial desde el punto de vista del deslizador.</td>
                        </tr>
                        <tr>
                        <td>Interno</td>
                        <td>Oro(Augur):<br/>Los brumosos augures queman oro para tener una visión del yo pasado o de cómo habrían resultado las cosas de haber tomado opciones distintas en el pasado.</td>
                        <td>Electrum(Óraclo):<br/>Los brumosos oráculos queman electrum para tener una visión de los posibles rumbos que puede tomar el futuro. Habitualmente está limitada a unos pocos segundos.</td>
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
                                Atium(Vidente):<br/>Un alomántico que quema Atium es capaz de ver el futuro en unos segundos.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ettmetal:<br/> Ettmetal puede reproducir un poder particular de alomancia cuando está cerca de ese poder. Cuando se produce un efecto alomántico, consume lentamente el ettmetal, similar a la forma en que un alomántico quema los metales. Es extremadamente volátil al contacto con el agua.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lerasium(Nacido de la Bruma):<br/>Una persona normal que quema lerasium se convierte automaticamente en un Nacido de la Bruma que puede quemar de manera simultanea cualquiera de los otros metales.
                            </td>
                        </tr>
                    </tbody>
                    </table>

                    






                <div className='ui divider'/>
                
                <Divisor />
            </article>
    </div>
  );
}

export default Alomancia;
