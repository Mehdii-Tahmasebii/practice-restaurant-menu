import productInfo from "./info.js";
import ProductBox from "../components/FoodBox/foodBox.js";

const $ = document;
const productWrapper = $.querySelector("[data-product-wrapper]");
const Btns = $.querySelectorAll("[data-btns]");

window.customElements.define("product-box", ProductBox);

//funcs
const clearHandler = () => {
  productWrapper.innerHTML = "";
  let prevBtnd = document.querySelector(".btns-active");
  prevBtnd?.classList.remove("btns-active");
};

const onLoadHandler = () => {
  productInfo.forEach((index) => {
    productWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <product-box>
         <img
         slot="product-image"
            src=${index.image}
            alt="product-pic"
            class="product-image"
          />
            <h4 slot="product-name">${index.name}</h4>
            <span slot="product-price">$${index.price}</span>
        </product-box>
        `
    );
  });
};

Btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    clearHandler();
    if (btn.id === "all") {
      event.target.classList.add("btns-active");
      productInfo.forEach((index) => {
        productWrapper.insertAdjacentHTML(
          "beforeend",
          `
            <product-box>
             <img
             slot="product-image"
                src=${index.image}
                alt="product-pic"
                class="product-image"
              />
                <h4 slot="product-name">${index.name}</h4>
                <span slot="product-price">$${index.price}</span>
            </product-box>
            `
        );
      });
    } else {
      event.target.classList.add("btns-active");
      let targetProduct = productInfo.filter((index) => index.type === btn.id);
      targetProduct.forEach((index) => {
        productWrapper.insertAdjacentHTML(
          "beforeend",
          `
            <product-box>
             <img
             slot="product-image"
                src=${index.image}
                alt="product-pic"
                class="product-image"
              />
                <h4 slot="product-name">${index.name}</h4>
                <span slot="product-price">$${index.price}</span>
            </product-box>
            `
        );
      });
    }
  });
});

onLoadHandler();
