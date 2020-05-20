import { tech } from "./variables.js";

const techItem = (as) => {
  const container = document.querySelector("#aboutme__technology");
  console.log(container);
  console.log(tech);

  tech.map((e) => {
    console.log(e);
    // 1. create item

    const item = document.createElement("div");
    const text = document.createElement("p");

    //2. add class

    item.classList.add(`technology__item`);
    text.classList.add(`technology__item_text`);

    //2.5 add property

    item.style.backgroundImage = `url(../asset/logo/${e}.svg)`;

    //3. insert all Elements
    text.insertAdjacentText("beforeend", `${e.toUpperCase()}`);
    item.insertAdjacentElement("beforeend", text);
    container.insertAdjacentElement("beforeend", item);
  });

  console.log(item);
};

export { techItem };
