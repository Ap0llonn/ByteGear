import { initAddToCart, loadBasket } from "./add-to-cart.js";
import { getProducts } from "./data/product.js";
import { productCardList } from "./templates/product-template.js";

const products = getProducts();
const container = document.querySelector("[data-product-container]");
const titleContent = document.querySelector(".product-page-title");

export function initProductPage() {

    let hash = location.hash.replace("#", "");
    let category = hash === "" ? "all" : hash;
    renderTitle(category);
    render(category);
    initAddToCart();
}

function renderTitle(category) {
    if (category == "Carte-graphique") {
        titleContent.textContent = "Carte graphique";
        return;
    }

    titleContent.textContent = category;
}

function render(category) {

    let filteredProducts = [];

    if (category === "all") {

        for (let j = 0; j < products.length; j++) {
            filteredProducts.push(products[j]);
        }
    } else {

        for (let i = 0; i < products.length; i++) {
            if (products[i].category === category) {
                filteredProducts.push(products[i]);
            }
        }
    }

    let html = productCardList(filteredProducts);
    container.innerHTML = html;
}

export function getFilteredProducts() {
    let hash = location.hash.replace("#", "");
    let category = hash === "" ? "all" : hash;
    return products.filter(product => product.category === category);
}

window.addEventListener("DOMContentLoaded", initProductPage);
window.addEventListener("hashchange", initProductPage);
window.addEventListener("DOMContentLoaded", loadBasket);
window.addEventListener("hashchange", loadBasket);
