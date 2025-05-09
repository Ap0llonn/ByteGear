import { initAddToCart, loadBasket } from "./add-to-cart.js";
import { loadBasketOverview } from "./cart-overview.js";
import { updateFilterOnHashChange, initFilter } from "./filterProduct.js";
import { initPopularProduct, initRecommendeProduct } from "./product-list.js";
import { initSearchBar } from "./search-bar.js";
import { initProductPage } from "./dynamic-product-page.js"; // <== Make sure it's exported

window.addEventListener('DOMContentLoaded', () => {
    const addToCartContainer = document.querySelector("[data-add-to-cart-container]");

    if (addToCartContainer) {
        initAddToCart();
        loadBasket(addToCartContainer);
    }

    if (document.querySelector("[data-cart-overview-container]")) {
        loadBasketOverview();
    }

    if (document.querySelector("[data-filter]")) {
        initFilter();
        updateFilterOnHashChange();
    }

    if (document.querySelector("[data-search-bar]")) {
        initSearchBar();
    }

    initPopularProduct();
    initRecommendeProduct();
});

window.addEventListener('hashchange', () => {
    const addToCartContainer = document.querySelector("[data-add-to-cart-container]");
    
    if (addToCartContainer) {
        loadBasket(addToCartContainer);
    }

    updateFilterOnHashChange();
    
    if (typeof initProductPage === 'function') {
        initProductPage();
    }

    if (document.querySelector("[data-cart-overview-container]")) {
        loadBasketOverview();
    }
});
