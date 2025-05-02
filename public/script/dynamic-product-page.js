import { initAddToCart, loadBasket } from "./add-to-cart.js";
import { getProducts } from "./data/product.js";
import { productCardList } from "./templates/product-template.js";

let products = getProducts();
let container = document.querySelector("[data-product-container]");

function init() {

    let hash = location.hash.replace('#', '');
    let category = hash === "" ? "all" : hash;
    render(category);
    initAddToCart();
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
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', init);
window.addEventListener('DOMContentLoaded', loadBasket);
window.addEventListener('hashchange', loadBasket);
