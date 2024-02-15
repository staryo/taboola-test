import { imageExists } from "../services/imageExists.js";

const TABOOLA_API_URL = "http://api.taboola.com/1.0/json/taboola-templates/recommendations.get"
export async function fetchRecommendations({ app_type, app_apikey, source_id, source_type, source_url, count }) {
  const fetchURL = `${TABOOLA_API_URL}?app.type=${app_type}&app.apikey=${app_apikey}&count=${count * 3}&source.type=${source_type}&source.id=${source_id}&source.url=${source_url}`

  try {
    const response = await fetch(fetchURL)
    const jsonResponse = await response.json()
    const result = []
    jsonResponse.list.forEach((row) => {
      if (result.length < count && imageExists(row.thumbnail[0].url)) {
        result.push(row)
      }
    })
    return result
  } catch (e) {
    return new Promise((_, reject) => reject(e))
  }
}