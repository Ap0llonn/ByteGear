import { cartOverviewProductTemplate } from "./templates/product-template.js";


let subTotal = 0;
let nbItems = 0;
const basket = [];

const nbItemsElements = document.querySelectorAll(".nb-items-in-cart");
const addToCartContainer = document.querySelector("[data-add-to-cart-container]");
const subTotalElement = document.querySelector("[data-subtotal]");
const totalItemElement = document.querySelector("[data-total-item]");

export function initAddToCart() {

    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    for (const button of addToCartButtons) {
        button.addEventListener('click', handleProduct);

    }

    addToCartContainer.addEventListener('click', e => {
        const btn = e.target.closest('[data-delete-cart-product]');
        if (!btn) return;
        e.preventDefault();

        const id = parseInt(btn.dataset.index, 10);
        if (isNaN(id)) return;

        const [removed] = basket.splice(id, 1);
        localStorage.setItem('userBasket', JSON.stringify(basket));

        nbItems--;
        subTotal -= parseFloat(removed.price);
        updateDisplay();

        renderResults();
    });
}

function updateDisplay() {

    for (const nbItemsElement of nbItemsElements) {
        nbItemsElement.textContent = nbItems;
    }
    totalItemElement.textContent = `${nbItems} article(s)`;
    subTotalElement.textContent = `${subTotal.toFixed(2)} $`;

    for (const nbItemsElement of nbItemsElements) {
        nbItemsElement.classList.toggle('d-none', nbItems === 0);
    }
}

function handleProduct(e) {
    if (nbItems >= 0) {
        for (const nbItemsElement of nbItemsElements) {
            nbItemsElement.classList.remove('d-none');
        }

        addToCartContainer.classList.remove("no-basket-display");

    }
    e.preventDefault();

    const button = e.currentTarget;
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.productName;
    const productPrice = productCard.dataset.productPrice;
    const productImage = productCard.dataset.productImage;
    const productDescription = productCard.dataset.productDescription;
    const productCategory = productCard.dataset.productCategory;

    basket.push({
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription,
        category: productCategory
    });

    nbItems++;
    subTotal += parseFloat(productPrice);
    updateDisplay();
    renderResults();

    localStorage.setItem('userBasket', JSON.stringify(basket));
}


function renderResults() {

    let itemsHTML = '';
    for (let i = 0; i < basket.length; i++) {
        const p = basket[i];
        itemsHTML += cartOverviewProductTemplate({
            image: p.image,
            name: p.name,
            price: p.price,
            index: i
        });
    }

    addToCartContainer.innerHTML = `
      <ul class="list-unstyled d-flex flex-column gap-2 m-0">
        ${itemsHTML}
      </ul>`;
}