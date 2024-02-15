export class AbstractLayout {
  constructor({ children, classes }) {
    this.children = children
    this.classes = classes
  }

  render() {
    const gridElement = document.createElement("div")
    gridElement.classList.add(...this.classes)
    this.children.forEach((child) => {
      gridElement.appendChild(child)
    })
    return gridElement
  }
}