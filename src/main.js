import { Card } from "./UIKit/Elements/Card/Card.js";
import { Grid } from "./UIKit/Layouts/Grid/Grid.js";

const cssModule = await import("./main.css", {
  assert: { type: "css" },
});

document.adoptedStyleSheets = [cssModule.default];

const TABOOLA_API_URL = "http://api.taboola.com/1.0/json/taboola-templates/recommendations.get"

class Widget {
  constructor(params) {
    const { app_type, app_apikey, source_id, source_type, source_url, count } = params
    this.fetchURL = `${TABOOLA_API_URL}?app.type=${app_type}&app.apikey=${app_apikey}&count=${count}&source.type=${source_type}&source.id=${source_id}&source.url=${source_url}`
    this.initialise();
  }

  initialise() {
    const root = document.getElementById("taboola-recommendations")
    if (!root) return

    this.fetchRecommendations().then((recommendationsList) => {

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
      const container = new Grid({ children: cards }).render()
      root.appendChild(container)

    }).catch((e) => {
      console.log(e)
    })
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

const currentScript = document.getElementById("taboola-recommendations-script");
const scriptParameters = {}
Object.keys(currentScript.attributes).forEach((key) => {
  if (!(["id", "src", "type"].includes(currentScript.attributes[key].name)))
    scriptParameters[currentScript.attributes[key].name] = currentScript.attributes[key].textContent
})

new Widget(scriptParameters)