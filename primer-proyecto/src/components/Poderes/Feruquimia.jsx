import React, {Fragment} from 'react';
import Divisor from '../Divisor/Divisor.jsx'
import './poderes.css'



const Feruquimia= () => {
 
  return (
    <div className="poderes">

          <article className= "ui text container">
                <Divisor />
                <h1 className= 'ui header'>Feruquimia</h1>
                <div className='ui divider'/>
                <img src= '/img/Feruquimia.png' className='img-fluid' height="100px"/>
                
                
                <div className='ui divider'/>
                <p>La Feruquimia es una de las tres principales manifestaciones de Investidura en Scadrial. Los Scadrianos la conocen como una de las tres Artes Metálicas y en la actualidad es la segunda de mayor expansión entre la población. Las personas que pueden usar la feruquimia son llamados Feruquimistas. [1]</p>
                
                <h1 className= 'ui medium header'>Historia</h1>
                <div className='ui divider'/>
                <p>La Feruquimia nació contemporáneamente con las otras dos Artes Metálicas, la Alomancia y la Hemalurgia, como resultado de las interacciones entre el planeta Scadrial con sus Fragmentos, Conservación y Ruina. A diferencia de la Alomancia y la Hemalurgia, que están cada una en sintonía con uno de los Fragmentos, la Feruquimia está igualmente en sintonía con ambos y representa el equilibrio entre ellos. La Feruquimia fue también el único arte en uso generalizado antes de la Ascensión del Lord Legislador. La capacidad de utilizar la Feruquimia surgió entre la gente de Terris, pero, debido a su naturaleza aislacionista y su negación por cruzarse con otras razas, nunca se extendió a la población general de Scadrial. Durante los primeros tiempos surgió una orden sagrada de eruditos feruquimistas, conocidos como los Forjamundos, que sirvieron como maestros y portadores de conocimiento en todo el mundo. No todos los feruquimistas eran miembros; sin embargo, muchos tenían vocaciones más mundanas, como ser pastores o guías de montaña.</p>
                <p>Durante la Ascensión del Lord Legislador, todos los feruquimistas vivos (aunque no aquellos con genes feruquimicos recesivos), con algunas excepciones remarcables, fueron transformados en espectros de la bruma por Rashek, un pastor terrisano ferruquimista. Rashek, después de haber descubierto la Alomancia y proclamarse como el Héroe de las Eras, se declaró Dios y lanzó una campaña para consolidar el mundo bajo su control. Como parte de ese esfuerzo, Rashek instituyó políticas para restringir fuertemente a la gente de Terris, que eventualmente se convirtieron en la base de un programa de apareamiento diseñado para exterminar todas las huellas genéticas de feruquimia. Rashek hizo esto específicamente porque temía que los genes de los feruquimicos se entremezclaran con los de la Alomancia y que potencialmente crearan un rival de poder comparable con el de él. A pesar de esto, la resistencia terrisana trabajó incansablemente para frustrar los esfuerzos de Rashek, entonces conocido como el Lord Legislador, con una variedad de estrategias. Una de las medidas que tomaron fue engañar a los criadores para que personas con talentos feruquimicos ocultos pudieran reproducirse, con el fin de asegurar la continuidad de la Feruquimia en la población. Otra medida fue crear a los Guardadores, una orden de feruquimistas dedicados a buscar, almacenar y asegurar el conocimiento previo a la ascensión del Lord Legislador.</p>
                <p>Después de la muerte del Lord Legislador y el Colapso del Imperio Final, el Sínodo, los líderes de los Guardadores y el consejo gobernante de facto de Terris, emergieron a luz y enviaron a sus miembros a través del Imperio para enseñar a la gente sobre el conocimiento que tenían almacenado. Desafortunadamente, esta "victoria" fue relativamente efímera; aproximadamente un año más tarde, los Inquisidores de Acero, bajo la influencia de Ruina, atacaron y masacraron al sínodo y todos, menos uno, de los Guardadores, creando clavos hemalúrgicos de ellos en el proceso para aumentar sus propios poderes.</p>
                <p>Después del Catacendro, los sobrevivientes terrisanos comenzaron a cruzarse con la población en general. Los genes de feruquimicos comenzaron a dividirse, dando como resultado una mezcla con los de la Alomancia. Mientras que antes las personas tenían la capacidad de usar todas las habilidades feruquimicas o ninguna de ellas, trecientos años después comenzaron a producirse Ferrins (equivalentes a un brumoso) que podían usar solo una habilidad. Por el contrario, los feruquimistas con todas las habilidades de la feruquimia, ahora conocidos como "feruquimicos completos", comenzaron a desaparecer, aunque la comunidad de Terris empezó a trabajar en la creación de varios de ellos mediante la cría cuidadosa de linajes feruquimicos. Durante ese período también se dio inicio a la investigación sobre la combinación entre feruquimia y alomancia; se descubrieron varios metales nuevos y sus atributos feruquimico, con las habilidades espirituales siendo de particular interés para la comunidad Terris.</p>
                
                
                <h1 className= 'ui medium header'>Mecánica</h1>
                <div className='ui divider'/>
                <p>La feruquimia es una manifestación de Investidura de fin-neutral que le permite al usuario convertir ciertos atributos en Investidura, almacenarlos en algún metal con el que estén en contacto físico, y luego recuperarlos desde el mismo metal. Como arte de fin-neutral, la habilidad no se obtiene de una fuente externa (como lo es en la Alomancia) y tampoco se pierde permanentemente (como ocurre con la Hemalurgia). Normalmente, cuando un ferruquimista decanta un atributo con la misma velocidad con que fue almacenado, puede sacar exactamente lo que puso. Por ejemplo, si almacena el 50% de su fuerza durante una hora, puede decantarlo y tener su fuerza al 150 % durante una hora. Sin embargo, si el ferruquimista decanta a mayor velocidad, entonces pierde parte del atributo para facilitar la compresión de la habilidad. Esto significa que un feruquimista que almacena el 50% de su fuerza durante una hora solo podrá mantenerse al 200% durante 25 minutos, en lugar de una media hora completa. Cuanto más comprime el atributo feruquimico, más se pierde.</p>
                <p>El tipo de metal determina qué atributo se puede almacenar dentro de él. Los trozos de metal que han sido cargados por los feruquimistas se conocen como mentes de metal en general, o más específicamente como el tipo de metal con un sufijo añadido «"mente + (metal)"». El acto de cargar, o investir, una mente de metal se conoce como almacenamiento y el acto de recuperar el atributo almacenado se conoce como decantar.</p>
                <p>Una pieza de metal más grande podrá almacenar más de un atributo, pero la escala no es lineal; hay ciertos umbrales de tamaño donde aumenta la cantidad de atributo que se puede almacenar. Si una Mente de metal está rota, el atributo almacenado se dividirá entre las piezas. Es posible almacenar y decantar usando metal fundido (dejando de lado los riesgos convencionales de tocar el metal fundido) lo que tendría algún efecto sobre la habilidad almacenada. Sin embargo, si el metal fundido se mezcla para formar una aleación, la habilidad se volverá inaccesible, incluso si la aleación en cuestión es feruquimicamente viable. Si la aleación es feruquimica viable, un feruquimista no podrá almacenar la mayor cantidad de atributos posible en una mente de metal de tamaño idéntico: mientras que la habilidad original es inaccesible, ocupa un "espacio" en la mente de metal.</p>
                <p>Normalmente, lo que un feruquimista almacena están relacionado con su identidad y son inaccesibles para otro feruquimista. Sin embargo, otros feruquimistas pueden sentir la presencia de los almacenajes originales de ese feruquimista.</p>
                
            
                <h1 className= 'ui medium header'>Habilidades</h1>
                <div className='ui divider'/>

                <table class="ui inverted table">
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">FÍSICO</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Hierro(Deslizador):<br/>Acumula peso físico. Los ferrins deslizadores pueden almacenar peso físico en una mente de metal de hierro, reduciendo su peso efectivo mientras almacenan activamente, y pueden decantarlo más tarde para aumentar su peso efectivo.</td>
                        <td>Acero(Mensajero):<br/>Acumula velocidad física. Los ferrins mensajeros de acero pueden almacenar velocidad física en una mente de metal de acero, reduciéndola mientras almacenan activamente, y pueden decantarla más tarde para aumentar su velocidad.</td>
                        </tr>
                        <tr>
                        <td>Estaño(Susurraviento):<br/>Los brumosos ojos de estaño que queman estaño aumentan la sensibilidad de sus cinco sentidos. Todos se incrementan al mismo tiempo.</td>
                        <td>Peltre(Bruto):<br/>Los brumosos brazos de peltre, o violentos, queman peltre para aumentar su fuerza, velocidad y resistencia física, aumentando también la capacidad de su cuerpo para sanar.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">COGNITIVO</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Zinc(Chispeantes):<br/>Acumula velocidad mental. Los ferrins chispeantes pueden almacenar velocidad mental en una mente de metal de zinc, nublando su capacidad para pensar y razonar mientras almacenan activamente, y pueden decantarla más tarde para pensar y razonar con más rapidez.</td>
                        <td>Latón(Alma de Fuego):<br/>Acumula calor. Los ferrins de alma de fuego pueden acumular calor en una mente de metal de latón, enfriándose mientras almacenan activamente. Pueden decantar más tarde la mente de metal para calentarse.</td>
                        </tr>
                        <tr>
                        <td>Cobre(Archivero):<br/>Acumula recuerdos. Los ferrins archiveros pueden almacenar recuerdos en una mente de metal de cobre: el recuerdo desaparece de su cabeza mientras se almacena, y puede ser recuperado perfectamente en un momento posterior.</td>
                        <td>Bronce(Centinela):<br/>Acumula desvelo. Los ferrins centinelas pueden almacenar desvelo en una mente de metal de bronce, adormilándose mientras almacenan activamente. Pueden decantar más tarde la mente de metal para reducir el sueño o ampliar su consciencia.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Espiritual</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cromo(Tejedor):<br/>Acumula fortuna. Los ferrins tejedores pueden almacenar fortuna en una mente de metal de cadmio, volviéndose desafortunados durante el almacenamiento activo, y pueden decantarla más tarde para aumentar su suerte.</td>
                        <td>Nicrosil(Portaalmas):<br/>Acumula investidura. Los ferrins portaalmas pueden almacenar investidura en una mente de metal de nicrosil. Es un poder del que muy pocos saben algo; de hecho, la gente de Terris no sabe realmente lo que hace cuando usa estos poderes.</td>
                        </tr>
                        <tr>
                        <td>Aluminio(Autentico):<br/>Acumula identidad. Los ferrins auténticos pueden almacenar su sentido espiritual de la identidad en una mente de metal de aluminio. Es un arte del que rara vez se habla fuera de las comunidades de Terris, e incluso entre ellos no se entiende bien.</td>
                        <td>Duralumin(Conector):<br/>Acumula conexión. Los ferrins conectores pueden almacenar conexión espiritual en una mente de metal de duralumín, reduciendo la consciencia de otro ente y su amistad con ellos durante el almacenamiento activo, y pueden decantarla más tarde para formar rápidamente relaciones de confianza con otros.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr style={{textAlign:'center'}}><th colSpan="3">Hibrido</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cadmio(Susurrante):<br/>Acumula aliento. Los ferrins susurrantes pueden almacenar aliento dentro de una mente de metal de cadmio; durante el almacenamiento activo deben hiperventilar para que sus cuerpos obtengan suficiente aire. El aliento puede ser recuperado más tarde, eliminando o reduciendo la necesidad de respirar usando los pulmones mientras se decanta la mente de metal. También pueden oxigenar enormemente su sangre.</td>
                        <td>Bendaleo(Incluyente):<br/>Acumula energía. Los ferrins subsumer incluyentes pueden almacenar nutrición y calorías en una mente de metal de bendaleo; pueden comer grandes cantidades de comida sin sentirse llenos ni ganar peso, y luego pueden pasarse sin comer mientras decantan la mente de metal. Una mente de metal de bendaleo diferente puede utilizarse igualmente para regular la toma de líquidos.</td>
                        </tr>
                        <tr>
                        <td>Oro(Hacedor):<br/>Acumula salud. Los ferrins hacedores de sangre pueden almacenar salud en una mente de metal de oro, reduciendo su salud mientras almacenan activamente, y pueden decantarla en un momento posterior para sanar rápidamente o curarse más allá de las capacidades habituales del cuerpo.</td>
                        <td>Electrum(Pináculo):<br/>Acumula determinación. Los ferrins pináculo pueden almacenar determinación en una mente de metal de electrum, entrando en un estado depresivo durante el almacenamiento activo, y pueden decantarla más tarde para entrar en fase maníaca.</td>
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
                                Atium:<br/>Acumula edad. Al almacenar edad, el Feruquimista pasa el tiempo más viejo. Al descantar la edad almacenada, el Feruquimista pasa el tiempo más joven.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lerasium:<br/>se desconocen las propiedades que un feruquimico puede almacenar en una mente de este metal.
                            </td>
                        </tr>
                    </tbody>
                    </table>

                <h1 className= 'ui medium header'>Interacción con las otras artes</h1>
                <div className='ui divider'/>
                <h1 className= 'ui small header'>Alomancia</h1>
                <p>Quizás la interacción más dramática entre la feruquimia y la alomancia es la de la Composición, por la cual un feruquimista puede quemar al mismo tiempo una mente de metal y aumentar dramáticamente la cantidad del atributo almacenado. Efectivamente, esto usa la naturaleza fin-positiva de la alomancia para usar el poder de Conservación para alimentar el arte de fin-neutral de la feruquimia.</p>
                <p>Después del Catacendro, y la aparición de Ferrins, comenzó a ser posible el nacimiento de individuos con una única habilidad alomántica y una habilidad feruquimica. Estas personas son conocidas como Nacidobles. Cuando las habilidades de un individuo comparten un mismo metal, entonces se los conoce como Componedores. Sim embargo cuando no lo hacen, la interacción entre las dos habilidades crea un efecto conocido como Resonancia.</p>
                <p>Al igual que cualquier objeto investido, una Mente de metal resiste a la Alomancia de un Atraedor y un Lanzamonedas. La fuerza de la resistencia se basa en el nivel de Investidura almacenado en la mente de metal. Una mente de metal con solo una pequeña cantidad de atributo almacenado podría resistir solo un poco, mientras que una mente de metal completamente cargada será efectivamente inmune.</p>
                <p>Es teóricamente posible detectar el uso de feruquimia usando la Alomancia del bronce, ya que puede detectar cualquier investidura cinética, sin embargo requiere un "ajuste" que no se conoce actualmente. Parte del problema es que feruquimica es una manifestación más interna de Investidura que la Alomancia.</p>
                <h1 className= 'ui small header'>Hemalurgia</h1>
                <p>Una clavo hemalúrgico se puede utilizar como una Mente de metal feruquimica, al igual que muchos feruquimistas pueden almacenar en la misma pieza de metal, dado que las cargas se almacenan en diferentes partes del metal. Un individuo que obtiene feruquimia como resultado de clavo hemalúrgico puede acceder a las mentes de metal del feruquimista que se utilizó para crear el clavo, siempre y cuando el clavo contenga suficiente identidad original del feruquimista. Si ese clavo es dividido y es implantado en dos personas diferentes, cada una de ellas podría acceder a las mentes del metal originales del feruquimista, pero no podrían compartir mentes de metal ya que su propia identidad interferiría.</p>
                <p>Es posible usar oro feruquimicamente para sanar el daño causado por la Hemalurgia, reemplazando eficazmente la pieza de la red espiritual que fue robada.</p>
                    






                <div className='ui divider'/>
                
                <Divisor />
            </article>
    </div>
  );
}

export default Feruquimia;
