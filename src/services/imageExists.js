export async function imageExists(image_url) {

  const http = new XMLHttpRequest();
  try {
    http.open("HEAD", image_url, false);
    http.send();
    return true;
  } catch {
    return false
  }

}


export async function asyncImageExists(imgUrl) {
  return new Promise(res => {
    const image = new Image();
    image.onload = () => res(true);
    image.onerror = () => res(false);
    image.src = imgUrl;
  });
}