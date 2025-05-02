export function productCardList(products) {
  let html = '';
  for (const product of products) {
    html += productTemplate(product);
  }
  return html;
}

export function productCardListSearch(products) {
  let html = '';
  for (const product of products) {
    html += searchProductTemplate(product);
  }
  return html;
}

function removeMinus(category) {
  return category.replaceAll('-', ' ');
}


export function cartOverviewProductTemplate({ image, name, price, quantity, index }) {
  return `
          <li class="basket-item p-3 d-flex justify-content-between align-items-center gap-3">
            <div class="basket-content d-flex align-items-center gap-3">
              <div class="basket-img">
                <img src="${image}" alt="${name}" width="60" height="60" class="rounded shadow-sm">
              </div>
              <div class="basket-info">
                <h6 class="m-0 fw-semibold">${name}</h6>
                <p class="m-0 fw-medium">${price} $</p>
              </div>
            </div>

            <div class="d-flex justify-content-between gap-2">
              <input data-index="${index}" type="number" class="form-control form-control-sm w-50 text-center" value="${quantity}" min="1" max="10" data-quantity-input>
              <button 
                class="btn btn-outline-danger p-1" 
                data-delete-cart-product
                data-index="${index}"
              >
                <i class="bi bi-trash fs-5"></i>
              </button>
            </div>
        </li>
    `;
}


export function searchProductTemplate(product) {

  return `
                   <li class="search-item p-2" 
    data-product-price="${product.price}"
    data-product-name="${product.name}" 
    data-product-image="${product.image}"> 
    <a href="#" class="d-flex justify-content-between align-items-center gap-3 text-decoration-none text-reset">
        <div class="left d-flex flex-row align-items-center gap-3">
            <img src="${product.image}" alt="${product.name}" class="rounded shadow-sm">
            <p class="m-0 fw-semibold">${product.name}</p>
        </div>
        <div class="right">
            <p class="m-0 fw-bold">${product.price} $</p>
        </div>
    </a>
</li>
    `;
}

export function productTemplate(product) {

  return `
  
                    <div class="product-card p-0 mb-3" data-product-price="${product.price}"
                        data-product-name="${product.name}" 
                        data-product-description="${product.description}"
                        data-product-category="${product.category}"
                        data-product-image="${product.image}"
                        >
                        <div class="product-img">
                            <img src="${product.image}" alt="${product.name}" class=""/>
                        </div>
                        <div class="product-content justify-content-between d-flex flex-column p-3">
                            <div class="d-flex justify-content-between align-items-center gap-2">
                                <span class="product-category">${removeMinus(product.category)}</span>
                                <span class="product-stock">En stock</span>
                            </div>
                            
                            <h5 class="product-title mt-3">${product.name}</h5>
                            <p class="product-description">${product.description}</p>
                            <div class="product-footer pt-3 d-flex justify-content-between align-items-center gap-2">
                                <span class="product-price fw-bold">${product.price} $</span>
                                <button class="add-to-cart-btn p-1 ps-2 pe-2" data-add-to-cart>Ajouter</button>
                            </div>
                        </div>
                    </div>
    `;

}