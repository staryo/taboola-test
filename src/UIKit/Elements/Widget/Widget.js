import { Card } from "../Card/Card.js";
import { Grid } from "../../Layouts/Grid/Grid.js";

const TABOOLA_API_URL = "http://api.taboola.com/1.0/json/taboola-templates/recommendations.get"

export class Widget {
  constructor(params) {
    const { app_type, app_apikey, source_id, source_type, source_url, count } = params
    this.fetchURL = `${TABOOLA_API_URL}?app.type=${app_type}&app.apikey=${app_apikey}&count=${count}&source.type=${source_type}&source.id=${source_id}&source.url=${source_url}`
  }

  async render() {
    try {
      const recommendationsList = await this.fetchRecommendations()
      const cards = recommendationsList.map((row) => {
        return new Card({
          id: row.id,
          href: row.url,
          header: row.name,
          image: row.thumbnail[0].url,
          content: row.description,
          footer: row.branding,
        }).render()
      })
      return new Promise((resolve) => resolve(
        new Grid({ children: cards }).render()
      ))
    } catch (e) {
      console.log(e)
    }
  }

  async fetchRecommendations() {
    try {
      const response = await fetch(this.fetchURL)
      const jsonResponse = await response.json()
      return new Promise((resolve) => resolve(jsonResponse.list))
    } catch (e) {
      return new Promise((_, reject) => reject(e))
    }
  }
}
