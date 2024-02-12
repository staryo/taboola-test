import { Widget } from "../src/UIKit/Elements/Widget/Widget";

test("get 10 recommendations", async () => {
  const widget = new Widget({
    app_apikey: "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
    app_type: "desktop",
    count: "10",
    id: "taboola-recommendations-script",
    source_id: "214321562187",
    source_type: "video",
    source_url: "http://www.site.com/videos/214321562187.html",
    src: "../src/Widget.test.js",
    type: "module",
  })
  const renderedWidget = await widget.render()
  expect(renderedWidget.children.length).toBe(10)
});

test("get 50 recommendations", async () => {
  const widget = new Widget({
    app_apikey: "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
    app_type: "desktop",
    count: "50",
    id: "taboola-recommendations-script",
    source_id: "214321562187",
    source_type: "video",
    source_url: "http://www.site.com/videos/214321562187.html",
    src: "../src/Widget.test.js",
    type: "module",
  })
  const renderedWidget = await widget.render()
  expect(renderedWidget.children.length).toBe(50)
});

test("get 1 recommendation", async () => {
  const widget = new Widget({
    app_apikey: "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
    app_type: "desktop",
    count: "1",
    id: "taboola-recommendations-script",
    source_id: "214321562187",
    source_type: "video",
    source_url: "http://www.site.com/videos/214321562187.html",
    src: "../src/Widget.test.js",
    type: "module",
  })
  const renderedWidget = await widget.render()
  expect(renderedWidget.children.length).toBe(1)
});

test("get 0 recommendation", async () => {
  const widget = new Widget({
    app_apikey: "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
    app_type: "desktop",
    count: "0",
    id: "taboola-recommendations-script",
    source_id: "214321562187",
    source_type: "video",
    source_url: "http://www.site.com/videos/214321562187.html",
    src: "../src/Widget.test.js",
    type: "module",
  })
  const renderedWidget = await widget.render()
  expect(renderedWidget.children.length).toBe(0)
});