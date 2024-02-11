export class Grid {
    constructor({ children }) {
        this.children = children
    }

    render() {
        const gridElement = document.createElement("div")
        gridElement.classList.add("Grid")
        this.children.forEach((child) => {
            gridElement.appendChild(child)
        })
        return gridElement
    }
}