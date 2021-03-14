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

var frasesMuro = ["A", 
                  "B", 
                  "C"];
              
var entradaEnVerdad1 = false;
var entradaEnVerdad2 = false;
var entradaEnVerdad3 = false;


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
        toca comer habicholillas con tomate y como no soportas su sabor sueles usar el pan para disimularlo. Así que, por tu propio bien, decides ir a comprarlo\n\
        con ganas.\</p>\
        </br>\
        <p class='transient'>Ahora sólo necesitas <a href='habitacion'>buscar algo</a> para vestirte</p>"
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
                    <p class='transient'>Entre tu camiseta básica negra y tu camiseta básica carbón, ves una <a href='camisetaroja'>camiseta básica azabache</a> y \n\
                    una <a href='camisetaazul'>camiseta básica azul marino</a>. Te encantan estas trascendentales decisiones, aunque dada su importancia a veces \n\
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
                    <p class='transient'>Estás listo para <a href='calle'>salir</a> a comprar el pan.</p> </br>"
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
        <p class='transient'>Ahora tienes que tomar otra decisión de peso: ¿irás a la tienda por el camino de la <a href='izquierda'> izquierda</a> \n\
        o por el camino de la <a href='derecha'>derecha</a>?</p>",
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
        nadie, pero antes de llegar al final de la calle ves una especie de <a href='muro'>callejón sin salida</a>.\</p>\
        </br>\
        <p class='transient'>Un poco decepcionante, pues no ocurrió nada especial. Pero al menos, la <a href='tienda'>tienda</a> ya está delante de ti.</p>"
    ),

    derecha: new undum.SimpleSituation(
        "<h1>Vas por el camino de la derecha</h1>\
        <p>Eliges ir por la derecha. Un poco alterado porque fantaseas con mil hazañas que vivir en este viaje, avanzas por la calle, disfrutando del paisaje.\n\
        No te encuentras con nada ni nadie, excepto con un <a href='./vecino' class='once'>vecino</a> un poco raro que te mira fijamente, con las manos cruzadas en la espalda.\</p>\
        </br>\
        <p class='transient'>Un poco decepcionante, pues no ocurrió nada especial. Pero al menos, la <a href='tienda'>tienda</a> ya está delante de ti.</p></br>",
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
        <p class='transient'>También puedes ir a la <a href='tienda'>tienda</a>. El pan no espera.</p></br>",
        {
            actions: {
                esperar: function (character, system, action){                   
                    var siguienteFrase = "";

                    if (character.qualities.tiempoEspera < frasesMuro.length)
                        siguienteFrase = "<p>" + frasesMuro[character.qualities.tiempoEspera++] + "</p>";
                    else
                        siguienteFrase = "<p>abc</p>";
                    
                    siguienteFrase += "</br> <p class='transient'>Puedes seguir <a href='./esperar'>esperando</a> o ir a la <a href='tienda'>tienda</a>.</p></br>";
                    
                    system.write(siguienteFrase);
            
                    system.setCharacterText("<p>bbb</p>");
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
        <a href='panchapata'>pan chapata</a> o una <a href='panbaguette'> baguette</a>. ¡Elige bien!</p></br>",
        {
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
        <p class='transient'>Sin nada más que hacer en la tienda, decides <a href='vueltaacasa'>volver a casa</a>.</p>",
        {
            enter: function (character, system, from){
                system.setQuality("panchapata", true);
            }
        },
    ),

    panbaguette: new undum.SimpleSituation(
        "<h1>Decides comprar una baguette.</h1>\
        <p>Te decantas por la baguette. Hoy te sientes un poco francés, un poco sofisticado. Intentas pronunciar \"baguette\" con tu mejor acento francés.\n\
        La dependienta te mira con el ceño un poco fruncido.\</p></br>\
        \
        <p class='transient'>Sin nada más que hacer en la tienda, decides <a href='vueltaacasa'>volver a casa</a>.</p>",   
        {
            enter: function (character, system, from){
                system.setQuality("panbaguette", true);
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
        <p class='transient'>Puedes acercarte a <a href='investigar'>investigar</a> o, ya que estás un poco cansado, irte a <a href='iradormir'>dormir</a> directamente.</p>"
    ),

    iradormir: new undum.SimpleSituation(
        "<h1 class='transient'>Te vas a dormir plácidamente.</h1>\
        <p class='transient'>Decides ir a dormir. Te dan un poco de igual las brechas interdimensionales, la física y la curiosidad en general. Total, ¿es que acaso investigar una\n\
        anomalía en el espacio-tiempo te iba a dar de comer?\</p></br>\
        \
        <p class='transient'>Aquí acaba tu aventura. Pero si te arrepientes haber pasado olímpicamente de todo, puedes <a href='vueltaacasa'>volver unos instantes atrás</a>. No\n\
        digas que no soy generoso...</p>"
    ),

    investigar: new undum.SimpleSituation(
        "<h1>Te acercas a investigar.</h1>\
        <p>Cuando estás a un metro de la brecha, sientes como te atrae. Una especie de corriente succionadora te acerca lenta pero inexorablemente hacia la brecha. Aunque \n\
        quieres retirarte, no lo consigues. Sientos miedo a la vez que curiosidad. Mirando el lado bueno, ya no tendrás que comer habicholillas con tomate.\</p></br>\
        <p>Antes de que te quieras dar cuenta, la brecha te ha absorbido por completo. De repente te ves rodeado de negrura. Unos segundos después, a tu alrededor comienzan a\n\
        iluminarse lo que parecen ser estrellas. No tienes ni idea de qué está pasando.</p></br>\
        <p class='transient'>Sientes que te mueves, no sabes si hacia arriba o hacia abajo, pero de alguna forma percibes que\
        cuando decidas <a href='zonaportales'>parar</a> podrás hacerlo sin problema.</p>"
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
                    system.write("<p>te lo has pasado wow</p></br> \n\
                    <p class='transient'><a href='final'>final</a></p></br>");    
                } else { //Si no
                    //Si acabas de llegar
                    if (character.qualities.verdad1 === false && character.qualities.verdad2 === false && character.qualities.verdad3 === false){
                        system.write("<p>explicacion de los multiversos</p></br> \n\
                        <p class='transient'></p></br>");
                    }
                    
                    //Comprobaciones verdades
                    if (entradaEnVerdad1 === false){
                        switch (character.qualities.numeroVerdades){
                            case 0:
                                system.write("<p> - <a href='portal1'>VERDAD1</a> - </p></br>");
                                break;
                            case 1:
                                system.write("<p> - <a href='portal2'>VERDAD1</a> - </p></br>");
                                break;
                            case 2:
                                system.write("<p> - <a href='portal3'>VERDAD1</a> - </p></br>");
                                break;
                        }
                        
                        entradaEnVerdad1 = true;
                    } else {
                        system.write("<p> - La VERDAD1 ha sido pasada - </p></br>");
                    }
                    
                    if (entradaEnVerdad2 === false){
                        switch (character.qualities.numeroVerdades){
                            case 0:
                                system.write("<p> - <a href='portal1'>VERDAD2</a> - </p></br>");
                                break;
                            case 1:
                                system.write("<p> - <a href='portal2'>VERDAD2</a> - </p></br>");
                                break;
                            case 2:
                                system.write("<p> - <a href='portal3'>VERDAD2</a> - </p></br>");
                                break;
                        }
                        
                        entradaEnVerdad2 = true;
                    } else {
                        system.write("<p> - La VERDAD2 ha sido pasada - </p></br>");
                    }
                    
                    if (entradaEnVerdad3 === false){
                        switch (character.qualities.numeroVerdades){
                            case 0:
                                system.write("<p> - <a href='portal1'>VERDAD3</a> - </p></br>");
                                break;
                            case 1:
                                system.write("<p> - <a href='portal2'>VERDAD3</a> - </p></br>");
                                break;
                            case 2:
                                system.write("<p> - <a href='portal3'>VERDAD3</a> - </p></br>");
                                break;
                        }
                        
                        entradaEnVerdad3 = true;
                    } else {
                        system.write("<p> - La VERDAD3 ha sido pasada - </p></br>");
                    }
                }
            }
        }
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
        <p class='transient'>Estás tan sorprendido que no puedes articular palabra. Pero <a href='portal1prueba'>aceptas</a> la prueba. No tienes más remedio.</p>"
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
                    system.write("<p class='transient'>Ante ti aparece flotando un botón verde con la palabra 'VERDAD' escrita en él. Lo <a href='portal1final'>pulsas</a>.</p></br>");
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
        mueran botones con forma de gatito.\</p>\
        <p>Echas de menos pulsar el botón.</p></br>\
        \
        <p class='transient'>Vuelves a <a href='zonaportales'>caer, y caer, y caer...</a></p>",
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
            "<h1>Titulo Portal2</h1>\
        <p>Portal2\</p>\
        \
        <p class='transient'>Descripcion y avance a prueba <a href='portal2prueba'>prueba</a>. RELLENAR</p>"
            ),

    portal2prueba: new undum.SimpleSituation(
            "<h1>Titulo Portal2Prueba</h1>\
        <p>Portal2Prueba\</p>\
        \
        <p class='transient'>Prueba con dados? Atributo partidas de piedra papel y tijeras ganadas y <a href='portal2final'>final</a>. RELLENAR</p>"
            ),

    portal2final: new undum.SimpleSituation(
            "<h1>Titulo Portal1Fina2</h1>\
        <p>Portal1Fina2\</p>\
        \
        <p class='transient'>Has conseguido llave2 volver <a href='zonaportales'>bifurcacion</a>. RELLENAR</p>",
        {
            enter: function(character, system, from){
                system.setQuality("verdad2", true);
            }
        }
            ),

    //ZONA PORTAL 3
    portal3: new undum.SimpleSituation(
            "<h1>Titulo Portal3</h1>\
        <p>Portal3\</p>\
        \
        <p class='transient'>Descripcion y avance a prueba <a href='portal3prueba'>prueba</a>. RELLENAR</p>"
            ),

    portal3prueba: new undum.SimpleSituation(
            "<h1>Titulo Portal3Prueba</h1>\
        <p>Portal3Prueba\</p>\
        \
        <p class='transient'>Prueba de viajes en el tiempo y <a href='portal3final'>final</a>. RELLENAR</p>"
            ),

    portal3final: new undum.SimpleSituation(
            "<h1>Titulo Portal1Fina3</h1>\
        <p>Portal1Fina3\</p>\
        \
        <p class='transient'>Has conseguido llave3 volver <a href='zonaportales'>bifurcacion</a>. RELLENAR</p>",
        {
            enter: function(character, system, from){
                system.setQuality("verdad3", true);
            }
        }
            ),

    tiempopasado: new undum.SimpleSituation(
            "<h1>Titulo Portal3Prueba</h1>\
        <p>Portal3Prueba\</p>\
        \
        <p class='transient'>Prueba de viajes en el tiempo y <a href='portal3final'>final</a>. RELLENAR</p>"
            ),

    tiempofuturo: new undum.SimpleSituation(
            "<h1>Titulo Portal3Prueba</h1>\
        <p>Portal3Prueba\</p>\
        \
        <p class='transient'>Prueba de viajes en el tiempo y <a href='portal3final'>final</a>. RELLENAR</p>"
            ),

    tiempopocosminutos: new undum.SimpleSituation(
            "<h1>Titulo Portal3Prueba</h1>\
        <p>Portal3Prueba\</p>\
        \
        <p class='transient'>Prueba de viajes en el tiempo y <a href='portal3final'>final</a>. RELLENAR</p>"
            ),

    //FINAL
    final: new undum.SimpleSituation(
            "<h1>Titulo Final</h1>\
        <p>Final\</p>\
        \
        <p class='transient'>Prueba de viajes en el tiempo y <a href='portal3final'>final</a>. RELLENAR</p>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    zapatillas: new undum.OnOffQuality("Zapatillas de casa", {priority: "0001", group: 'cosas'}),
    camisetaazabache: new undum.OnOffQuality("Camiseta azabache", {priority: "0002", group: 'cosas'}),
    camisetaazulmarino: new undum.OnOffQuality("Camiseta azul marino", {priority: "0002", group: 'cosas'}),
    bolsamonedas: new undum.OnOffQuality("Bolsa con 66 monedas de 1 céntimo y 2 de dos céntimos.", {priority: "0003", group: 'cosas'}),
    panchapata: new undum.OnOffQuality("Pan chapata", {priority: "0004", group: 'cosas'}),
    panbaguette: new undum.OnOffQuality("Baguette", {priority: "0004", group: 'cosas'}),
    tiempoEspera: new undum.IntegerNoShow("Tiempo Espera", {priority: "0001", group: "invisible"}),
    numeroVerdades: new undum.IntegerNoShow("Numero Verdades", {priority: "0001", group: "invisible"}),
    verdad1: new undum.OnOffQuality("La X Verdad", {priority: "0004", group: 'verdades'}),
    numeroPulsaciones: new undum.NonZeroIntegerQuality("Pulsaciones", {priority: "0001", group: 'pruebas'}),
    verdad2: new undum.OnOffQuality("La Y Verdad", {priority: "0004", group: 'verdades'}),
    verdad3: new undum.OnOffQuality("La Z Verdad", {priority: "0004", group: 'verdades'})
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
    system.setCharacterText("<p>Recuerdas que has tenido un sueño muy raro: eras capaz de viajar en el tiempo y usar algunas paradojas temporales en tu beneficio...</p>");
};
