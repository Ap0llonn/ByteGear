
let nbItems = 0;
const nbItemsElement = document.querySelector(".nb-items-in-cart");

const basket = [];


export function initAddToCart() {


    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    for (const button of addToCartButtons) {
        button.addEventListener('click', handleProduct);

    }
}

function handleProduct(e) {
    if (nbItems >= 0) {
        nbItemsElement.classList.remove("d-none");
    }
    e.preventDefault();
    const button = e.currentTarget;
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.productName;
    const productPrice = productCard.dataset.productPrice;
    const productImage = productCard.dataset.productImage;
    const productDescription = productCard.dataset.productDescription;
    const productCategory = productCard.dataset.productCategory;
    nbItems++;
    nbItemsElement.textContent = nbItems;
    basket.push({
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription,
        category: productCategory
    });
    localStorage.setItem('userBasket', JSON.stringify(basket));
    console.log('Basket:', basket);
}
