const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const videoScreen = document.getElementById("video-screen");
const video = document.getElementById("love-video");
const nextBtn = document.getElementById("next-btn");

// При нажатии кнопки старт скрываем стартовый экран и показываем видео
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  videoScreen.classList.remove("hidden");
  video.play();

  // Показать кнопку "Дальше"
  nextBtn.classList.remove("hidden");
});

// Кнопка "Дальше" ведёт на новую страницу
nextBtn.addEventListener("click", () => {
  window.location.href = "message.html";
});

// Функция создания верхних сердечек
function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-50px'; // только сверху
    heart.style.animation = `floatDown ${3 + Math.random() * 5}s linear infinite`;
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(heart);
  }
}

// Генерируем 20 сердечек
createHearts(20);
