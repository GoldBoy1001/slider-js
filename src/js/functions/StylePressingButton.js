export default function stylePressingButton(btn) {
  btn.classList.add("no-shadow");
  // Через небольшой таймаут восстанавливаем возможность тени при наведении
  setTimeout(() => {
    btn.classList.remove("no-shadow");
  }, 200); // 200ms — время, в течение которого тень не будет отображаться
}
