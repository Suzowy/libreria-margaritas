import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'Hojas marrones y aguas turquesas',
      author: 'M&M',
      date: 'Noviembre 23, 2024',
      image: 'assets/img/nacedero.webp',
      excerpt: 'Han pasado unos días desde la última excursión, pero aquí, sentada en el sofá, mirando el ramos de brezo que me he auto regalado, puedo cerrar los ojos y trasladarme de nuevo allí. Es como si mi mente hubiese guardado tras una pequeña puerta todos los matices de la experiencia y, asomándome a ella, pudiese…',
      fullDescription: `Cada vez se habla más de los muchos beneficios que tiene pasar tiempo en la naturaleza.
                        Pero creo que incluso va más allá del simple hecho de estar, por unas pocas horas,
                        tocando tierra de una forma que de normal no solemos hacer. <br><br>
                        Han pasado unos días desde la última excursión, pero aquí, sentada en el sofá, mirando el ramos de brezo que me he auto regalado, puedo cerrar los ojos y trasladarme de nuevo allí. Es como si mi mente hubiese guardado tras una pequeña puerta todos los matices de la experiencia y, asomándome a ella, pudiese volver siempre que quiera. Mi mente funciona con imágenes, olores y sonidos, así que cuando cierro los ojos ya estoy escuchando el sonido del viento entre las hojas, algún pájaro, y el agua del río que pasa cerca. <br><br> El buen tiempo nos acompañó a lo largo de todo el recorrido y, aunque no hacía tanto frío, eché de menos quitarme las zapatillas para enraizarme, para tomar contacto y sentir durante unos segundos que formo también parte del bosque. <br><br>
                        El camino estaba delimitado. Atrás quedaron los tiempos en los que no había recorrido alguno, no todo era accesible ni había plazas de aparcamiento. Los recuerdos que tengo de mi infancia, cuando visitamos el mismo lugar, están rodeados de naturaleza no tan domesticada, de llegar temprano para dejar el coche y de curvas sinuosas por las que apartar maleza para alcanzar la cima. Actualmente, el último tramo que lleva hasta el propio nacimiento del río y al Balcón de Pilatos, un barranco de 924 metros en la Sierra de Urbasa, está cerrado, pero yo todavía recuerdo la cascada, las rocas resbaladizas por el musgo y el sonido tan fuerte del agua pasando justo al lado. <br><br>
                        Es lo malo de que un lugar sea tan bonito, que al final se hace conocido y todo el mundo acaba ahí. Es una de las consecuencias de la globalización y uno de los aspectos más negativos de la cultura de masas y de la exposición en redes sociales así como de nuestro modelo de hacer turismo, donde si algo adquiere fama no podemos dejar de conocerlo, no sea que nos señalen por no haber estado allí. ¿En qué momento hemos perdido la personalidad? ¿En qué momento preferimos que nos den todo hecho, que nos señalen cuidadosamente el camino y cada piedra suelta, para evitar cualquier riesgo innecesario? <br><br>
                        Puede que sea una ingenua o peque de hipócrita porque visito lugares a los que todo el mundo viaja. Puede que sea mi tendencia a romantizarlo todo pero miro con un poquito de nostalgia esos tiempos en los que había que explorar, que había lugares por descubrir y que, armada en mi mente con machete y salacot, me internaba en lo desconocido para cartografiar nuevos lugares que no aparecen en ningún mapa. <br><br>

La solución tampoco pasa por dejar de ir a estos lugares. Después de todo, nada más poner un pie en el bosque, dejando atrás los coches y los grupos de gente, ya puedo respirar tranquila. Rodearme de belleza siempre baja las defensas, el estrés y los problemas. Me desconecta de tal manera de la vida ajetreada del día a día que sonrío mientras piso el camino de hojas, adentrándome en un perfecto otoño donde los ocres, marrones y amarillos encuadran guas turquesas que parecen el lugar favorito de Titania y Oberón.


                        .
                        `,
      expanded: false,
    },
    {
      id: 2,
      title: 'Musgo, helechos y calma',
      author: 'M&M',
      date: 'Octubre 15, 2024',
      image: 'assets/img/musgo.webp',
      excerpt: 'Todo comenzó con una tarde de juegos de mesa en la que uno de nosotros dijo que hacía tiempo que no íbamos de excursión. Lo cierto es que el otoño es una estación perfecta porque, con la variedad de bosques que tenemos en el norte, cualquier paisaje es absolutamente precioso con el cambio de estación...',
      fullDescription: `Todo comenzó con una tarde de juegos de mesa en la que uno de nosotros dijo que hacía tiempo que no íbamos de excursión. Lo cierto es que el otoño es una estación perfecta porque, con la variedad de bosques que tenemos en el norte, cualquier paisaje es absolutamente precioso con el cambio de estación. No hay nada comparado con pasear por senderos de hojas amarillas y marrones, quitarte capas de ropa y volvértelas a poner en las zonas sombrías, analizar con ojos de ingeniera cada parte del camino para sortear el barrizal en medio del camino, parar cada cinco pasos para analizar nuevas clases de setas que ni sabías que existían. <br><br>
      Parece sencillo quedar un domingo por la mañana para hacer una ruta pero la realidad es que entre los que quieren madrugar y los que, los que necesitan el chute de cafeína para empezar a funcionar y los que no han dormido por la ilusión de pisar helechos y perderse en un bosque encantado, teníamos todos los ingredientes para que fuese más sencillo adivinar al asesino del Cluedo. Al final, nos decidimos por una pequeña ruta de dificultad media para empezar poco a poco. A esto hay que añadir que un miembro del grupo se estaba recuperando de una lesión en la rodilla así que pensábamos tomárnoslo con calma. <br><br>
      Spoiler; solo vimos una. <br><br>

Y te preguntaras, ¿por qué? Por un cúmulo de circunstancias que no tienen relación entre sí y que hizo que fuésemos de paseo sin una ruta bien pensada. Lo llaman abrazar la incertidumbre y dejarse llevar. Ese día, de una manera inconsciente, todos adoptamos esa filosofía… y así nos fue. <br><br>

Hay personas que al llegar a un sitio nuevo, comienzan a explorar y se olvidan hasta de la hora de comer. No es nuestro caso. Nada más llegar al pueblo desde donde partía la ruta, encontramos un pequeño bar en la antigua estación del Plazaola (línea férrea que conectaba Pamplona y San Sebastián) y que ahora, reconvertido en un refugio de viandantes indecisos, se mostraba como un refugio de bancos de madera donde recuperar fuerzas después de la travesía o, en nuestro caso, ofrecer el chute de cafeína necesaria para que empezásemos a funcionar. <br><br>

Con nuestros bastones preparados, y las alforjas llenas, volvimos a salir para, ahora sí, comenzar ya nuestra ruta. Una ruta que habíamos ojeado en un blog y que, a la hora de la verdad, ninguno recordaba demasiado bien. ¿Derecha o izquierda? Nos daba un poco lo mismo, el paisaje era bonito y solo queríamos caminar.
Perfectamente señalizada, como el camino de baldosas amarillas, empezamos a andar dejando atrás casas de pueblo y campos de maíz. Lentamente, de manera gradual, las curvas se hicieron más cerradas, los árboles se curvaban para ocupar todo el espacio buscando rayos de sol, creando bóvedas naturales por las que deambular en silencio.
<br><br>
Los sonidos de cualquier civilización quedaron ya atrás y es en ese momento, imperceptible, cuando te das cuenta de que estás en medio del bosque. Es ese instante en el que empieza a hacer efecto. Los japoneses hablan de shinrin yoku; baño de bosque. Una práctica con la que los nipones cuidan su salud física y mental adentrándose simplemente en la naturaleza, dejando la tecnología y el ruido a un lado y simplemente estar. Los estudios demuestran que mejora la calidad del sueño, el estado de ánimo y disminuye los niveles de estrés.
Con el curso del río acompañando nuestros pasos, llegamos a la primera de ellas. Unos escalones con barro y una barandilla de madera nos ayudaron a bajar hasta el mirador que quedaba enfrente de la cascada. Es algo sutil, pero mientras uno baja vigilando dónde pisa, el sonido del agua ya te va avisando de lo que te vas a encontrar. Último escalón, levantamos la vista y no pudimos evitar sonreír. Creo que durante unos segundos nadie dijo nada, es lo que tiene la naturaleza en estado puro, no es necesario nada más, solo hay que observar y sentirte parte de ella. <br><br>
Estuvimos allí unos minutos, no teníamos ninguna prisa por continuar. Las lluvias de la semana anterior garantizaron que bajase abundante agua por lo que el paisaje era espectacular. Y nos preguntábamos, si esta era la primera que veíamos, ¿cómo serían las demás? <br><br>

Lástima que no llegamos a averiguarlo. <br><br>

Resulta que la ruta no empezaba desde el pueblo sino bastante más adelante, así que, para cuando quisimos darnos cuenta, ya era mediodía y solo habíamos hecho un tercio del camino. No nos volvimos locos. No nos habíamos puesto una meta concreta así que dimos media vuelta para desandar lo andado, mientras murmuramos por lo bajo que las otras dos mejor para otro día. <br><br>

Eso sí, volver por el mismo camino te permite levantar la vista y observar con más detalle. Una oruga cruzando por en medio, una lagartija con prisas, un caballito del diablo en un junco del río… Un paréntesis de la modernidad, un descanso de la vida real de ahí fuera, donde los árboles marcaron el camino, las hojas caducas nos pusieron alfombra y donde el silencio del bosque, que nunca es tal, nos permitieron coger una bocanada de aire para continuar caminando. <br><br>
Dicen que siempre hay que dejar algo pendiente para poder volver. Bueno, está claro que nosotros lo hemos hecho. Así que habrá que planificar a siguiente excursión, para terminar lo que empezamos, impregnarnos de otoño y, sobre todo, para ver si encontramos el esperado trébol de cuatro hojas o el tesoro al final del arcoíris.

`,
      expanded: false,
    },
    // Puedes agregar más posts aquí
    {
      id: 3,
      title: 'Me declaro consumista…',
      author: 'M&M',
      date: 'Septiembre 28, 2024',
      image: 'assets/img/consumo.webp',
      excerpt: 'La cuestión es que nunca he sido una derrochadora ni compradora compulsiva. Eso de comprar una camiseta cada semana para salir, como hacía alguna amiga, no tenía ningún sentido para mí. Pero, a pesar de considerarme alguien que no necesitaba muchas cosas, cuando tuve que mudarme a otra ciudad se destapó el pastel. Y es…',
      fullDescription: `No recuerdo muy bien cómo comenzó. Nunca he sido una persona derrochadora. Desde muy pequeña me compraron una hucha y me enseñaron el valor de ahorrar poco a poco con la mentalidad empresarial de guardar por si acaso. El dinero que me daban mis abuelos iba a parar ahí, y poco a poco se iba llenando. Quitando la paga para las chuches del fin de semana no recuerdo comprar nada como capricho.
<br><br>
Parece algo natural aunque no creo que lo sea, pero cuando fui creciendo aumentaron también mis necesidades. De adolescente principalmente ropa y algún libro. Y de más mayor, la carrera y los cursos que quería hacer y que pude hacerlos gracias a los ahorros de todos los años anteriores. <br><br>

Pero me estoy desviando del tema. La cuestión es que nunca he sido una derrochadora ni compradora compulsiva. Eso de comprar una camiseta cada semana para salir, como hacía alguna amiga, no tenía ningún sentido para mí. Pero, a pesar de considerarme alguien que no necesitaba muchas cosas, cuando tuve que mudarme a otra ciudad se destapó el pastel. Y es que vivimos en una sociedad basada en el consumo. <br><br>

Y me di cuenta de algo; a más cosas, más ansiedad. <br><br>

Ese agobio que te entra por todo el cuerpo cuando ves la cantidad de cosas que tienes y que todas son igual de importantes allá donde vas. Es mentira, pero en el momento así lo crees. Intentas hacer una primera criba y aunque no lo lleves, sabes que acabarás comprándolo de nuevo porque tu casa lo necesita de verdad. <br><br>

No tengo claro cómo hay gente que se ha mudado doce veces y sigue cuerda, es algo que escapa a mi imaginación, pero ya solo de pensarlo me entran escalofríos. Bueno, el caso es que cuando volví a mudarme, tomé la decisión de que esto no era bueno para mí y algo debía hacer para cambiarlo. Y así llegué a la filosofía del minimalismo. No consiste en vivir con una taza y una única toalla para siempre, no es así como funciona.
Tener lo suficiente para uno mismo. <br><br>

En ocasiones se ha asociado el minimalismo con la austeridad y, aunque hay alguna similitud, no es el objetivo de esta corriente. Cada uno puede tener su propia definición pero para mí consiste en tener lo necesario. Ni más ni menos. Dejar a un lado todo lo que no te aporta y quedarte con lo esencial, con lo que de verdad usas y te hace feliz. Puede que los sombreros sean tu debilidad, y tienes diez porque los usas mucho y te hacen feliz. Está bien, no hay un número correcto o incorrecto. De lo que sí huye esta corriente de pensamiento es de la acumulación por defecto. El tener por tener, cuando ni lo necesitas ni lo usas. Muchas personas tienen prendas en el armario con la etiqueta todavía puesta porque costaban una ganga a pesar de no ser de su estilo o color. Eso no tiene ningún sentido. Ni a nivel práctico ni a nivel de sostenibilidad. <br><br>

Por eso desde hace ya algunos años mis costumbres a la hora de comprar han cambiado, incluso cuando viajo. Ya no compro los típicos souvenirs u objetos decorativos que sé, van a acabar cogiendo polvo en un cajón. No, me decanto más por experiencias que luego pueda recordar, libretas en las que pueda escribir, y tés o cafés que me puedan trasladar a ese viaje cada vez que los use. Aún así soy consciente de que habrá recaídas. Por desgracia es muy difícil ser un comprador consciente en la sociedad actual donde todo te empuja a comprar lo nuevo, lo único, lo último. <br><br>

Supone un gran esfuerzo mental no hacer caso del impulso inicial de entrar a verlo y comprarlo. Las redes sociales no ayudan para nada, obviamente, donde nos bombardean con productos o experiencias que tenemos que tener porque si no, no seremos felices. Todo está diseñado para ello. Si uno vive en una isla o en un pueblo es más sencillo porque no hay tantos estímulos, uno se centra en otras cosas, en ser más que en tener. Pero las ciudades son las capitales de ese sistema capitalista que se basa en la creencia de que nunca se tiene suficiente. Siempre hay algo más que se puede desear, que se puede tener y todo gira en torno a esa pérdida si no lo puedes obtener. <br><br>

Lo útil y lo bello.
<br><br>
La escritora y coach Ana Albiol, que siempre ha sido para mí una fuente de inspiración, lo tiene claro desde hace tiempo. Después de pasar unos años viajando solamente con una maleta, tiene claro que en su casa solo entra lo que es útil y se necesite y, además, tiene que ser bonito. Ya he explicado en alguna ocasión que la belleza tiene poder curativo. Y nuestra casa, el lugar donde nos relajamos y somos nosotros mismos, donde ningún monstruo indeseado puede entrar, debería reflejar calma y tranquilidad. El orden que mantenemos por fuera es un fiel reflejo de nuestro orden mental. Por eso, deberíamos cuidar cada nuevo elemento que pensamos añadir a ella. Pensar bien si lo necesitamos, si nos hace sentirnos bien, o solo responde al impulso de comprarlo porque no lo tenemos y otros sí. Rodearnos de elementos buenos y duraderos en vez de tener el doble de cosas que a los dos días terminarán por romperse. <br><br>

Esto abre un debate muy interesante sobre todo en el tema de la ropa que dejaremos para otro día. <br><br>

Meik Wiking, director ejecutivo del Instituto para la búsqueda de la felicidad de Copenhage, en su libro Hygge home: como hacer de tu hogar un espacio feliz habla precisamente de esto. En muchas ocasiones vemos el anuncio de un objeto y queremos comprarlo por el resultado que queremos conseguir. Él pone como ejemplo un dosificador de tortitas, para que los domingos, cuando hagas tortitas, te salgan perfectas, la cantidad justa. La realidad es que hemos comprado el aparato porque queremos comprar la experiencia de sentarnos todos tranquilamente un domingo por la mañana a comer tortitas. Estampa perfecta de película americana. Y te convences a ti mismo de que con este nuevo artilugio se hará realidad, cuando lo único que necesitas es ponerte a hacer tortitas un domingo por la mañana sin necesidad de tener otro trasto más que fregar después. La publicidad explota nuestras necesidades más primarias y lo saben hacer muy bien. El 80% de las decisiones de compra no las toma la parte racional de nuestro cerebro sino la emocional. Y ser conscientes de ello nos puede ayudar a detectar ese impulso, ese chute de dopamina instantáneo que supone comprar algo nuevo, para poder frenarlo. <br><br>
   Normalmente, si dejamos reposar la idea un par de días, se pasa ese primer impulso y llegamos a la conclusión de que realmente no lo necesitábamos. Wiking ofrece una herramienta para evitar esa primera tendencia consumista y es pensar en que ese objeto nuevo que vamos a llevar a casa, cuando nos mudemos vamos a tener que embalar, meter en una caja y ya en la nueva casa, sacarlo y colocarlo de nuevo. Valorar si ese esfuerzo está justificado antes de tomar la decisión de comprar. <br><br>

Y si no, siempre podemos acudir al refranero español que en su sencillez guarda toda la sabiduría de nuestros ancestros, «menos es más».`,
      expanded: false,
    },
    {
      id: 4,
      title: '¿Qué pasó con mi manual para la incertidumbre?',
      author: 'M&M',
      date: 'Septiembre 14, 2024',
      image: 'assets/img/incertidumbre.webp',
      excerpt: 'Fue el regalo de una buena amiga. Hacía ya un tiempo que en nuestras conversaciones se filtraba a menudo la palabra incertidumbre, como una invitada no deseada. Esa duda continua ante el futuro que no teníamos previsto. La gran incógnita de qué iba a ser de nosotras cuando muchas veces ni siquiera sabíamos quiénes éramos…',
      fullDescription: `Fue el regalo de una buena amiga. Hacía ya un tiempo que en nuestras conversaciones se filtraba a menudo la palabra incertidumbre, como una invitada no deseada. Esa duda continua ante el futuro que no teníamos previsto. La gran incógnita de qué iba a ser de nosotras cuando muchas veces ni siquiera sabíamos quiénes éramos en realidad. <br><br>

Las dudas y preguntas se arremolinaban y no nos dejaban ver bien el camino. Y eso nos producía angustia, sobre todo al mirar a nuestro alrededor y ver a muchos otros que se encaminaban, seguros, hacia su destino, o al menos lo fingían muy bien. <br><br>

Hay muchas personas así. Ya sabes, esas que parecen que tienen todo claro, que desde niños se les descubrió su vocación y trazaron con mano firme el mapa de su vida sin ningún tipo de desvío. Esas que supieron desde pequeños lo que querían ser de mayores, que cazan las oportunidades al vuelo y ponen toda la carne en el asador. Esas que parece que nacieron con un manual de instrucciones bajo el brazo.
Si bien es cierto que creo firmemente que este grupo son una minoría y que el resto del mundo se limita a adoptar más o menos bien este plan que nos han vendido, lo cierto es que llega un día en el que uno se pregunta hacia dónde va su vida. Puede que para muchos sea la crisis de los treinta. En mi caso, me adelanté. <br><br>

En los círculos en los que nos movíamos, todos estábamos igual aunque había quienes lo sobrellevaban bastante bien, qué envidia, así que un año por mi cumpleaños me llegó un cuaderno muy especial. Hojas con líneas en paralelo para plasmar por escrito cómo era ese navegar por la incertidumbre; ese monstruo al que le hemos cogido tanto miedo. <br><br>

Se convirtió en un reto personal. Plasmar mis emociones e intentar gestionarlas para colocarlas donde les corresponde, no por delante, sino a un lado del camino. Porque, seamos sinceros, nunca desaparece, y está más o menos presente según la atención que le prestemos. Lo cierto es que no he hecho balance después de marcar el punto final a sus páginas, pero supongo que hubo días en los que salí victoriosa y otros tantos en los que no. Días donde viví el momento presente y días donde las dudas lo inundaron todo, perdiendo el equilibrio en la cuerda suspendida en el vacío. Pero supongo que es así. En la montaña rusa que es esto de la vida adulta hay de todo, subidas y bajadas, pero es el billete que nos ha tocado y que solo termina cuando se pare el vagón y apaguen las luces. Así que más nos vale aprovechar el viaje. <br><br>

Escribí hace apenas unas semanas la última página, solo que esta vez no es un punto y final. Descubrí hace ya unos años que escribiendo bajo las emociones y tomo tierra, encuentro foco y aprendo a ver. Escribiendo aclaro ideas, resuelvo hilos enmarañados y aprendo quién soy. Así que esto es un punto y seguido. Seguiré aprendiendo a gestionar la incertidumbre, porque la verdad es que no hay instrucciones marcadas o atajos señalizados en el mapa para salir airosa, no queda otra que capear el temporal y atisbar un rayo de luz en medio de la tormenta, como esos marineros que en alta mar buscaban incansables ese pedazo de tierra que les dijese que no estaban perdidos, que les llevase a casa.
`,
      expanded: false,
    },
  ];

  toggleDescription(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.expanded = !post.expanded;
    }
  }

}
