import {createPortfolioItem} from "./script/createPortfolioItem.js"
import {site} from "./script/variables.js"

console.log("dziala")
const portfolio = () => {
  site.map((e) => {
    createPortfolioItem(e)
  })
}

portfolio()
