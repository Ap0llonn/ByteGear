import { cartOverviewProductTemplate } from "./templates/product-template.js";

let subTotal = 0;
let nbItems = 0;
let basket = [];

const nbItemsElements = document.querySelectorAll(".nb-items-in-cart");
const addToCartContainer = document.querySelector("[data-add-to-cart-container]");
const subTotalElement = document.querySelector("[data-subtotal]");
const totalItemElement = document.querySelector("[data-total-item]");

export function initAddToCart() {

        const addToCartButtons = document.querySelectorAll("[data-add-to-cart]");
        for (const button of addToCartButtons) {
            button.addEventListener('click', handleProduct);

        }

        addToCartContainer.addEventListener('input', e => {
            const input = e.target.closest('[data-quantity-input]');
            if (!input) return;

            const index = parseInt(input.dataset.index);
            const quantity = parseInt(input.value, 10);
            if (isNaN(quantity) || quantity < 1) return;

            basket[index].quantity = quantity;
            subTotal = basket.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
            nbItems = basket.reduce((acc, item) => acc + (item.quantity || 1), 0);
            updateDisplay();
        });

        addToCartContainer.addEventListener('click', e => {
            const btn = e.target.closest('[data-delete-cart-product]');
            if (!btn) return;
            e.preventDefault();

            const id = parseInt(btn.dataset.index, 10);
            if (isNaN(id)) return;

            const [removed] = basket.splice(id, 1);
            localStorage.setItem('userBasket', JSON.stringify(basket));

            nbItems -= removed.quantity;
            subTotal -= parseFloat(removed.price * removed.quantity);
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
            nbItemsElement.classList.remove("d-none");
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

    for (let index = 0; index < basket.length; index++) {
        const p = basket[index];
        if (p.name === productName) {
            basket[index].quantity++;
            nbItems++;
            subTotal += parseFloat(productPrice);
            
            updateDisplay();
            renderResults();
            localStorage.setItem('userBasket', JSON.stringify(basket));
            return;
        }

    }

    basket.push({
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription,
        category: productCategory,
        quantity: 1
    });

    nbItems++;
    subTotal += parseFloat(productPrice);
    updateDisplay();
    renderResults();

    localStorage.setItem('userBasket', JSON.stringify(basket));
}

export function loadBasket() {
    const savedBasket = localStorage.getItem('userBasket');
    if (savedBasket) {
        const parsedBasket = JSON.parse(savedBasket);

        basket.length = 0;
        subTotal = 0;
        nbItems = 0;

        for (const item of parsedBasket) {
            basket.push(item);
            nbItems += item.quantity;
            subTotal += parseFloat(item.price) * item.quantity;
        }

        updateDisplay();
        renderResults(addToCartContainer);
    }
}

function renderResults() {

    let itemsHTML = '';
    for (let i = 0; i < basket.length; i++) {
        const p = basket[i];

        itemsHTML += cartOverviewProductTemplate({
            image: p.image,
            name: p.name,
            price: p.price,
            quantity: p.quantity,
            index: i

        });
    }

    addToCartContainer.innerHTML = `
      <ul class="list-unstyled d-flex flex-column m-0">
        ${itemsHTML}
      </ul>`;
}
