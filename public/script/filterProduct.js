import { getProductByBrand, getProductPriceASC } from "./data/product.js";
import { getFilteredProducts } from "./dynamic-product-page.js";
import { productCardList } from "./templates/product-template.js";

const container = document.querySelector("[data-product-container]");

const filters = document.querySelectorAll("select[data-filter]");

let products = getFilteredProducts();

let brands = [];

function initFilter() {
    brands = [];
    checkProductsBrand();
    updarteBrandFilter();
    for (const filter of filters) {
        filter.addEventListener("change", (e) => {
            let filteredProducts = [];
            const filterType = e.target.dataset.filter;
            const value = e.target.value;

            if (filterType === "brand") {
                
                for (const brand of brands) {
                    console.log("Brand selected:", value);
                    if (brand === value) {
                        console.log("Brand selected:", brand);
                        filteredProducts = getProductByBrand(brand);
                    }
                }
            }

            if (filterType === "price") {
                console.log("Price range selected:", value);

            }

            if (filterType === "sort") {
                filteredProducts = handleSort(value, filteredProducts);
            }
            render(filteredProducts);
        });
    }

}

function updarteBrandFilter(){
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
        }else {
           
        }
    }
    return brands;

}

function handleSort(value, filteredProducts) {
    if (value === "all") {
        filteredProducts = products;
    }

    if (value === "price-asc") {
        filteredProducts = getProductPriceASC(products);
    }
    if (value === "price-desc") {
        filteredProducts = getProductPriceASC(products).reverse();
    }
    if (value === "name-asc") {
        filteredProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (value === "name-desc") {
        filteredProducts = products.sort((a, b) => b.name.localeCompare(a.name));
    }
    return filteredProducts;
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