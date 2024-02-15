export function imageExists(image_url) {

  const http = new XMLHttpRequest();
  try {
    http.open("HEAD", image_url, false);
    http.send();
    return true;
  } catch {
    return false
  }

}