export default function headerMenu() {
  const button = document.querySelector("[data-menu='button']")
  const modalContainer = document.querySelector(".modal-container")
  const links = modalContainer.querySelectorAll("a")

  if (button && modalContainer && links) {
    button.addEventListener("click", toggleActive)

    function toggleActive() {
      modalContainer.classList.toggle("active")
      button.classList.toggle("active")
      document.body.classList.toggle("overflowY")

      button.setAttribute("aria-expanded", "true")

      linksEventListener()
    }

    function linksEventListener() {
      if (modalContainer.classList.contains("active")) {
        links.forEach((link) => {
          link.addEventListener("click", toggleActive)
        })
      }
    }
  }
}
