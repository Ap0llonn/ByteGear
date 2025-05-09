
import { cartOverviewProductTemplate } from "./templates/product-template.js";

const cartOverviewContainer = document.querySelector("[data-cart-overview-container]");

const subTotalElement = document.querySelector("[data-subtotal-cart-overview]");
const totalElement = document.querySelector("[data-total-cart-overview]");
const taxElement = document.querySelector("[ data-taxes-cart-overview]");
const deleveryElement = document.querySelector("[data-shipping-cart-overview]");
const basket = JSON.parse(localStorage.getItem('userBasket')) || [];

const TAX = 0.15;
const DELIVERY_FEE = 0.05;

export function loadBasketOverview() {

    
    let subTotal = 0;
    let total = 0;
    let nbItems = 0;
    let taxes = 0;
    let delivery = 0;

    for (const item of basket) {
        subTotal += item.price * (item.quantity || 1);
    }

   
    ({ taxes, delivery, total } = calculatePrice(taxes, subTotal, delivery, total));

    updateDisplay(subTotal, total, taxes, delivery); 
    
    cartOverviewContainer.addEventListener('input', e => {
        const input = e.target.closest('[data-quantity-input]');
        if (!input) return;

        const id = input.dataset.id;
        let index = findIndex(id);
        const quantity = parseInt(input.value, 10);
        if (isNaN(quantity) || quantity < 1) return;

        basket[index].quantity = quantity;
        subTotal = basket.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
        
        ({ taxes, delivery, total } = calculatePrice(taxes, subTotal, delivery, total));
        updateDisplay(subTotal, total, taxes, delivery);
    });

    cartOverviewContainer.addEventListener('click', e => {
        
        const btn = e.target.closest('[data-delete-cart-product]');
        if (!btn) return;
        e.preventDefault();

        const id = btn.dataset.id;
        let index = findIndex(id);
        if (index === -1) return;

        const [removed] = basket.splice(index, 1);
        localStorage.setItem('userBasket', JSON.stringify(basket));

        nbItems -= removed.quantity;
        subTotal -= parseFloat(removed.price * removed.quantity);
        ({ taxes, delivery, total } = calculatePrice(taxes, subTotal, delivery, total));
        updateDisplay(subTotal, total, taxes, delivery);

        renderResults();
    });

}

function findIndex(id) {
    let index = -1;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
}

function calculatePrice(taxes, subTotal, delivery, total) {
    taxes = subTotal * TAX;

    delivery = subTotal * DELIVERY_FEE;
    total = subTotal + taxes + delivery;
    return { taxes, delivery, total };
}

function updateDisplay(subTotal, total, taxes, delivery) {

    subTotalElement.textContent = `${subTotal.toFixed(2)} $`;
    totalElement.textContent = `${total.toFixed(2)} $`;
    taxElement.textContent = `${taxes.toFixed(2)} $`;
    deleveryElement.textContent = `${delivery.toFixed(2)} $`;

    renderResults();
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
            id: p.id

        });
    }

    cartOverviewContainer.innerHTML = `
      <ul class="list-unstyled d-flex flex-column m-0">
        ${itemsHTML}
      </ul>`;
}

window.addEventListener('DOMContentLoaded', loadBasketOverview);
window.addEventListener('hashchange', loadBasketOverview);