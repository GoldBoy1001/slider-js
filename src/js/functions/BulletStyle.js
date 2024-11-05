const bullet = document.querySelectorAll(".bul");

export default function bulletStyle(k) {
  bullet.forEach(i => {
    if (
      Number(i.id) === k ||
      Number(i.id) === k - 10 ||
      Number(i.id) === k + 10
    ) {
      i.classList.add("active-bullet");
    } else {
      i.classList.remove("active-bullet");
    }
  });
}
