
let allQuestions = [
  {
    question: "¿Los sistemas de seguridad pasiva incluyen ...?",
    options: [
      "Alumbrado, neumáticos, frenos y suspensión.",
      "Frenos, Neumáticos, airbags y cinturones de seguridad.",
      "Cinturones de seguridad, airbags, apoyacabezas y casco",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué puede ocurrir si al atravesar un charco de agua los frenos se mojan?",
    options: [
      "Que pueden perder temporalmente su eficacia",
      "Que se estropean y deben cambiarse las zapatas o pastillas",
      "Que se reduce la distancia de frenado",
    ],
    correct: 0,
  },
  {
    question:
      "¿De los siguientes factores cuál favorece la aparición de fatiga?",
    options: [
      "Conducir un vehículo con defectos en la dirección o en la suspensión",
      "Conducir un vehículo con un cuadro de mandos bien diseñado",
      "Circular a una velocidad adecuada por una vía en buen estado",
    ],
    correct: 0,
  },
  {
    question:
      "¿Cuántos espejos retrovisores debe llevar, como mínimo, un turismo?",
    options: ["4", "2", "3"],
    correct: 1,
  },
  {
    question:
      "Una de las principales causas de accidente en personas jóvenes es...",
    options: [
      "La falta de reflejos",
      "El exceso de velocidad",
      "La falta de confianza en su capacidad de conducción",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cómo se denominan los costes de pérdida de vidas, de capacidad productiva y el sufrimiento físico o psicológico que tienen lugar como consecuencia de un accidente de tráfico?",
    options: [
      "Costes sanitarios", 
      "Costes materiales", 
      "Costes humanos"
    ],
    correct: 2,
  },
  
{ question: "En caso de niebla espesa, ¿qué alumbrado es obligatorio llevar encendido para poder circular con un turismo?"
  , options: ["La luz de posición, la de corto alcance y la antiniebla trasera.",
     "La luz de posición, la de corto alcance y la antiniebla delantera.",
     "La luz de posición, la de corto alcance y la antiniebla tanto la delantera como la trasera."], correct: 0 },
     

{ question: "¿Qué puede hacer para evitar los accidentes debidos al sueño o a la fatiga?"
  , options: ["Conducir más rápido para que la conducción sea más distraída.",
     "Prestar atención a los signos y síntomas del sueño, a la fatiga, y parar a descansar..",
     "Circular por vías desconocidas."], correct: 1 },

 

     { question: "¿Referente a los sistemas avanzados de ayuda a la conduccion o ADAS ¿Como funciona el sistema LDW o side assist?"
  , options: ["Mantiene automaticamente una distancia de seguridad con el vehiculo que circula delante.",
     "Alerta e incluso corrige la trayectoria al detectar un cambio de carril motivado por distracción del conductor.",
     "Analiza los objetos de delante y si existe posibilidad de atropello Frena"], correct: 1 },



     { question: "¿Le esta permitido circular con un turismo si por sus ventanillas laterales sobresale la carga que lleve en el interior del vehiculo como puede ser una escalera?"
  , options: ["Su, señalizando debidamente la carga con un panel de color rojo.",
     "Solo si la carga no sobresale más de 30 cm por cada lado del vehículo.",
     "No"], correct: 2 },

  // Agrega aquí más preguntas...

  { question: "¿En este puesto de Peaje, que debe hacer?"
  , options: ["Pasar sin detenerse por el puesto de peaje.",
     "Pasar  sin detenerse porque la flecha esta en verde.",
     "Detenerse en el puesto de control asi lo indica la señal"], correct: 2 },

       { question: "Si el sistema de navegacion GPS es portatil ¿Que debe hacer el conductor?"
  , options: ["Circular por el carril derecho reducida para introducir la ruta.",
     "Colocarlo a una altura correcta y sin que entorpezca la visibilidad.",
     "Seguir siempre sus instrucciones aunque esten en contradiccion con la señalizacion"], correct: 1 },

       { question: "¿En el ambito del trafico a que se le llama grupo vulnerables?"
  , options: ["A las personas que fallecen en accidente sin ser conductores o pasajeros de un vehiculo.",
     "A los grupos de personas con mayor riesgo de sufrir un accidente.",
     "A los menores de edad que sufren heridas graves en un accidente de trafico"], correct: 1 },

       { question: "¿En una carretera convencional con arcen transitable por donde debe circular un ciclomotor?"
  , options: ["Por el centro de la calzada.",
     "Por la calzada lo más cerca posible del borde derecho.",
     "Por el arcen de la derecha"], correct: 2 },

       { question: "¿Durante los adelantamientos los conductores de turismos pueden superar la velocidad maxima permitida en el tramo de via por el que circulan?"
  , options: ["Si , cuando circulen por carretera convencional fuera de poblado.",
     "No esta prohibido",
     "Si siempre que tengan que circular por el carril de sentido contrario"], correct: 1 },

       { question: "¿Un ciclomotor y un turismo llegan al mismo tiempo a un estrechamiento en el que no esta señalizada la prioridad de paso que vehiculo pasa primero ?"
  , options: ["Motocicleta o ciclomotor.",
     "El que tenga una menor masa autorizada",
     "Turismo"], correct: 2 },

       { question: "En la medida de lo posible todo usuario de la via implicado en un accidente de circulacion debera... "
  , options: ["Trasladar a los heridos al hospital más cercano.",
     "Cambiar de sitio los objetos que ayuden a determinar la responsablidad del accidente.",
     "Comunicar su identidad a las personas implicadas en el accidente que se lo pidan"], correct: 2 },

       { question: "Si no existe espacio reservado para peatones las personas en silla de ruedas,¿Podran desplazarse por el arcen?"
  , options: ["Si",
     "Solo en vias urbanas ",
     "No"], correct: 0 },

       { question: "El coonductor de una motocicleta que va a girar a la izquierda, ¿Cómo debe señalizar su maniobra?"
  , options: ["Con el brazo extendido horizontalmente y la palma de la mano hacia arriba",
     "Con el brazo extendido horizontalmente y la palma de la mano hacia atras",
     "Con el Brazo extendido horizontalmente y la palma de la mano hacia abajo"], correct: 2 },

       { question: "En una calzada con los dos sentidos de circulacion separados por una linea continua ?esta permitido girar a la izquierda?"
  , options: ["Si cuando no se comprometa la seguridad de los demás usuarios.",
     "Solo dentro de poblado.",
     "NO"], correct: 2 },

       { question: "Una linea discontinua con trazos muy juntos indica..."
  , options: [" La proximidad de un carril para trafico lento",
     "La proximidad de un Tramo peligroso",
     "  u n carril especial"], correct: 1 },

       { question: "¿Si lleva a un pasajero en una motocicleta debe tener en cuenta"
  , options: ["La distancia de frenado aumenta",
     "La distancia de frenado disminuye",
     "La conduccion debe ser mas rapida"], correct: 0 },

       { question: "Si lleva pasajero en una motocicleta menor de edad  deba saber que "
  , options: ["Utilizar un sistema de retencion infantil homologado.",
     "Utilizar el asiento correspondiente del conductor",
     "Ir sentado a horcajadas entre conductor y el manillar"], correct: 1 },

       { question: "Al salir de una zona privada para incorporarse a la circulacion ¿Se debe ceder el paso?"
  , options: ["Si a todos los vehiculos que circulen por la via a la que accede.",
     "No porque tiene prioridad sobre los vehiculos que circulen por la via a la que accede.",
     " Si pero solo a los vehiculos que vengan por la derecha"], correct: 0 },

       { question: "De las siguientes obligaciones ¿Cual corresponde al conductor de un vehiculo?"
  , options: ["Asegurarse que las placas de matricula no presentan obstaculos que impidan su lectura.",
     "Someter el vehiculo a las inspecciones tecnicas que le correspondan.",
     "Contratar y mantener en vigor unseguro de responsabilidad civil"], correct: 0 },

       { question: "El conductor de una motocicleta que lleva una persona en el asiento trasero..."
  , options: ["Debe utilizar el casco protector y aconsejar al acompañante que lo utilice",
     "Debe utilizar el casco protector y sera responsable de que lo utiilice el acompañante",
     "Debe utilizar el casco protector y sera responsable de que lo utilice el acompañante pero solo en vias interurbanas"], correct: 1 },

       { question: "Cuando no sea delito conducir un vehiculo con presencia de drogas en el organismo es una infraccion..."
  , options: ["Muy Grave con perdida de 6 puntos del permiso de conducir",
     "Grave con perdida de 4 puntos del permiso de conducir",
     "Muy grave con perdida de 8 puntos"], correct: 0 },

       { question: "Un ciclomotor de dos ruedas esta obligado a llevar..."
  , options: ["Retrovisor derecho",
     "Solo el espejo retrovisor izquierdo",
     "Dos espejos uno a cada lado "], correct: 1 },

       { question: "En vias  interurbanas cual es el tipo de accidentes con victimas mas frecuentes"
  , options: ["Atropellos a peatones",
     "colisiones laterales",
     "Salida de via"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

];