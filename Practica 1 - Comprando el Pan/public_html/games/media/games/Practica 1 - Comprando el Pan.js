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
        toca comer habicholillas con tomate y como no soportas su sabor sueles usar el pan para disimularlo. Así que, por tu propio bien, decides ir a comprar  \n\
        el pan con ganas.\</p>\
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
                    pero sientes que si no lo fuera, algo terrible podría pasar...</p>"
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
            
                    system.setCharacterText("<p>Piensas que la palabra armario es graciosa, porque arm significa brazo, y río, río. Te imaginas un brazo en un río. Un \n\
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
        },
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
            
                    system.setCharacterText("<p>En el fondo de tu corazón te encantaría dejar de fingir que odias la serie y hablar de ella con todos tus amigos, comprarte\n\
                    todo el merchandising, cambiar tu apellido a Rivasly y hacerte una cirugía para parecerte al apuesto caballero. Pero seguirás fingiendo para no parecer un normie.</p>"
                    );
                }
            }
        }
    ),

    calle: new undum.SimpleSituation(
            "<h1>Titulo Calle</h1>\
        <p>Calle\</p>\
        \
        <p class='transient'>Puedes hacer <a href='derecha'>derecha</a> o <a href='izquierda'> izquierda</a>. Elige bien. RELLENAR</p>"
            ),

    izquierda: new undum.SimpleSituation(
            "<h1>Titulo Izq</h1>\
        <p>Izquierda\</p>\
        \
        <p class='transient'>Ahora puedes <a href='calle'>ir a tienda</a>. También puedes ir a <a href='muro'>muro</a>  RELLENAR</p>"
            ),

    muro: new undum.SimpleSituation(
            "<h1>Titulo Muro</h1>\
        <p>Muro\</p>\
        \
        <p class='transient'>Ahora puedes volver a <a href='izq'>izq</a> Tambien elegir espera. RELLENAR</p>"
            ),

    derecha: new undum.SimpleSituation(
            "<h1>Titulo Der</h1>\
        <p>Derecha\</p>\
        \
        <p class='transient'>Ahora puedes <a href='tienda'>ir a tienda</a> RELLENAR</p>"
            ),

    tienda: new undum.SimpleSituation(
            "<h1>Titulo Tienda</h1>\
        <p>Tienda\</p>\
        \
        <p class='transient'>Puedes hacer <a href='panchapata'>pan chapata</a> o <a href='panbaguette'> baguette</a>. Elige bien. RELLENAR</p>"
            ),

    panchapata: new undum.SimpleSituation(
            "<h1>Titulo Chapata</h1>\
        <p>Chapata\</p>\
        \
        <p class='transient'>Ahora puedes <a href='vueltaacasa'>volver a casa</a> RELLENAR</p>"
            ),

    panbaguette: new undum.SimpleSituation(
            "<h1>Titulo Baguette</h1>\
        <p>Baguette\</p>\
        \
        <p class='transient'>Ahora puedes <a href='vueltaacasa'>volver a casa</a> RELLENAR</p>"
            ),

    vueltaacasa: new undum.SimpleSituation(
            "<h1>Titulo Vuelta A Casa</h1>\
        <p>Vuelta A Casa\</p>\
        \
        <p class='transient'>Puedes hacer <a href='investigar'>investigar</a> o <a href='iradormir'>dormir</a>. Elige bien. RELLENAR</p>"
            ),

    iradormir: new undum.SimpleSituation(
            "<h1>Titulo Ir A Dormir</h1>\
        <p>Ir A Dormir\</p>\
        \
        <p class='transient'>Fin del juego pero puedes volver <a href='vueltaacasa'>vuelta</a>. RELLENAR</p>"
            ),

    investigar: new undum.SimpleSituation(
            "<h1>Titulo Investigar</h1>\
        <p>Aqui empieza lo tocho 1\</p>\
        \
        <p class='transient'>Pues investigas y vas a zona <a href='zonaportales'>portales</a>. RELLENAR</p>"
            ),

    zonaportales: new undum.SimpleSituation(
            "<h1>Titulo Zona Portales</h1>\
        <p>Aqui empieza lo tocho 2\</p>\
        \
        <p class='transient'>Puedes hacer <a href='portal1'>portal1</a> o <a href='portal2'>portal2</a> o <a href='portal3'>portal3</a>. Haz los 3. Tambien puedes ir a <a href='final'>portal2</a> RELLENAR</p>"


            ),

    //ZONA PORTAL 1
    portal1: new undum.SimpleSituation(
            "<h1>Titulo Portal1</h1>\
        <p>Portal1\</p>\
        \
        <p class='transient'>Descripcion y avance a prueba <a href='portal1prueba'>prueba</a>. RELLENAR</p>"
            ),

    portal1prueba: new undum.SimpleSituation(
            "<h1>Titulo Portal1Prueba</h1>\
        <p>Portal1Prueba\</p>\
        \
        <p class='transient'>Prueba con muchas palabras y <a href='portal1final'>final</a>. RELLENAR</p>"
            ),

    portal1final: new undum.SimpleSituation(
            "<h1>Titulo Portal1Final</h1>\
        <p>Portal1Final\</p>\
        \
        <p class='transient'>Has conseguido llave1 volver <a href='zonaportales'>bifurcacion</a>. RELLENAR</p>"
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
        <p class='transient'>Has conseguido llave2 volver <a href='zonaportales'>bifurcacion</a>. RELLENAR</p>"
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
        <p class='transient'>Has conseguido llave3 volver <a href='zonaportales'>bifurcacion</a>. RELLENAR</p>"
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
        <p class='transient'><a href='final2'>final</a>. RELLENAR</p>"
            ),

    final2: new undum.SimpleSituation(
            "<h1>Titulo Final2</h1>\
        <p>Final2\</p>\
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
    bolsamonedas: new undum.OnOffQuality("Bolsa con 66 monedas de 1 céntimo y 2 de dos céntimos.", {priority: "0003", group: 'cosas'})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    cosas: new undum.QualityGroup('Cosas', {priority: "0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.zapatillas = false;
    character.qualities.camisetaazabache = false;
    character.qualities.camisetaazulmarino = false;
    character.qualities.bolsamonedas = false;
    system.setCharacterText("<p>Recuerdas que has tenido un sueño muy raro: eras capaz de viajar en el tiempo y usar algunas paradojas temporales en tu beneficio...</p>");
};