const site = [
  {
    title: "pierwsza strone",
    img: "./asset/img/project1-small.jpg",
    desc:
      "Labore quis sit consequat proident laboris incididunt. Ipsum laborum occaecat dolor enim laboris qui incididunt incididunt tempor irure aute ipsum eu. Sit ea aute officia sit officia pariatur voluptate voluptate aute aliqua. Dolore fugiat dolor minim cupidatat enim pariatur dolor non.",
    tech: ["html", "css", "js"],
  },
  {
    title: "druga strone",
    img: "./asset/img/project1-small.jpg",
    desc:
      "Labore quis sit consequat proident laboris incididunt. Ipsum laborum occaecat dolor enim laboris qui incididunt incididunt tempor irure aute ipsum eu. Sit ea aute officia sit officia pariatur voluptate voluptate aute aliqua. Dolore fugiat dolor minim cupidatat enim pariatur dolor non.",
    tech: ["html", "css", "js"],
  },
]

const createPortfolioItem = (siteDesc) => {
  const portfolioContent = document.querySelector("#portfolio__wrapper")
  const {title, img, desc, tech} = siteDesc

  const item = document.createElement(`div`)
  const elimage = document.createElement(`img`)
  const eldescription = document.createElement(`div`)
  const eltitle = document.createElement(`h3`)
  const eltext = document.createElement(`p`)
  const eltech = document.createElement("div")

  item.appendChild(elimage)
  item.appendChild(eldescription)
  eldescription.appendChild(eltitle)
  eldescription.appendChild(eltext)
  eldescription.appendChild(eltech)

  item.classList.add(`item`)
  elimage.classList.add(`item__img`)
  eldescription.classList.add(`item__desc`)
  eltitle.classList.add(`item__title`)
  eltext.classList.add(`item__text`)
  eltech.classList.add(`item__tech`)

  elimage.setAttribute("src", img)
  eltitle.insertAdjacentText("afterbegin", title)
  eltext.insertAdjacentText("afterbegin", desc)

  tech.map((e) => {
    const eltechDesc = document.createElement(`p`)

    eltechDesc.insertAdjacentText("beforeend", e.toUpperCase())
    eltechDesc.classList.add("item__tech_desc")
    eltech.insertAdjacentElement("beforeend", eltechDesc)
    console.log(eltechDesc)
  })

  console.log(item)
  console.log(portfolioContent)
  portfolioContent.insertAdjacentElement("beforeend", item)
}

const portfolio = () => {
  site.map((e) => {
    createPortfolioItem(e)
  })
}
portfolio()
