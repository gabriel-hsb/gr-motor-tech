export default function headerMenu() {
  const button = document.querySelector("[data-menu='button']")
  const modalContainer = document.querySelector(".modal-container")
  const links = modalContainer.querySelectorAll("a")

  if (button && modalContainer && links) {
    function toggleActive() {
      modalContainer.classList.toggle("active")
      button.classList.toggle("active")
      document.body.classList.toggle("overflowY")
    }

    button.addEventListener("click", toggleActive)

    links.forEach((link) => {
      link.addEventListener("click", toggleActive)
    })
  }
}
