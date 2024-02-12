export async function fetchRecommendations(fetchURL) {
  try {
    const response = await fetch(fetchURL)
    const jsonResponse = await response.json()
    return new Promise((resolve) => resolve(jsonResponse.list))
  } catch (e) {
    return new Promise((_, reject) => reject(e))
  }
}
