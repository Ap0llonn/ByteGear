import { getProducts } from "./data/product.js";
import { searchProductTemplate } from "./templates/product-template.js";

const allSearchBars = document.querySelectorAll('.search-bar, .mobile-search-bar');

const allProducts = getProducts();

export function initSearchBar() {
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

            const results = filterProductByName(text, container);
            if (results.length) {
                renderResults(results, container);
            } else {
                container.innerHTML = `<ul><li>Aucun résultat pour “${text}”</li></ul>`;
            }
            container.classList.remove("d-none");
        });

        input.addEventListener('blur', () => {
            container.classList.add('d-none');
        });

    }
}


function renderResults(products, container) {

    let itemsHTML = "";
    for (let i = 0; i < products.length; i++) {
        const p = products[i];
        itemsHTML += searchProductTemplate(p);
    }

    container.innerHTML = '<ul class="list-unstyled d-flex flex-column gap-2 m-0">' + itemsHTML + '</ul>';
}

function filterProductByName(text, container) {
    const terms = text
        .toLowerCase()
        .trim()
        .split(/\s+/);

    const all = getProducts();
    const out = [];

    for (let i = 0; i < all.length; i++) {
        const name = all[i].name.toLowerCase();
        let matches = true;

        for (let j = 0; j < terms.length; j++) {
            if (!name.includes(terms[j])) {
                matches = false;
                break;
            }
        }

        if (matches) {
            out.push(all[i]);
        }
    }

    return out;
}