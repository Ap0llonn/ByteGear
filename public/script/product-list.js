import { getProducts } from './data/product.js';
import { productCardList } from './templates/product-template.js';

const container = document.querySelector('[data-product-container]');

export function initializeProduct() {

    const products = getProducts();
    container.innerHTML = productCardList(products);
}