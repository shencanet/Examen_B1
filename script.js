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

let currentQuestion = 0;
let failures = 0;
const maxFailures = 3;
const quizTime = 20 * 60; // 20 minutos en segundos
let timeLeft = quizTime;
let timerInterval;

const quizData = [
  { question: "¿Los sistemas de seguridad pasiva incluyen ...?", options: ["Alumbrado, neumaticos,frenos y suspensión.", "Frenos, Neumaticos, airbags y cinturones de seguridad.", "Cinturones seguridad, airbags apoyacabezas y Casco"], correct: 2 },
  { question: "¿Que puede ocurrir si al atravesar un charco de agua los frenos se mojan?", options: ["Que pueden perder temporalmente su eficacia", "Que se estropean y deben cambiarse las zapatas o pastillas", "Que se reduce la distancia de Frenado"], correct: 0 },
  { question: "¿De los siguientes factores  cual favorece la aparicion de fatiga", options: ["¿Conducir un vehiculo con defectos en la direccion o en la suspension?", "Conducir un vehiculo con un cuadro de mandos bien diseñado", "Circular a una velocidad adecuada por una via en buen estado"], correct: 0 },
  { question: "¿Cuántos espejos retrovisores debe llevar, como mínimo, un turismo?", options: ["4", "2", "3"], correct: 1 },
  { question: "Una de las principales causas de accidente en personas jóvenes es...", options: ["la falta de reflejos.", "el exceso de velocidad.", "la falta de confianza en su capacidad de conducción."], correct: 1 },
  { question: "¿Cómo se denominan los costes de pérdida de vidas, de capacidad productiva y el sufrimiento físico o psicológico que tienen lugar como consecuencia de un accidente de tráfico?", options: ["Costes sanitarios.", "Costes materiales.", "Costes humanos."], correct: 2 },
];

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      endQuiz("Se acabó el tiempo.");
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function fetchCatImage() {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  return fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(data => data[0].url)
    .catch(() => "https://placekitten.com/300/300");
}

async function loadQuestion() {
  feedbackEl.textContent = "";
  submitBtn.disabled = false;

  if (currentQuestion >= quizData.length) {
    endQuiz("¡Has completado el examen!");
    return;
  }

  const q = quizData[currentQuestion];
  questionNumberEl.textContent = currentQuestion + 1;
  questionEl.textContent = q.question;

  // Imagen gatito
  imageEl.style.display = "none";
  imageEl.src = "";
  const catImageUrl = await fetchCatImage();
  imageEl.src = catImageUrl;
  imageEl.style.display = "block";

  answersEl.innerHTML = "";
  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${i}" />
      ${option}
    `;
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
  const correctIndex = quizData[currentQuestion].correct;

  if (answerIndex === correctIndex) {
    feedbackEl.style.color = "green";
    feedbackEl.textContent = "¡Respuesta correcta!";
  } else {
    failures++;
    failuresLeftEl.textContent = maxFailures - failures;
    feedbackEl.style.color = "red";
    feedbackEl.innerHTML = `Respuesta incorrecta. La respuesta correcta es: <strong>${quizData[currentQuestion].options[correctIndex]}</strong>.`;
    if (failures >= maxFailures) {
      endQuiz("Has superado el número máximo de fallos permitidos.");
      return;
    }
  }
  currentQuestion++;
  
  setTimeout(() => {
    loadQuestion();
  }, 2000);
}

function endQuiz(message) {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  resultEl.style.display = "block";
  resultEl.textContent = message + ` Tu puntuación: ${currentQuestion - failures} / ${quizData.length}`;
}

submitBtn.addEventListener("click", checkAnswer);

loadQuestion();
startTimer();
