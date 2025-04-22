import { getProducts } from "./data/product.js";
import { searchProductTemplate } from "./templates/product-template.js";

const allSearchBars = document.querySelectorAll('.search-bar, .mobile-search-bar');

const allProducts = getProducts();


for (let i = 0; i < allSearchBars.length; i++) {
    const bar = allSearchBars[i];
    const input = bar.querySelector("[data-search-input]");
    const container = bar.querySelector("[data-search-result-container]");

    input.addEventListener("input", (e) => {
        const text = e.target.value.trim();
        if (!text) {
            container.classList.add("d-none");
            return;
        }

        const results = filterProductByName(text);
        if (results.length) {
            renderResults(results);
        } else {
            container.innerHTML = `<ul><li>Aucun résultat pour “${text}”</li></ul>`;
        }
        container.classList.remove("d-none");
    });

    input.addEventListener('blur', () => {
        searchContainer.classList.add('d-none');
    });

    function renderResults(products) {

        let itemsHTML = "";
        for (let i = 0; i < products.length; i++) {
            const p = products[i];
            itemsHTML += searchProductTemplate(p);
        }

        container.innerHTML = '<ul class="list-unstyled d-flex flex-column gap-2 m-0">' + itemsHTML + '</ul>';
    }

    function filterProductByName(text) {
        const filtered = [];

        for (let index = 0; index < allProducts.length; index++) {
            const product = allProducts[index];
            if (product.name.toLowerCase().includes(text.toLowerCase())) {
                filtered.push(product);
            }
        }
        return filtered;
    }

}

