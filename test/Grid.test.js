import { Card } from "../src/view/Elements/Card/Card";
import { GridMain } from "../src/view/Layouts/Grid/Grid";

test("get grid", async () => {
  const cards = []
  for (let i = 0; i < 100; i++) {
    const card = new Card({
      id: "1",
      href: "https://google.com",
      header: "header",
      image: "img",
      content: "content",
      footer: "footer",
    })
    cards.push(await card.render())
  }
  const gridElement = new GridMain({ children: cards }).render()
  expect(gridElement.children.length).toStrictEqual(100)
});