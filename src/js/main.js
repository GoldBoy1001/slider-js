import "../scss/style.scss";

// =====================================
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;
  const auto = document.querySelector(".management__auto");

  let currentSlide = 1; // Начинаем с первого видимого слайда
  let isAnimating = false; // Флаг, указывающий на выполнение анимации
  let autoSlideInterval;

  auto.addEventListener("click", () => {
    auto.classList.toggle("auto");

    const startAuto = () => {
      autoSlideInterval = setInterval(() => {
        currentSlide++;
        updateSlidesPosition();
      }, 3000);
    };

    auto.classList.contains("auto")
      ? startAuto() // Запуск авто-слайдера
      : clearInterval(autoSlideInterval); // Остановка авто-слайдера
  });

  function stylePressingButton(btn) {
    btn.classList.add("no-shadow");
    // Через небольшой таймаут восстанавливаем возможность тени при наведении
    setTimeout(() => {
      btn.classList.remove("no-shadow");
    }, 200); // 200ms — время, в течение которого тень не будет отображаться
  }
  // Инициализация начальной позиции слайдов
  function initSlidesPosition() {
    slidesContainer.style.transition = "none";
    slideOffset();
  }

  function slideOffset() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Функция для обновления позиции слайдов
  function updateSlidesPosition() {
    isAnimating = true; // Начинаем анимацию
    slidesContainer.style.transition = "transform 1s ease";
    slideOffset();
    // Проверяем, если достигли первого или последнего слайда
    slidesContainer.addEventListener(
      "transitionend",
      () => {
        if (currentSlide === 0) {
          slidesContainer.style.transition = "none";
          currentSlide = slideCount - 2; // Перемещаем к предпоследнему слайду
          slideOffset();
        } else if (currentSlide === slideCount - 1) {
          slidesContainer.style.transition = "none";
          currentSlide = 1; // Перемещаем к первому слайду
          slideOffset();
        }
        isAnimating = false; // Завершаем анимацию
      },
      { once: true }
    );
  }

  // Функция для перехода на следующий слайд
  function nextSlide() {
    stylePressingButton(this);

    if (!isAnimating) {
      currentSlide++;
      updateSlidesPosition();
    }
  }

  // Функция для перехода на предыдущий слайд
  function prevSlide() {
    stylePressingButton(this);

    if (!isAnimating) {
      currentSlide--;
      updateSlidesPosition();
    }
  }

  // Навешиваем обработчики событий на кнопки
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // prevButton.addEventListener("click", prevSlide);

  // Инициализация начальной позиции слайдов
  initSlidesPosition();
});

// document.querySelector("#app").innerHTML = `
// `;