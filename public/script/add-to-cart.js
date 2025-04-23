



export function initAddToCart() {

    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
      console.log("Found add-to-cart buttons:", addToCartButtons.length); 
    for (const button of addToCartButtons) {
        button.addEventListener('click', handleProduct);
    }
}

function handleProduct(e) {
    e.preventDefault();
    const button = e.currentTarget;
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.productName;
    const productPrice = productCard.dataset.productPrice;
    const productImage = productCard.dataset.productImage;
    const productDescription = productCard.dataset.productDescription;
    const productCategory = productCard.dataset.productCategory;
    console.log('Product added to cart:', productName, productPrice, productImage, productDescription, productCategory);
}
