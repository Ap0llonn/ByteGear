import { getOutOfStockProducts, getProductByBrand, getProductPriceASC, getProductPriceRange, getProducts } from "./data/product.js";
import { getFilteredProducts } from "./dynamic-product-page.js";
import { productCardList } from "./templates/product-template.js";

const container = document.querySelector("[data-product-container]");

const filters = document.querySelectorAll("select[data-filter]");

let products = getFilteredProducts();


let selectedBrand = null;
let selectedPrice = null;
let selectedSort = null;

let brands = [];

function initFilter() {
    checkProductsBrand();
    updarteBrandFilter();

    for (const filter of filters) {
        filter.addEventListener("change", (e) => {
            const type = e.target.dataset.filter;
            const value = e.target.value;

            if (type === "brand") selectedBrand = value;
            if (type === "price") selectedPrice = value;
            if (type === "sort") selectedSort = value;

            applyAllFilters();
        });
    }

}

function applyAllFilters() {
    let result = [...products];

    result = getOutOfStockProducts(result);

    result = handleBrandSort(result);

    result = handlePriceSort(result);

    result = handleSort(result);

    render(result);
}


function handleBrandSort(result) {
    if (selectedBrand) {
        for (const product of result) {
            if (product.brand === selectedBrand) {
                result = getProductByBrand(product.brand);
            }

        }
    }
    return result;
}

function handlePriceSort(result) {
    if (selectedPrice) {
        let min = 0, max = Infinity;
        if (selectedPrice.includes("-")) {
            [min, max] = selectedPrice.split("-").map(Number);
        } else if (selectedPrice.includes("+")) {
            min = parseInt(selectedPrice);
        }
        result = result.filter(p => p.price >= min && p.price <= max);
    }
    return result;
}

function handleSort(result) {
    if (selectedSort === "price-asc") {
        result = getProductPriceASC(result);
    } else if (selectedSort === "price-desc") {
        result = getProductPriceASC(result).reverse();
    } else if (selectedSort === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name-desc") {
        result.sort((a, b) => b.name.localeCompare(a.name));
    }
    return result;
}

function updarteBrandFilter() {
    const brandSelect = document.querySelector('select[data-filter="brand"]');

    if (!brandSelect) return;

    brandSelect.innerHTML = `<option value="">Toutes les marques</option>`;

    for (const brand of brands) {
        const option = document.createElement("option");
        option.value = brand
        option.textContent = brand;
        brandSelect.appendChild(option);
    }
}

function checkProductsBrand() {

    for (const product of products) {
        if (!brands.includes(product.brand)) {
            brands.push(product.brand);
        } else {
            console.log("Brand already exists: " + product.brand);
        }
    }
    return brands;

}



function render(filteredProducts) {
    let html = productCardList(filteredProducts);

    container.innerHTML = html;
}

initFilter();

window.addEventListener("hashchange", function () {
    products = getFilteredProducts();

    const brandSelect = document.querySelector('select[data-filter="brand"]');
    if (brandSelect) brandSelect.value = "";

    brands = [];
    checkProductsBrand();
    updarteBrandFilter();
});