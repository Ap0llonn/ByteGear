import { initAddToCart, loadBasket } from "./add-to-cart.js";
import { loadBasketOverview } from "./cart-overview.js";
import { updateFilterOnHashChange, initFilter } from "./filterProduct.js";
import { initPopularProduct, initRecommendeProduct } from "./product-list.js";
import { initSearchBar } from "./search-bar.js";


const addToCartContainer = document.querySelector("[data-add-to-cart-container]");
initPopularProduct();
initRecommendeProduct();

initAddToCart();
initFilter();
initSearchBar();





window.addEventListener('DOMContentLoaded', () => {
    loadBasket(addToCartContainer);
    loadBasketOverview();
   

});

window.addEventListener('hashchange', () => {
    loadBasket(addToCartContainer);
    updateFilterOnHashChange();
    initProductPage();
    loadBasketOverview();
});

