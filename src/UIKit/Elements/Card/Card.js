export class Card {
  constructor(params) {
    const { id, href, header, image, content, footer, origin } = params
    this.id = id
    this.href = href
    this.header = header
    this.image = image
    this.content = content
    this.footer = footer
    this.origin = origin
  }

  render() {
    const cardThumbnail = document.createElement("figure")
    const backgroundImage = document.createElement("img")
    backgroundImage.src = this.image
    backgroundImage.onerror= () => {
      cardImage.src="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg"
    }
    backgroundImage.classList.add("background-image")
    cardThumbnail.appendChild(backgroundImage)

    const cardImage = document.createElement("img")
    cardImage.onerror= () => {
      cardImage.src="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg"
    }

    cardImage.src = this.image
    cardThumbnail.appendChild(cardImage)

    const cardContent = document.createElement("div")
    cardContent.classList.add("content-body")
    const cardHeader = document.createElement("h1")
    cardHeader.textContent = this.header
    cardContent.appendChild(cardHeader)
    const cardText = document.createElement("a")
    cardText.href = this.href
    if (this.origin === "sponsored") cardText.target = "_blank"
    cardText.textContent = this.footer
    cardContent.appendChild(cardText)

    const card = document.createElement("div")
    card.classList.add("Card")
    card.appendChild(cardThumbnail)
    card.appendChild(cardContent)
    card.id = this.id
    return card
  }

}