const paginationBtn = document.querySelector(".management__paginate");
const pagination = document.querySelector(".pagination");

export default function paginationBtnActive() {
  paginationBtn.addEventListener("click", () => {
    pagination.classList.toggle("pagination-active");
  });
}
