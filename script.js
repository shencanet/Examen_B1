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

// Imágenes locales o libres
const motorcycleImages = [
  "img/moto1.jpg",
  "img/moto2.jpg",
  "img/moto3.jpg",
  "https://via.placeholder.com/600x400?text=Moto+1",
  "https://via.placeholder.com/600x400?text=Moto+2"
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

// Imagen aleatoria local o libre
function fetchMotorcycleImage() {
  // Añadimos un parámetro aleatorio para evitar que el navegador cachee la imagen
  const randomSeed = Math.floor(Math.random() * 1000);
  return Promise.resolve(`https://picsum.photos/seed/${randomSeed}/600/400`);
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
