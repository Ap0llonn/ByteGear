import { initAddToCart, loadBasket } from "./add-to-cart.js";

const addToCartContainer = document.querySelector("[data-add-to-cart-container]");

initAddToCart();

window.addEventListener('DOMContentLoaded', () => loadBasket(addToCartContainer));
window.addEventListener('hashchange', () => loadBasket(addToCartContainer));


