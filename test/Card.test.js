import { Card } from "../src/view/Elements/Card/Card";

test("get card", async () => {
  const card = await new Card({
    id: '1',
    href: "https://google.com",
    header: "header",
    image: "img",
    content: "content",
    footer: "footer"
  }).render()
  expect({
    classes: card.classList.length,
    children: card.children.length
  }).toStrictEqual({
    classes: 1,
    children: 2
  })
});