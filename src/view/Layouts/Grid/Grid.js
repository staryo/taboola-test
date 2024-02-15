import { AbstractLayout } from "../AbstractLayout.js";

export class Grid extends AbstractLayout{
    constructor({ children, classes }) {
        classes = [...classes, "Grid"]
        super({children, classes})
    }

}

export class GridMain extends Grid {
    constructor({children}) {
        super({children, classes: []});
    }
}