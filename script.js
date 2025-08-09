const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");
const failuresLeftEl = document.getElementById("failures-left");
const imageEl = document.getElementById("question-image");
const timerEl = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const resultEl = document.getElementById("result");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

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

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 2 },

       { question: "Eb una calzada con los dos sentidos de circulacion separados por una linea continua ?esta permitido girar a la izquierda?"
  , options: ["Si cuando no se comprometa la seguridad de los demás usuarios.",
     "Solo dentro de poblado.",
     "NO"], correct: 2 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

       { question: "¿uuuuu?"
  , options: ["xxx",
     "xxx",
     "xxx"], correct: 1 },

];

let selectedQuestions = [];
let currentQuestion = 0;
let failures = 0;
const maxFailures = 3;
const totalQuestions = 30;
const quizTime = 20 * 60;
let timeLeft = quizTime;
let timerInterval;

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      endQuiz("Se acabó el tiempo.");
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function fetchMotorcycleImage() {
  return fetch(
    "https://api.unsplash.com/photos/random?query=motorcycle&orientation=landscape&content_filter=high",
    {
      headers: { Authorization: "Client-ID lVxRYD6NI7DCcDqF7RrApVQXp6mkU38PIgn5sLbNgWM" },
    }
  )
    .then((res) => res.json())
    .then((data) => data.urls?.regular || "https://via.placeholder.com/300x200?text=No+Image")
    .catch(() => "https://via.placeholder.com/300x200?text=Error");
}
async function loadQuestion() {
  feedbackEl.textContent = "";
  submitBtn.disabled = false;

  if (currentQuestion >= selectedQuestions.length) {
    endQuiz("¡Has completado el examen!");
    return;
  }

  const q = selectedQuestions[currentQuestion];
  questionNumberEl.textContent = currentQuestion + 1;
  questionEl.textContent = q.question;

  imageEl.style.display = "none";
  imageEl.src = "";
  const imgUrl = await fetchMotorcycleImage();
  imageEl.src = imgUrl;
  imageEl.style.display = "block";

  answersEl.innerHTML = "";
  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${i}" /> ${option}`;
    answersEl.appendChild(label);
    answersEl.appendChild(document.createElement("br"));
  });
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    feedbackEl.textContent = "Por favor, selecciona una respuesta.";
    return;
  }

  submitBtn.disabled = true;
  const answerIndex = parseInt(selected.value);
  const correctIndex = selectedQuestions[currentQuestion].correct;

  if (answerIndex === correctIndex) {
    feedbackEl.style.color = "green";
    feedbackEl.textContent = "¡Respuesta correcta!";
  } else {
    failures++;
    failuresLeftEl.textContent = maxFailures - failures;
    feedbackEl.style.color = "red";
    feedbackEl.innerHTML = `Incorrecta. La respuesta correcta es: <strong>${selectedQuestions[currentQuestion].options[correctIndex]}</strong>.`;
    if (failures >= maxFailures) {
      endQuiz("Has superado el número máximo de fallos permitidos.");
      return;
    }
  }

  currentQuestion++;
  setTimeout(() => loadQuestion(), 1500);
}

function endQuiz(message) {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  resultEl.style.display = "block";
  finalScoreEl.innerHTML = `${message}<br>Puntuación: ${
    currentQuestion - failures
  } de ${selectedQuestions.length}`;
}

function restartQuiz() {
  selectedQuestions = shuffleArray(allQuestions).slice(0, totalQuestions);
  currentQuestion = 0;
  failures = 0;
  timeLeft = quizTime;
  failuresLeftEl.textContent = maxFailures;

  resultEl.style.display = "none";
  quizContainer.style.display = "block";

  loadQuestion();
  startTimer();
}

submitBtn.addEventListener("click", checkAnswer);
restartBtn.addEventListener("click", restartQuiz);

// Inicia el test
restartQuiz();
