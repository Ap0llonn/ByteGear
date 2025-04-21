import { getProducts, getRandomProduct } from './data/product.js';
import { productCardList } from './templates/product-template.js';

const popularProductContainer = document.querySelector('[data-popular-product-container]');
const recommendeProductContainer = document.querySelector('[data-recommende-product-container]');

export function initializeProduct() {

    const products = getProducts();
    container.innerHTML = productCardList(products);
}

export function initPopularProduct() {
   const products = getRandomProduct(4);
   popularProductContainer.innerHTML = productCardList(products);
}

export function initRecommendeProduct() {
    const products = getRandomProduct(4);
    recommendeProductContainer.innerHTML = productCardList(products);
 }
