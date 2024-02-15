import { Card } from "../Card/Card.js";
import { GridMain } from "../../Layouts/Grid/Grid.js";
import { fetchRecommendations } from "../../../api/taboolaApi.js";


export class Widget {
  constructor(params) {
    this.params = params
  }

  async render() {
    try {
      const recommendationsList = await fetchRecommendations(this.params)
      const cards = recommendationsList.map((row) => {
          return new Card({
            id: row.id,
            href: row.url,
            header: row.name,
            image: row.thumbnail[0].url,
            content: row.description,
            footer: row.branding,
            origin: row.origin,
          }).render()
        },
      )

      return new GridMain({ children: cards }).render()
    } catch (e) {
      console.log(e)
    }
  }
}
