import { initAddToCart, loadBasket } from "./add-to-cart.js";
import { loadBasketOverview } from "./cart-overview.js";
import { updateFilterOnHashChange, initFilter } from "./filterProduct.js";
import { initPopularProduct, initRecommendeProduct } from "./product-list.js";
import { initSearchBar } from "./search-bar.js";
import { initProductPage } from "./dynamic-product-page.js";

initSearchBar();

window.addEventListener('DOMContentLoaded', () => {
    const addToCartContainer = document.querySelector("[data-add-to-cart-container]");

    initPopularProduct();
    initRecommendeProduct();

    if (addToCartContainer) {
        initAddToCart();
        loadBasket(addToCartContainer);
    }

    if (document.querySelector("[data-cart-overview-container]")) {
        loadBasketOverview();
    }

    if (document.querySelector("[data-filter]")) {
        console.log("hellp")
        initFilter();
        updateFilterOnHashChange();
    }


});

window.addEventListener('hashchange', () => {
    const addToCartContainer = document.querySelector("[data-add-to-cart-container]");

    if (addToCartContainer) {
        loadBasket(addToCartContainer);
    }

    updateFilterOnHashChange();

    initProductPage();

    if (document.querySelector("[data-cart-overview-container]")) {
        loadBasketOverview();
    }

});
