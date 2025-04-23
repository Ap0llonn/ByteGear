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

export function searchProductTemplate(product) {

    return `
                    <li class="p-2" 
                    data-product-price="${product.price}"
                        data-product-name="${product.name}" 
                        data-product-image="${product.image}"> 
                           <a href="" class="d-flex justify-content-between align-items-center gap-3 text-decoration-none text-body-primary">
                            <div class="left d-flex flex-row align-items-center gap-3">
                                <img src="${product.image}" alt="" width="50px">
                                <p class="m-0 fw-semibold">${product.name}</p>
                            </div>
                            <div class="right">
                                <p class="m-0">${product.price} $</p>
                            </div>
                           </a>
                        </li>
    `;
}

export function productTemplate(product) {

    return `
                    <div class="product-card p-0" data-product-price="${product.price}"
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
                                <span class="product-category">${product.category}</span>
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