export default function linksNavigate() {
  const btnLinks = document.querySelectorAll("[data-btn-link]")
  const wppURL =
    "https://wa.me/5515991353491?text=Olá!%20Vim%20pelo%20seu%20site"

  btnLinks.forEach((btnLink) => {
    const attributeLink = btnLink.attributes[0].value

    btnLink.addEventListener("click", () => openWhatsapp(attributeLink))
  })

  function openWhatsapp(link) {
    if (link) {
      if (link === "wpp") {
        window.open(wppURL, "_blank").focus()
      } else {
        document.querySelector(link).scrollIntoView()
      }
    }
  }
}
