import { Widget } from "./view/Elements/Widget/Widget.js";

const cssModule = await import("./main.css", {
  assert: { type: "css" },
});

document.adoptedStyleSheets = [cssModule.default];

const currentScript = document.getElementById("taboola-recommendations-script");
const scriptParameters = {}
Object.keys(currentScript.attributes).forEach((key) => {
  if (!(["id", "src", "type"].includes(currentScript.attributes[key].name)))
    scriptParameters[currentScript.attributes[key].name] = currentScript.attributes[key].textContent
})

const elementLoaded = () => {
  return new Promise((resolve) => {
    const check = () => {
      if (document.getElementById("taboola-recommendations") !== null) {
        resolve(document.getElementById("taboola-recommendations"))
      } else setTimeout(check, 1000)
    }
    check()
  })
};

elementLoaded().then((root) => {
  new Widget(scriptParameters).render().then((widget) => {
    if (widget) root.appendChild(widget)
  })
});
