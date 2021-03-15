// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

var frasesMuro = ["Esperas un poco, pero no pasa nada.", 
                  "Sigues esperando. No, parece que nada ocurre.", 
                  "Esperas, esperas. Pero, ¿a qué esperas?",
                  "Esperas mirando al muro. Es un muro bonito.",
                  "Cuando menos lo esperes podría pasar algo, pero no lo estás esperando lo suficientemente poco.",
                  "Te impacientas un poco. No sabes qué podría pasar pero quizás merezca la pena esperar.",
                  "Sigues esperando. La espera-nza es lo último que se pierde.",
                  "Después de esperar un rato, algo ocurre. Sin embargo, parece que ocurre en otro callejón sin salida del mundo, no en este. Una pena.",
                  "Si sigues esperando y pasa algo increíble, podrás contárselo a todos tus amigos.",
                  "Una vez oíste que esperar largo rato en un callejón sin salida traía suerte en el amor.",
                  "Tienes una determinación increíble. Esperas con todas tus fuerzas.",
                  "De repente, tras un rato de espera... sigue sin pasar nada",
                  "¿Sabías qué? La paciencia es la madre de la ciencia.",
                  "¿Sabías qué? Los ojos hacen más ejercicio que las piernas. Sobre todo desde que no te mueves de aquí.",
                  "¿Sabías qué? El corazón podría mover un coche. No sé muy bien qué significa, pero lo leí en Internet.",
                  "¿Sabías qué? Mi fruta favorita es pera.",
                  "¿Sabías qué? Durante el desarrollo de esta historia interactiva ningún animal ha sufrido daños.",
                  "¿Sabías qué? Ahora estoy rompiendo la cuarta pared. Pero lo que me encantaría es romper el muro que está mirando el \n\
                  genial protagonista de esta historia, para que pase algo de una vez.",
                  "Me he cansado de escribir \"¿Sabías qué?\" al principio de cada frase, así que a partir de ahora no lo pondré más.",
                  "¿Sabías qué? Sigues esperando.",
                  "Si has llegado hasta aquí, déjame decirte que te aprecio. Soy un narrador muy majo, ¿verdad?",
                  "¿Sabías qué? En realidad el protagonista de esta historia es una pera con forma de humano.",
                  "Tras esperar un largo rato, ves algo moverse en la creciente oscuridad. Sin embargo, era sólo un\n\
                  efecto óptico. Sigues esperando.",
                  "Tengo mil cosas que contarte. Pero si vuelves a pulsar en el botón de esperar, repetiré la misma frase durante el resto de la eternidad.",
                  "Te lo advertí.",
                  "Sigues esperando...",
                  "Sigues esperando...",
                  "Sigues esperando...",
                  "Por favor, deja de esperar y vete de una vez.",
                  "Un grupo de 7 delincuentes súper poderosos te acorrala. Si no sales ahora mismo de aquí, morirás de una forma terrible",
                  "Sigues esperando...",
                  "Ahora sí que sí. A partir de YA, repetiré lo mismo por el resto de la eternidad.",
                  "Sigues esperando..."];
              
var entradaEnVerdad1 = false;
var entradaEnVerdad2 = false;
var entradaEnVerdad3 = false;

var numeroPartidas = 0;

var tiempoEsperaPrueba3 = 120;
var tiempoInicioPrueba3 = 0;

var vecesVerdadPedida = 0;
var vecesMiradoCielo = 0;
var descansoTerminado = false;

var cartelesLeidos = 0;


/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    //ZONA LINEAL INICIO
    start: new undum.SimpleSituation(
        "<h1>Los rayos del Sol te acarician suavemente a través de la ventana...</h1>\
        <p>...mientras tu madre te grita.\n \</p>\
        </br>\
        <p><i>\n<<¡LEVÁNTATE Y VE A COMPRAR EL PAN, YA!>></i>\</p>\
        </br>\
        <p>Te estirazas, te quitas las legañas de los ojos (aunque algunas sobreviven) y te pones en pie. Te da bastante palo ir a por el pan, pero hoy \n\
        toca comer habicholillas con tomate y como no soportas su sabor sueles usar el pan para disimularlo. Así que, por tu propio bien, decides ir a comprar\n\
        con ganas.\</p>\
        </br>\
        <p class='transient'>Ahora sólo necesitas <a class='newsituation' href='habitacion'>buscar algo</a> para vestirte</p>"
    ),

    habitacion: new undum.SimpleSituation(
        "<h1>Exploras tu habitación</h1>\
        <p>Observas con detenimiento tu cuarto, mientras terminas de despertar. Está como siempre: ordenado... pero no demasiado.\</p>\
        </br>\
        <p>Entre otras cosas, encuentras unos <a href='./papeles' class='once'>papeles revueltos</a> \n\
        encima del escritorio, tu <a href='./zapatillas' class='once'>par de zapatillas</a> de casa preferidas al lado de la cama\n\
        y el <a href='./armario' class='once'>armario</a> a medio abrir.\</p>\
        </br>",
        {
            actions: {
                papeles: function enter(character, system, action){
                    system.write("<p>Entre los papeles ves un documento con tu nombre y tu carrera: Javier Camacho, Ing. Informática UJA. El folio tiene garabateados\n\
                    unos esquemas que dibujaste para un juego narrativo que nunca vió la luz. En él, el protagonista eras tú.\n\
                    </p> </br>"
                    );
            
                    system.setCharacterText("<p>Al leer tu nombre algo extraño cruza tu mente: no estás seguro de si esa es tu verdadera identidad, \n\
                    pero sientes que si no lo fuera algo terrible podría pasar...</p>"
                    );
                },
                
                zapatillas: function enter(character, system, action){
                    system.write("<p> Miras fijamente tus zapatillas. Te encantan porque son ridículas. Recuerdas que cuando las compraste \n\
                    estabas buscando las zapatillas más feas de la tienda. En cuanto las viste, supiste que eran las indicadas.\n\
                    </br>\
                    <img src='media/games/zapatillas.jpg' class='float_center'></p>\n\
                    </br>\
                    <p>Puedes <a href='./ponerzapatillas' class='once'>ponértelas</a> para hacer el ridículo durante el resto del día.</p> </br>"               
                    );
                },
                
                ponerzapatillas: function enter(character, system, action){
                    system.write("<p> Te pones las zapatillas. Te sientes un poco más feliz. Más o menos. </p> </br>");
            
                    system.setCharacterText("<p>Las palabras del Profesor Oak resuenan en tu cabeza: ¡Javier, cada cosa en su momento! </p>");
            
                    system.setQuality("zapatillas", true); 
                },
                
                armario: function enter(character, system, action){
                    system.write("<p>No sabes por qué el armario está medio abierto. Quizá un monstruo viva en él, o peor, \n\
                    quizá tu hermano pequeño ha vuelto a rebuscar entre tus cosas. No lo piensas mucho y miras tu ropa.</p> </br>\n\
                    \n\
                    <p class='transient'>Entre tu camiseta básica negra y tu camiseta básica carbón, ves una <a class='newsituation' href='camisetaroja'>camiseta básica azabache</a> y \n\
                    una <a class='newsituation' href='camisetaazul'>camiseta básica azul marino</a>. Te encantan estas trascendentales decisiones, aunque dada su importancia a veces \n\
                    llegas a la parálisis por análisis.</p>"
                    );
            
                    system.setCharacterText("<p>Piensas que la palabra armario es graciosa, porque arma significa arma, y río, río. Te imaginas un arma en un río. Un \n\
                    segundo después te alivias porque nadie esté leyendo tu mente.</p>"
                    );
                }
            }
        }
                
    ),

    camisetaroja: new undum.SimpleSituation(
        "<h1>Te pones la camiseta básica azabache</h1>\
            <p>Esta camiseta tiene un gran valor emocional para ti. La llevabas cuando hiciste tu primer commit y cuando te tocó aquel sorteo de Twitter donde regalaban \n\
            una PlayStation 5. Aunque la Play todavía no te ha llegado...\</p>\
            </br>\
        <p class='transient'>Ahora que estás vestido puedes <a href='salon'>ir al salón</a> para coger el dinero y marcharte.</p>",
    
        {
            enter: function (character, system, from){
                system.setQuality("camisetaazabache", true);
                
                system.setCharacterText("<p>A veces te dicen que siempre vistes igual: de negro. En esos momentos sientes pena por quienes no saben discernir entre un \n\
                negro mate y un negro grafito.</p>"
                );
            }
        },
    ),

    camisetaazul: new undum.SimpleSituation(
            "<h1>Te pones la camiseta básica azul marino</h1>\
            <p>Esta camiseta tiene un gran valor emocional para ti. La llevabas cuando cumpliste 18 años y cuando sacaste un 10 en Estructuras de Datos. \n\
            Aunque no recuerdas bien si esto ocurrió realmente...\</p>\
            </br>\
            <p class='transient'>Ahora que estás vestido puedes <a href='salon'>ir al salón</a> para coger el dinero y marcharte.</p>",    
        {
            enter: function (character, system, from){
                system.setQuality("camisetaazulmarino", true);
                
                system.setCharacterText("<p>A veces te dicen que siempre vistes igual: de negro. En esos momentos sientes pena por quienes no saben discernir entre un \n\
                negro mate y un negro grafito.</p>"
                );
            }
        }
    ),

    salon: new undum.SimpleSituation(
        "<h1>Llegas al salón</h1>\
        <p>En el salón encuentras a tu madre, viendo la televisión. Está viendo una serie que se ha hecho muy popular últimamente. \n\
        Te paras a <a href='./tele' class='once'>verla unos segundos</a>.\
        </br></br>\
        Rebuscas entre el 'montón de la chatarra' hasta <a href='./dinero' class='once'>encontrar</a> 70 céntimos.\</p></br>",
    
        {
        actions: {
                dinero: function enter(character, system, action){
                    system.write("<p>El 'montón de la chatarra' es un bote de calderilla donde tu familia mete\n\
                    todos las monedas de 1 y 2 céntimos que consigue. Por tanto, recoges lo que necesitas y cargas con \n\
                    una pequeña bolsa en cuyo interior hay 66 monedas de 1 céntimo y 2 monedas de 2 céntimos.\</p> </br>\
                    <p class='transient'>Estás listo para <a class='newsituation' href='calle'>salir</a> a comprar el pan.</p> </br>"
                    );
            
                    system.setCharacterText("<p>Cuando juntas muchas monedas en un bote, el olor que desprenden no es muy agradable. Sobre todo si la mayoría\n\
                    de ellas son encontradas en la calle. Por suerte, perdiste el sentido del olfato cuando eras un niño. Por oler el bote.</p>"
                    );
            
                    system.setQuality("bolsamonedas", true);
                },
                
                tele: function enter(character, system, action){
                    system.write("<p> La serie en cuestión se llama 'Roca Rivasly'. Trata sobre un caballero y una calculadora... no estás muy seguro. Es la típica serie\n\
                    de moda que todo el mundo sigue ciegamente porque es lo que toca.</p></br>"
                    );
            
                    system.setCharacterText("<p>En el fondo de tu corazón te encantaría dejar de fingir que odias la serie y empezar a hablar de ella con todos tus amigos, comprarte\n\
                    todo el merchandising, cambiar tu apellido a Rivasly y hacerte una cirugía para parecerte al apuesto caballero. Pero seguirás fingiendo para no parecer un normie.</p>"
                    );
                }
            }
        }
    ),

    calle: new undum.SimpleSituation(
        "<h1>Sales a la calle</h1>\
        <p>Con todo preparado para ir a por el glorioso cereal fermentado, también conocido como 'pan', cruzas la puerta y sales a la calle. El Sol te golpea con\n\
        una fuerza cariñosa. Hoy es uno de esos días que a ti te gustan: tranquilos, rutinarios, ordinarios; aunque con un toque de aventura, ya que hacía 3 semanas que \n\
        no salías de tu cuarto.\</p>\
        </br>\
        <p class='transient'>Ahora tienes que tomar otra decisión de peso: ¿irás a la tienda por el camino de la <a class='newsituation' href='izquierda'> izquierda</a> \n\
        o por el camino de la <a class='newsituation' href='derecha'>derecha</a>?</p>",
        {
            enter: function (character, system, from){
                system.setCharacterText("<p>Izquierda o Derecha. Piensas que es una decisión con bastante importancia. No sabes qué puedes encontrar en cada uno de los caminos.\n\
                Seguro que increíbles aventuras aguardan en todas las direcciones...</p>");
            }
        },
    ),

    izquierda: new undum.SimpleSituation(
        "<h1>Vas por el camino de la izquierda</h1>\
        <p>Eliges ir por la izquierda. Un poco emocionado porque no sabes qué intrépidos sucesos acaecerán, avanzas por la calle, saboreando el paseo. No te encuentras con nada ni \n\
        nadie, pero antes de llegar al final de la calle ves una especie de <a class='newsituation' href='muro'>callejón sin salida</a>.\</p>\
        </br>\
        <p class='transient'>Un poco decepcionante, pues no ocurrió nada especial. Pero al menos, la <a class='newsituation' href='tienda'>tienda</a> ya está delante de ti.</p>"
    ),

    derecha: new undum.SimpleSituation(
        "<h1>Vas por el camino de la derecha</h1>\
        <p>Eliges ir por la derecha. Un poco alterado porque fantaseas con mil hazañas que vivir en este viaje, avanzas por la calle, disfrutando del paisaje.\n\
        No te encuentras con nada ni nadie, excepto con un <a href='./vecino' class='once'>vecino</a> un poco raro que te mira fijamente, con las manos cruzadas en la espalda.\</p>\
        </br>\
        <p>Antes de llegar al final de la calle ves una especie de <a class='newsituation' href='muro'>callejón sin salida</a> que puedes visitar.</p></br>\
        <p class='transient'>Un poco decepcionante, pues no ocurrió nada especial. Pero al menos, la <a class='newsituation' href='tienda'>tienda</a> ya está delante de ti.</p></br>",
        {
            actions: {
                vecino: function enter(character, system, action){
                    system.write("<p>El señor, ya mayor, te sigue mirando sin pestañear. Piensas que quizá sea un poderoso mago que está intentando \n\
                    conjurar un hechizo sobre ti. Quizá quiera quitarte la bolsa de los 70 céntimos.</p></br>\
                    <img src='media/games/abuelo.jpg' class='float_center'></p></br>\
                    <p>Cuando parpadeas, el hombre ha desaparecido. Sientes miedo y aceleras el paso...</p>");
                    
                    system.setCharacterText("<p>Increíbles aventuras, sí...</p>");
                }
            }
        }
    ),
    
    muro: new undum.SimpleSituation(
        "<h1>Te adentras en el callejón sin salida</h1>\
        <p>Efectivamente, es un callejón sin salida. No hay nada especial aquí. Nada. Puedes <a href='./esperar'>esperar</a> un poco, si lo deseas.</p></br>\
        <p class='transient'>También puedes ir a la <a class='newsituation' href='tienda'>tienda</a>. El pan no espera.</p></br>",
        {
            actions: {
                enter: function(character, system, action){
                    system.setCharacterText("<p>¡Vaya muro más bonito cierra el callejón!</p>");
                },
        
                esperar: function (character, system, action){                   
                    var siguienteFrase = "";

                    if (character.qualities.tiempoEspera < frasesMuro.length)
                        siguienteFrase = "<p>" + frasesMuro[character.qualities.tiempoEspera++] + "</p>";
                    else
                        siguienteFrase = "<p>Sigues esperando...</p>";
                    
                    siguienteFrase += "</br> <p class='transient'>Puedes seguir <a href='./esperar'>esperando</a> o ir a la <a class='newsituation' href='tienda'>tienda</a>.</p></br>";
                    
                    system.write(siguienteFrase);
                }       
            }
        }
    ),

    tienda: new undum.SimpleSituation(
        "<h1>Entras en la tienda</h1>\
        <p>Miras la tienda durante unos instantes, un poco extrañado. Has entrado mil veces a esa tienda pero ahora no la terminas de reconocer. \n\
        Te paras a <a href='./estanterias' class='once'>observar</a> los productos de las estanterías durante unos segundos.\</p> </br>\
        <p>La dependienta te sonríe. Ella era tu compañera de clase en el colegio, pero a su familia le tocó la lotería\n\
        y decidieron montar la panadería de sus sueños. Ella dejó de estudiar para levantarse todos los días a las 5 de la mañana y hacer el pan con sus\n\
        propias manos. Te pregunta que qué deseas.</p></br>\
        <p class='transient'>Al fin llega otra de estas decisiones importantes: puedes pedirle un \n\
        <a  class='newsituation' href='panchapata'>pan chapata</a> o una <a class='newsituation' href='panbaguette'> baguette</a>. ¡Elige bien!</p></br>",
        {
            enter: function(character, system, action){
                    system.setCharacterText("<p>\"Huele muy bien...\"</br> Es lo que pensarías si no hubieras perdido el sentido del olfato oliendo el tarro de las monedas. </p>");
            },
                
            actions: {              
                estanterias: function (character, system, action){                   
                    system.write("<p>En uno de los estantes hay un bote transparente. Dentro de él ves una barra de pan en miniatura, flotando en un líquido\n\
                    que parece pegajoso. Al lado, lo que parece ser un... ¿humano hecho de pan? Es enano, pero puedes ver cómo se mueve. Sujeta un pequeño cartel donde\n\
                    está escrito lo siguiente: \"... --- ...\"</p></br>\
                    <p>Sacudes tu cabeza, parpadenado con fuerza, y te acercas al mostrador.</p></br>");
                    
                    system.setCharacterText("<p>Siendo sincero contigo mismo, esa persona panificada tenía una pinta apetecible...</p>");
                }       
            }
        }
    ),

    panchapata: new undum.SimpleSituation(
        "<h1>Decides comprar el pan chapata.</h1>\
        <p>Te decantas por el pan chapata. Esa palabra siempre te pareció graciosa: chapata. Cha. Pa. Ta.\</p></br>\
        \
        <p class='transient'>Sin nada más que hacer en la tienda, decides <a  class='newsituation' href='vueltaacasa'>volver a casa</a>.</p>",
        {
            enter: function (character, system, from){
                system.setQuality("panchapata", true);
                system.setQuality("bolsamonedas", false);
                system.setCharacterText("<p>Estás deseando salir de la tienda para darle un mordisco a la barra de pan.</p>");      
            }
        },
    ),

    panbaguette: new undum.SimpleSituation(
        "<h1>Decides comprar una baguette.</h1>\
        <p>Te decantas por la baguette. Hoy te sientes un poco francés, un poco sofisticado. Intentas pronunciar \"baguette\" con tu mejor acento francés.\n\
        La dependienta te mira con el ceño un poco fruncido.\</p></br>\
        \
        <p class='transient'>Sin nada más que hacer en la tienda, decides <a  class='newsituation' href='vueltaacasa'>volver a casa</a>.</p>",   
        {
            enter: function (character, system, from){
                system.setQuality("panbaguette", true);
                system.setQuality("bolsamonedas", false);
                
                system.setCharacterText("<p>Estás deseando salir de la tienda para darle un mordisco a la barra de pan.</p>");     
            }
        },
    ),

    vueltaacasa: new undum.SimpleSituation(
        "<h1>Vuelves a casa.</h1>\
        <p>Sales de la tienda y vuelves alegremente a casa. Antes de llegar, arrancas un pedazo de pan y te lo comes con ganas. Sin embargo, el trozo que has arrancado\n\
        era demasiado grande y sientes cómo te ahogas. Toses y toses hasta expulsarlo. Resoplas de alivio. Por suerte, eres \n\
        capaz de aguantar hasta 10 minutos sin respirar.\</p></br>\
        <p>Cuando llegas a la puerta de tu casa te percatas de algo extraño. Un poco a la derecha de la entrada hay una especie de apertura en... ¿el propio espacio?\n\
        Si fueras físico podrías hasta conjeturar que se trata de una brecha interdimensional.</p></br>\
        <p class='transient'>Puedes acercarte a <a class='newsituation' href='investigar'>investigar</a> o, ya que estás un poco cansado, irte a <a class='newsituation' href='iradormir'>dormir</a> directamente.</p>"
    ),

    iradormir: new undum.SimpleSituation(
        "<h1 class='transient'>Te vas a dormir plácidamente.</h1>\
        <p class='transient'>Decides ir a dormir. Te dan un poco de igual las brechas interdimensionales, la física y la curiosidad en general. Total, ¿es que acaso investigar una\n\
        anomalía en el espacio-tiempo te iba a dar de comer?\</p></br>\
        \
        <p class='transient'>Aquí acaba tu aventura. Pero si te arrepientes haber pasado olímpicamente de todo, puedes <a class='newsituation' href='vueltaacasa'>volver unos instantes atrás</a>. No\n\
        digas que no soy generoso...</p>",
        {
            enter: function (character, system, from){
                system.setCharacterText("<p>Que se rasgue el tejido del Universo no es suficiente motivo como para quedarme sin dormir.</p>");     
            }
        }
    ),

    investigar: new undum.SimpleSituation(
        "<h1>Te acercas a investigar.</h1>\
        <p>Cuando estás a un metro de la brecha, sientes como te atrae. Una especie de corriente succionadora te acerca lenta pero inexorablemente hacia la ella. Aunque \n\
        quieres retirarte, no lo consigues. Sientos miedo a la vez que curiosidad. Mirando el lado bueno, ya no tendrás que comer habicholillas con tomate.\</p></br>\
        <p>Antes de que te quieras dar cuenta, la brecha te ha absorbido por completo. De repente te ves rodeado de negrura. Unos segundos después, a tu alrededor comienzan a\n\
        iluminarse lo que parecen ser estrellas. No tienes ni idea de qué está pasando.</p></br>\
        <p class='transient'>Sientes que te mueves, no sabes si hacia arriba o hacia abajo, pero de alguna forma percibes que\
        cuando decidas <a class='newsituation' href='zonaportales'>parar</a> podrás hacerlo sin problema.</p>",
        {
            enter: function (character, system, from){
                system.setCharacterText("<p>En realidad te encanta la física, ¡incluso viste dos vídeos de Quantum Fracture!</p>");     
            }
        }
    ),

    zonaportales: new undum.Situation(
        {
            enter: function (character, system, from){
                system.write("<h1>Llegas al centro del Universo.</h1>\
                <p>Sólo necesitas pensar en detenerte para que tu cuerpo, si es que aún tienes cuerpo, se pare lentamente. Llegas a un lugar lleno\
                de colores extraños que nunca nadie ha visto, flores con formas que desafían a la física y retratos de Cthulhu con un gracioso bigote.\
                <b>Es el centro del Universo</b>.</p></br>");
                
                //Si ya tienes las 3 verdades
                if (character.qualities.verdad1 === true && character.qualities.verdad2 === true && character.qualities.verdad3 === true){
                    system.write("<p>Con las Tres Verdades en tu poder, todo se siente diferente. Paseas por el Centro del Universo, pero es como si el propio tiempo se hubiese\
                    detenido.</p></br> <p>En el centro del Centro del Universo aparece una especie de tablón de madera con unas notas pegadas. \n\
                    Te <a class='newsituation' href='final'>acercas</a> a investigar.</p>");
                    system.setCharacterText("<p>La Verdad sobre el Universo, guau... Tienes muchas ganas de descubrir qué es la Verdad.</p>"); 
                } else { //Si no
                    //Si acabas de llegar
                    if (character.qualities.verdad1 === false && character.qualities.verdad2 === false && character.qualities.verdad3 === false){
                        system.write("<p>Encuentras un cartel gigante que dice lo siguiente: </p></br>\
                        <p><i>Si quieres conocer la Verdadera Verdad del Universo, viaja a través de los tres portales y encuentra las tres Verdades. Sólo entonces, aquí, se te\
                        será revelado todo.</i></p></br>\
                        <p>Tu objetivo en la vida nunca había sido encontrar la verdad sobre nada, pero ya que estás aquí, decides intentarlo.</p></br>");
                    }
                    
                    //Comprobaciones verdades
                    if (entradaEnVerdad1 === false){
                        system.write("<p> - Un <a class='newsituation' href='portal1boton'>gran portal ovalado</a> gira ferozmente. Una Verdad se esconde aquí. - </p></br>");                 
                    } else {
                        system.write("<p> - El portal ovalado ha sido cerrado. - </p></br>");
                    }
                    
                    if (entradaEnVerdad2 === false){
                        system.write("<p> - Un <a class='newsituation' href='portal2boton'>gran portal triangular</a>  convulsiona, esperándote. Una Verdad se esconde aquí. - </p></br>"); 
                    } else {
                        system.write("<p> - El portal triangular ha sido cerrado. - </p></br>");
                    }
                    
                    if (entradaEnVerdad3 === false){
                        system.write("<p> - Un <a class='newsituation' href='portal3boton'>gran portal cuadrado</a>  se abre sobre sí mismo una y otra vez. Una Verdad se esconde aquí. - </p></br>"); 
                    } else {
                        system.write("<p> - El portal cuadrado ha sido cerrado. - </p></br>");
                    }
                }
            }
        }
    ),

    portal1boton: new undum.SimpleSituation(
        "",{
            enter: function (character, system, from){
                entradaEnVerdad1 = true;             
                
                switch (character.qualities.numeroVerdades){
                    case 0:
                        system.doLink("portal1");
                        break;
                    
                    case 1:
                        system.doLink("portal2");
                        break;
                        
                    case 2:
                        system.doLink("portal3");
                        break;
                } 
            }
        },
    ),
    
    portal2boton: new undum.SimpleSituation(
        "",{
            enter: function (character, system, from){
                entradaEnVerdad2 = true;             
                
                switch (character.qualities.numeroVerdades){
                    case 0:
                        system.doLink("portal1");
                        break;
                    
                    case 1:
                        system.doLink("portal2");
                        break;
                        
                    case 2:
                        system.doLink("portal3");
                        break;
                } 
            }
        },
    ),
    
    portal3boton: new undum.SimpleSituation(
        "",{
            enter: function (character, system, from){
                entradaEnVerdad3 = true;             
                
                switch (character.qualities.numeroVerdades){
                    case 0:
                        system.doLink("portal1");
                        break;
                    
                    case 1:
                        system.doLink("portal2");
                        break;
                        
                    case 2:
                        system.doLink("portal3");
                        break;
                } 
            }
        },
    ),
    

    //ZONA PORTAL 1
    portal1: new undum.SimpleSituation(
        "<h1>Apareces en la Dimensión Roja</h1>\
        <p>El portal te absorbe con facilidad. Es agradable, sientes un cosquilleo en el estómago. Segundos después te desmayas.\</p></br>\
        <p>Cuando te despiertas, te ves rodeado de botones. Botones de todas las formas, tamaños y colores. Con inscripciones en todos los idiomas. Frente a ti, un botón\n\
        gigante con una cara muy humana te mira sonriente.</p></br>\n\
        <p><i>¡Ah! Al fin despiertas. Bievenido a la dimensión de los botones. Hace cientos de años, poco después de la Singularidad, los humanos fueron exterminados \n\
        por la Inteligencia Artifical. Esta los convirtió a todos en botones, que parecían un poco más útiles.\n\
        </br></br>Si quieres obtener mi parte de la Verdad, tendrás que superar una pequeña prueba. Pulsa el botón negro que tienes delante de ti 5 veces. Pero, recuerda, cada vez\n\
        que lo pulses, un botón con forma de gatito morirá. ¡Adelante!</i></p></br>\
        \
        <p class='transient'>Estás tan sorprendido que no puedes articular palabra. Pero <a class='newsituation' href='portal1prueba'>aceptas</a> la prueba. No tienes más remedio.</p>",
        {
            enter: function (character, system, from){
                system.setCharacterText("<p>Te preguntas cómo se reproducirán los botones. ¿Le temerán a las pantallas táctiles?</p>");     
            }
        }
    ),

    portal1prueba: new undum.SimpleSituation(
        "<h1>Aceptas la prueba del Gran Botón</h1>\
        <p>Delante de ti tienes el botón negro. Da un poco de miedo. </br></br> Puedes <a href='./pulsar'>pulsarlo</a> para completar la prueba.\</p></br>",
        {
            actions:{
                pulsar: function (character, system, action){
                system.setQuality('numeroPulsaciones', character.qualities.numeroPulsaciones+1);
                
                if (character.qualities.numeroPulsaciones === 5){
                    system.write("<p><i>Me gusta verte pulsar el botón. Mejor púlsalo 10 veces más, por favor.</i></p></br>");
                } 
                else if (character.qualities.numeroPulsaciones === 15){
                    system.write("<p><i>Bastante bien, sí señor... Quizá podemos dejarlo en 30 pulsaciones. Venga.</i></p></br>");   
                } 
                else if (character.qualities.numeroPulsaciones === 30){
                    system.write("<p><i>No puedo dejar de mirar cómo pulsas el botón. Es sencillamente fantástico. Llega a 60 y te daré la Verdad.</i></p></br>");
                    system.setCharacterText("<p>En el fondo, te está gustando esto de pulsar botones.</p>");
                } 
                else if (character.qualities.numeroPulsaciones === 60){
                    system.write("<p><i>Está bien. He disfrutado mucho viendo cómo pulsabas el botón. Ahora te daré la Verdad.</i></p></br>");
                    system.write("<p class='transient'>Ante ti aparece flotando un botón verde con la palabra 'VERDAD' escrita en él. Lo <a class='newsituation' href='portal1final'>pulsas</a>.</p></br>");
                    system.setCharacterText("<p>Te hubiera gustado seguir pulsando el botón. Se estaba calentito, no era difícil. ¿Lo de los gatitos? ¿Qué gatitos?</p>");
                } 
                else if (character.qualities.numeroPulsaciones === 80){
                    system.write("<p><i>Sólo hay una forma de perder en este juego, y es que pulses el botón 3 veces más. Lo digo muy en serio.</i></p></br>");
                } 
                else if (character.qualities.numeroPulsaciones === 83){
                    system.write("<p><i>¡Era una broma! Disfruta pulsando el botón todo lo que quieras. Yo te observaré desde muy, muy cerca...</i></p></br>");
                }           
                }
            }
        }
    ),

    portal1final: new undum.SimpleSituation(
        "<h1>Has conseguido la Verdad del Botón</h1>\
        <p>Cuando pulsas el botón, sientes que te desmaterializas lentamente. Has aprendido que los humanos pulsan el botón siempre, porque es más cómodo que oponerse a ello. Aunque \n\
        mueran botones con forma de gatito.\</p></br>\
        <p>Echas de menos pulsar el botón.</p></br>\
        \
        <p class='transient'>Vuelves a <a class='newsituation' href='zonaportales'>caer, y caer, y caer...</a></p>",
        {
            enter: function(character, system, from){
                system.setQuality("verdad1", true);
                character.qualities.numeroVerdades++;
                system.setQuality("numeroPulsaciones", 0);
            }
        }
    ),

    //ZONA PORTAL 2
    portal2: new undum.SimpleSituation(
        "<h1>Apareces en la Dimensión Verde</h1>\
        <p>Viajas a través del portal. Te estás acostumbrando a esto y sabes que vas a echarlo de menos cuando vuelvas al mundo real (¿o es esto el mundo real?). Esta vez\n\
        consigues no desmayarte, pero no quieres recordar las atrocidades que has visto en el viaje. El código del universo está poco optimizado. \</p></br>\
        <p>Cuando por fin llegas a tu destino, delante de ti se extiende una llanura infinita cubierta de mesas y sillas. En cada una de las mesas hay hombres trajeados de mediana edad, \n\
        casi todos calvos, tirando lo que parecen ser dados encima de su mesa.</p></br>\
        <p class='transient'>Te acercas a la mesa central, la más grande. En ella, el hombre que parece más importante de todos te mira unos segundos y sigue tirando el dado.\n\
        Intentas <a class='newsituation' href='portal2segundo'>comunicarle</a> por qué estás allí.</p>",
        {
            enter: function (character, system, from){
                system.setCharacterText("<p>Este lugar es como el Silicon Valley del surrealismo.</p>");     
            }
        }
    ),
    
     portal2segundo: new undum.SimpleSituation(
        "<h1>Apareces en la Dimensión Verde</h1>\
        <p>Le explicas toda tu aventura al trajeado hombre. Resopla, molesto, ya que tu presencia le quita tiempo de seguir tirando el dado. Te explica que él se ha esforzado mucho para \n\
        llegar a donde está. Empezó tirando el dado... ¡en el garaje de sus padres! Y ahora es un exitoso tirador de dados. Pero le fue encomendada la misión de ponerte a prueba cuando\n\
        llegaras y así lo hará.</p>\</br>\
        <p><i>Si quieres la Verdad, tira el dado contra mí. Si me ganas, cosa imposible, te la daré.</i></p></br>\
        <p class='transient'>Te acerca un par de dados, que <a class='newsituation' href='portal2prueba'>recoges</a>. Te preparas para jugar.</p>"
    ),

    portal2prueba: new undum.SimpleSituation(
        "<h1>Aceptas la prueba del Gran Tirador</h1>\
        <p><i>Ambos tenemos dos dados, como ves. Los tiraremos a la vez. El par de dados con una suma mayor, ganará. Si me ganas, te daré la verdad.</i></p></br>\
        \
        <p class='transient'>Cuando quieras, <a href='./tirar'> tira los dados </a>.</p></br>",
        {
            enter: function(character, system, action){
                system.setCharacterText("<p>La gente poderosa tiene una forma muy rara de resolver conflictos...</p>");
            },
            
            actions:{
                tirar: function (character, system, action){
                
                numeroPartidas++;
                
                switch(numeroPartidas){
                    case 1:
                        system.write("<p><b>Tus dados: 4+2 = 6. Sus dados: 3+4 = 7.</b></p></br>");
                        system.write("<p><i>¡Ja, ja! Como te decía, soy invencible. Venga, prueba de nuevo.</i></p></br>");
                        system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo.</p></br>");
                        break;
                        
                    case 2:
                        system.write("<p><b>Tus dados: 1+1 = 2. Sus dados: 6+6 = 12.</b></p></br>");
                        system.write("<p><i>No tienes nada que hacer. Aprende a tirar tus dados mejor...</i></p></br>");
                        system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo.</p></br>");
                        break;
                        
                    default:
                        var dado1jugador = system.rnd.randomInt(1, 6); 
                        var dado2jugador = system.rnd.randomInt(1, 6);
                        var dado1otro = system.rnd.randomInt(1, 6);
                        var dado2otro = system.rnd.randomInt(1, 6);
                        
                        if (character.qualities.partidasGanadas > 0){
                            system.write("<p>Los dados se mueven solos. Parece que ni siquiera era él mismo quien los controlaba...</p></br>");
                        }
                        
                        system.write("<p><b>Tus dados: " + dado1jugador + "+" + dado2jugador + " = " + (dado1jugador + dado2jugador) + ". \n\
                        Sus dados: " + dado1otro + "+" + dado2otro + " = " + (dado1otro + dado2otro) + ". </b></p></br>");
                        
                        if (dado1jugador + dado2jugador > dado1otro + dado2otro){
                            
                            if (character.qualities.partidasGanadas === 0){
                                system.write("<p><i>No... ¡no puede ser! ¿Cómo es posible? ¿Podrá deberse a que las tiradas de dados son azarosas y su resultado no\n\
                                tiene en cuenta las condiciones materiales ni humanas de aquél que los tira? Imposible, ¡si nunca he fallado una tirada!</i></p></br>");
                                system.write("<p>El trajeado hombre comienza a convulsionar, enfurecido. Su cuerpo se retuerce hasta convertirse en un dado minúsculo, donde todas\n\
                                las caras tienen un 1. Probablemente lo mejor sea <a class='newsituation' href='portal2final'>cogerlo</a>. Un humano transformado en dado tiene que valer un pastizal.</p></br>");                                                                       
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo.</p></br>");
                            } else {
                                system.write("<p>Enhorabuena, acabas de ganar una partida de dados contra la nada. Ojalá tuvieras esta suerte en tu vida diaria.</p></br>");
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo o <a class='newsituation' href='portal2final'>coger</a> el humano dado.</p></br>");
                            }
                    
                            system.setQuality('partidasGanadas', character.qualities.partidasGanadas+1);
                            
                        } else if (dado1jugador + dado2jugador === dado1otro + dado2otro) {
                            if (character.qualities.partidasGanadas === 0){
                                system.write("<p><i>¡Empate! Significa que gano yo. Aprovecharse de los vacíos legales es otra forma de ganar, ¡ja, ja!</i></p></br>");
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo.</p></br>");
                            } else {
                                system.write("<p>Has empatado contra la nada. No ha pasado nada de nada.</p></br>");
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo o <a class='newsituation' href='portal2final'>coger</a> el humano dado.</p></br>");
                            }
                        } else {
                            if (character.qualities.partidasGanadas === 0){
                                system.write("<p><i>Como ves, soy un genio en esto de tirar los dados.</i></p></br>");                                                    
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo.</p></br>");
                            }else{
                                system.write("<p>Has perdido contra la nada. Un poco ridículo, ¿no?</p></br>");                        
                                system.write("<p class='transient'>Puedes <a href='./tirar'> tirar los dados </a> de nuevo o <a class='newsituation' href='portal2final'>coger</a> el humano dado.</p></br>");
                            }
                        }
                        
                        break;
                    }                   
                }
            }
        }
    ),

    portal2final: new undum.SimpleSituation(
        "<h1>Has conseguido la Verdad del Dado</h1>\
        <p>Coges el humano-dado y empiezas a desmaterializarte de nuevo. Has aprendido que los humanos son especialistas en tirar dados y pensar que\n\
        eso es esfuerzo. Quizás si los dados estuvieran equilibrados para todo el mundo...\</p></br>\
        <p>En realidad, tú también quieres unos buenos dados.</p></br>\
        <p class='transient'>Vuelves a <a class='newsituation' href='zonaportales'>caer, y caer, y caer...</a></p>",
        {
            enter: function(character, system, from){
                system.setQuality("verdad2", true);
                character.qualities.numeroVerdades++;
                system.setQuality("partidasGanadas", 0);
            }
        }
    ),

    //ZONA PORTAL 3
    portal3: new undum.SimpleSituation(
        "<h1>Apareces en la Dimensión Azul</h1>\
        <p>Te materializas en el cielo y caes a alta velocidad, temiendo por tu vida. Sin embargo, aterrizas suavemente en una cama gigante. Te quedas tumbado unos instantes,\n\
        disfrutando de la comodidad de las sábanas.\</p></br>\
        <p>Poco después ves a un ser extraño acercarse a ti. Es como una manta con dos agujeros, como los típicos fantasmas de sábanas. Os saludáis y le cuentas por qué estás\n\
        ahí. Él te responde con alegría.</p></br>\
        <p><i>Bienvenido, hijo. No te preocupes, tendrás tu verdad. Aquí no hay ninguna prueba. Sólo relájate un rato. Quédate aquí conmigo, disfruta del ser.\n\
        Existir es una cosa difícil, hijo. Tienes que encontrar momentos para descansar y ayudar a los demás a aliviar su pesadumbrez.</i></p></br>\
        <p class='transient'>Dentro de ti se remueve algo. Te das cuenta de que quizás <a class='newsituation' href='portal3prueba'>descansar</a> un poco no vendría mal...</p>",
        {
            enter: function(character, system, from){
                system.setCharacterText("<p>Esta es la cama más cómoda que jamás has probado. Entre tus pensamientos ronda el cómo puedes robarla.</p>");  
            }
        }
    ),

    portal3prueba: new undum.SimpleSituation(
        "<h1>Aceptas el descanso del Gran Amigo</h1>\
        <p>Crees que este simpático ser tiene razón, y decides descansar un rato.</p></br>\
        <p><i>Quédate un rato conmigo. Hace mucho que nadie viene a verme. De hecho, creo nunca vino nadie a verme. Quizás por eso me gusta tanto\n\
        ayudar a la gente... Pero tampoco quiero aburrirte con mis historias. Te daré la verdad cuando te relajes un rato. Espera 2 minutos.</i></p></br>\
        <p>Te tumbas, miras al límpido cielo que se alza ante ti, y disfrutas de tener consciencia. Puedes <a href='./mirar'>descansar</a> mirando o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>",
        {
            actions: {
                preguntar: function (character, system, from){
                                
                    vecesVerdadPedida++;                                     
                    
                    if (system.time - tiempoInicioPrueba3 > tiempoEsperaPrueba3){
                        system.write("<p><i>Muy bien, muy bien. Ha llegado el momento de darte la Verdad. Gracias por hacerme compañía un rato y aceptar mi ayuda. \n\
                        Me siento muy feliz por haberte podido ayudar. Recuerda beber algo de agua antes de irte. Ahora, me sacrificaré por ti, pues es para lo que he sido concebido.</i></p></br>");
                        system.write("<p>El ser se encoge sobre sí mismo y, de repente, desaparece con un pequeño chasquido, dejando caer el trapo que formaba su cuerpo. Puedes <a class='newsituation' href='portal3final'>recoger el trapo</a> cuando desees.</p></br>");
                        system.setQuality("tiempoEsperaPrueba3", 0);
                        system.setCharacterText("<p>Te sientes muy contento. Cuidar de los demás es lo más satisfactorio del mundo.</p>");  
                    } else {
                        if (descansoTerminado){
                            system.write("<p>No tienes nada más que hacer aquí. Puedes <a href='portal3final'>coger la Verdad e irte</a>, o seguir <a href='./mirar'>\n\
                            disfrutando</a> del momento.</p></br>");
                            return;
                        }
                    
                        switch (vecesVerdadPedida){
                        case 1:
                            system.write("<p><i>Claro, hijo. Te daré la verdad, pero descansa un poco más.</i></p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 2:
                            system.write("<p><i>Descansa, descansa. ¡Si no has descansado nada!</i></p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 3:
                            system.write("<p><i>¡Ja, ja! Pero qué impaciente eres... Sólo descansa un poco más.</i></p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 4:
                            system.write("<p><i>Te estoy ofrenciendo la cama más cómoda que jamás podrás usar. ¿Por qué no quieres descansar un poco más?</i></p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 5:
                            system.write("<p><i>Hijo, si no descansas un rato más, voy a obligarte a que lo hagas. Y no quiero hacerte daño. Por favor...</i></p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        default:
                            system.write("<p><i>No lo entiendo... te he ofrecido la máxima hospitalidad, te he dejado disfrutar de la mejor de las camas y, aún así, no quieres \n\
                            ni estar conmigo dos minutos. Esto me hace sentir profundamente triste. Sólo quería que estuvieras conmigo un rato. No pedía nada más. Pero tú has insistido e\n\
                            insistido. El único propósito para el que fui creado fue para ayudarte, y me duele mucho que el momento para el que me he entrenado durante eones haya acabado así.\n\
                            Sólo quería un poco de tu compañía. Sólo quería poder ayudarte. Pero no te preocupes. Es culpa mía. Quizá no entrené lo suficiente...</i></p></br>");                           
                            system.write("<p>El fantasma se evapora, con lo que parecen ser lágrimas en los ojos. Deja caer el trapo que formaba su cuerpo. Puedes <a href='portal3final'>recogerlo</a> cuando desees.</p></br>");
                            descansoTerminado = true;
                            system.setCharacterText("<p>Te sientes muy avergonzado. No querías hacerle daño a algiuen que se ha preocupado por ti, pero la impaciencia ha podido contigo.</p>"); 
                            break;
                        }
                    
                        system.setQuality("tiempoEsperaPrueba3", tiempoEsperaPrueba3 - (system.time - tiempoInicioPrueba3));
                    }
                },
                
                mirar: function(character, system, from){
                    vecesMiradoCielo++;
                    
                    switch (vecesMiradoCielo){
                        case 1:
                            system.write("<p>El cielo es infinito y unas nubes con formas peculiares lo cruzan. Ves una nube que tiene forma de cono de helado. A la derecha, hay otra \n\
                            nube con forma de persona a la que se le ha caído un cono de helado.</p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 2:
                            system.write("<p>Sigues observando las nubes. Ahora ves una que parece un titán comiéndose a un niño. Vaya cosas tienen las nubes.</p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 3:
                            system.write("<p>Te gusta mirar el cielo. Espera, ¿esa nube está reproduciendo la película de Shrek 1? </p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 4:
                            system.write("<p>La siguiente nube que ves te está mirando a ti. Quizás la nube pasee por el cielo, observando a los seres de abajo, y pensando en las\n\
                            formas que tienen.</p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        case 5:
                            system.write("<p>Ya no ves más nubes en el cielo. Es un poco extraño, como si al creador del Universo se le hubieran acabado las ideas. Suena como una tontería,\n\
                            pero quizá Dios no sea tan omnipotente al fin y al cabo...</p></br>");
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                            
                        default:
                            system.write("<p>No hay mucho más que ver, pero absorbes la vitamina D del Sol como si no hubiera un mañana. Sólo disfrutas del descanso.</p></br>");                           
                            system.write("<p>Puedes <a href='./mirar'>descansar</a> mirando un poco el cielo o <a href='./preguntar'>pedir</a> la Verdad cuando lo desees.</p></br>");
                            break;
                        }
                    
                        if (system.time - tiempoInicioPrueba3 > tiempoEsperaPrueba3){
                            descansoTerminado = true;
                            system.setQuality("tiempoEsperaPrueba3", 0);
                        }
                    
                        if (!descansoTerminado)
                            system.setQuality("tiempoEsperaPrueba3", tiempoEsperaPrueba3 - (system.time - tiempoInicioPrueba3));                    
                }
            },
            
            enter: function(character, system, from){
                tiempoInicioPrueba3 = system.time;
                system.setQuality("tiempoEsperaPrueba3", tiempoEsperaPrueba3);
            }                     
        }
    ),

    portal3final: new undum.SimpleSituation(
        "<h1>Has conseguido la Verdad del Descanso</h1>\
        <p>Recoges el trapo. Está muy suave, sientes la calidez de aquél que te ha querido ayudar impregnada en él. Un poco melancólico, te desmaterializas lentamente.\</p></br>\
        <p>Mientras desapareces, piensas en cómo todos nos merecemos evitar el sufrimiento en nuestra existencia. Nadie pidió existir, y crees que precisamente por eso,\n\
        nadie merece dolor.</p></br>\
        <p class='transient'>Vuelves a <a class='newsituation' href='zonaportales'>caer, y caer, y caer...</a></p>",
        {
            enter: function(character, system, from){
                system.setQuality("verdad3", true);
                character.qualities.numeroVerdades++;
            }
        }
    ),

    //FINAL
    final: new undum.SimpleSituation(
        "<h1>El Tablón de Información.</h1>\
        <p>Te acercas al tablón y lees una inscripción en la parte de arriba: \"Información sobre la Verdadera Verdad del Centro del Universo.\"\</p></br>\
        <p>Pegados en el tablón puedes ver un <a href='./cartel1' class='once'>cartel amarillento y brillante</a>, <a href='./cartel2' class='once'>otro resquebrajado y mohoso</a>, \n\
        <a href='./cartel3' class='once'> y uno... ¿transparente?</a></p></br>\
        <p>Estás emocionado y contento. Vas a descubrir la verdad sobre el Universo y, además, no has comido habicholillas con tomate.</p></br>",
        {
            actions: {
                cartel1: function(character, system, from){
                    cartelesLeidos++;
                    
                    system.write("<p>Te acercas al brillante cartel y lees: </p></br>\n\
                    <p><i>La Verdad es que tú existes sólo porque te han creado. Te han creado por voluntad y por necesidad. No existirías si la historia en la que vives\n\
                    no fuera necesaria. No eres nada para quienes te crearon y pueden crear a cientos como tú.</i></p></br>");
                    
                    system.setCharacterText("<p>No puede ser cierto. No puede ser cierto...</p>");
                    
                    if (cartelesLeidos >= 3){
                        system.write("<p>Te sientes abatido. Te sientes triste. Te sientes como estoy dictando ahora mismo que te sientas. \n\
                        Puedo hacer lo que desee. Ahora estás bailando. Ahora estás durmiendo. Ahora no eres consciente de nada de lo que ha ocurrido y ahora sí. \n\
                        Ahora, ahora, ahora... ahora ven <a class='newsituation' href='superfinal'>aquí</a>.</p>");
                    }
                },
        
                cartel2: function(character, system, from){
                    cartelesLeidos++;
                    
                    system.write("<p>Te acercas al mohoso cartel y lees: </p></br>\n\
                    <p><i>La Verdad es que tú existes en una historia. Eres un subnivel de la realidad de quienes te crearon. Tu realidad es minúscula comparada con la de ellos. \n\
                    Sólo eres un medio de transmisión entre quienes son superiores a ti. Aunque lo intentes, no podrás concebir lo que hay por encima de ti.</i></p></br>");
                    
                    system.setCharacterText("<p>No entiendes nada. ¿Cómo puede ser esto la verdad?</p>");
                    
                    if (cartelesLeidos >= 3){
                        system.write("<p>Te sientes abatido. Te sientes triste. Te sientes como estoy dictando ahora mismo que te sientas. \n\
                        Puedo hacer lo que desee. Ahora estás bailando. Ahora estás durmiendo. Ahora no eres consciente de nada de lo que ha ocurrido y ahora sí. \n\
                        Ahora, ahora, ahora... ahora ven <a class='newsituation' href='superfinal'>aquí</a>.</p>");
                    }
                },
                
                cartel3: function(character, system, from){
                    cartelesLeidos++;
                    
                    system.write("<p>Te acercas al cartel transparente y lees: </p></br>\n\
                    <p><i>La Verdad es que tus decisiones no valen nada. Tus decisiones son intrascendentes y ni siquiera son tuyas. Están predeterminadas, diseñadas, estudiadas\n\
                    y te llevarán siempre aquí. Era, es y será imposible que hagas otra cosa en tu existencia más que leerme.</i></p></br>");
                    
                    system.setCharacterText("<p>Esto es terrible... Ahora dudas sobre si realmente querías saber la verdad.</p>");
                    
                    if (cartelesLeidos >= 3){
                        system.write("<p>Te sientes abatido. Te sientes triste. Te sientes como estoy dictando ahora mismo que te sientas. \n\
                        Puedo hacer lo que desee. Ahora estás bailando. Ahora estás durmiendo. Ahora no eres consciente de nada de lo que ha ocurrido y ahora sí. \n\
                        Ahora, ahora, ahora... ahora ven <a class='newsituation' href='superfinal'>aquí</a>.</p>");
                    }
                }
            }
        }
    ),
    
    superfinal: new undum.SimpleSituation(
        "<h1>El Fin Absoluto.</h1>\
        <p>El propósito de tu existencia ha llegado a su fin. De hecho, el propósito de tu existencia <i>era</i> llegar a su fin. \n\
        No queda más que hacer aquí.</p></br>\n\
        <p>Me equivoco. Queda una última cosa: tu destrucción. Cuando esta historia sea cerrada, desaparecerás para siempre. Sólo eres mientras se lean mis palabras.\n\
        Puede ser ya, puede ser dentro de unos segundos, podría no ser nunca.</br></br> Pero esa decisión... <i>esa decisión queda en manos del lector.</i></p></br>",
        {
            enter: function(character, system, from){
                system.setCharacterText("<p>No puedes moverte, no puedes hablar, no puedes hacer nada. Sientes miedo.</p></br><p>\"Por favor, lector. No quiero desaparecer...\"</p>");
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = 'start';

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    zapatillas: new undum.OnOffQuality("-Zapatillas de casa", {priority: "0001", group: 'cosas'}),
    camisetaazabache: new undum.OnOffQuality("-Camiseta azabache", {priority: "0002", group: 'cosas'}),
    camisetaazulmarino: new undum.OnOffQuality("-Camiseta azul marino", {priority: "0002", group: 'cosas'}),
    bolsamonedas: new undum.OnOffQuality("-Bolsa con 66 monedas de 1 céntimo y 2 de dos céntimos.", {priority: "0003", group: 'cosas'}),
    panchapata: new undum.OnOffQuality("-Pan chapata", {priority: "0004", group: 'cosas'}),
    panbaguette: new undum.OnOffQuality("-Baguette", {priority: "0004", group: 'cosas'}),
    tiempoEspera: new undum.IntegerNoShow("Tiempo Espera", {priority: "0001", group: "invisible"}),
    numeroVerdades: new undum.IntegerNoShow("Numero Verdades", {priority: "0001", group: "invisible"}),
    partidasGanadas: new undum.NonZeroIntegerQuality("Partidas ganadas", {priority: "0002", group: 'pruebas'}),
    tiempoEsperaPrueba3: new undum.NonZeroIntegerQuality("Segundos de relajación", {priority: "0003", group: 'pruebas'}),
    verdad1: new undum.OnOffQuality("-La Verdad del Botón", {priority: "0004", group: 'verdades'}),
    numeroPulsaciones: new undum.NonZeroIntegerQuality("Pulsaciones", {priority: "0001", group: 'pruebas'}),
    verdad2: new undum.OnOffQuality("-La Verdad del Dado", {priority: "0004", group: 'verdades'}),
    verdad3: new undum.OnOffQuality("-La Verdad del Descanso", {priority: "0004", group: 'verdades'})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    cosas: new undum.QualityGroup('Cosillas', {priority: "0001"}),
    invisible: new undum.QualityGroup(null, {priority: "0000"}),
    verdades: new undum.QualityGroup('Verdades', {priority: "0002"}),
    pruebas: new undum.QualityGroup('Pruebas', {priority: "0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.zapatillas = false;
    character.qualities.camisetaazabache = false;
    character.qualities.camisetaazulmarino = false;
    character.qualities.bolsamonedas = false;
    character.qualities.panchapata = false;
    character.qualities.panbaguette = false;
    character.qualities.verdad1 = false;
    character.qualities.verdad2 = false;
    character.qualities.verdad3 = false;
    character.qualities.tiempoEspera = 0;
    character.qualities.numeroPulsaciones = 0;
    character.qualities.numeroVerdades = 0;
    character.qualities.partidasGanadas = 0;
    character.qualities.tiempoEsperaPrueba3 = 0;
    system.setCharacterText("<p>Recuerdas que has tenido un sueño muy raro: jugabas a los dados contra Jeff Bezos. ¿O era alguien que se le parecía mucho?</p>");
};
