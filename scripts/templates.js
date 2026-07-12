function renderMenuTemplate(item, index, category) {
    return `
        <div class="content menu-content">
            <img
                class="ramen-menu-img"
                src="./img/${item.image}"
                alt="${item.name}">
            <div class="menu-txt">
                <div class="dishname-ingredients">
                    <h4 class="dish-name">${item.name}</h4>
                    <div class="menu-ingredients">
                        <p class="ingredients-txt">${item.ingredients}</p>
                    </div>
                </div>

                <div class="price-add-btn">
                    <h4 class="menucart-price">${item.price} €</h4>
                    <button
                        class="menu-btn"
                        onclick="addToBasket('${category}', ${index})">

                        ${
                            getDishQuantity(item.name) > 0
                                ? `<p class="added-to-basket">
                                        Added ${getDishQuantity(item.name)}
                                    </p>`
                                : `<p class="add-to-basket">
                                        Add to Basket
                                    </p>`
                        }
                    </button>
                </div>
            </div>
        </div>
    `;
}



//          /\__/\
//        =(  '.' )=  |
//          |`[]``\  /
//          |_n_n_| /


function renderBasketTemplate(basketIndex) {
    return `    <div class="menu-in-basket">
                    <div class="nav-basket">
                        <h4>${basket[basketIndex].quantity} x ${basket[basketIndex].name}</h4>
                        <button class="delete-order-btn" onclick="removeDish(${basketIndex})">
                            ${
                                basket[basketIndex].quantity > 1
                                    ? `<img class="delete-order-img" src="./icons/deletebasket-devault.png" alt="delete"/>`
                                    : ``
                            }
                        </button>
                    </div>
                    <div class="order-dish">
                        <div class="dish-info">
                            <button class="delete-order-btn" onclick="decreaseQuantity(${basketIndex})">
                                ${
                                    basket[basketIndex].quantity === 1
                                        ? `<img class="delete-order-img" src="./icons/deletebasket-devault.png" alt="delete-order"/>`
                                        :`<span class="minus-sign">-</span>`
                                }
                            </button>

                            <p>${basket[basketIndex].quantity}</p>

                            <button onclick="increaseQuantity(${basketIndex})" class="add-to-order"><img src="./icons/+.png"></button>
                        </div>
                        <p>${(basket[basketIndex].price * basket[basketIndex].quantity).toFixed(2)} €</p>
                    </div>
                </div>`
}

function emptyBasketTemplate() {
    return `<p class="empty-basket-text">
                Nothing here yet.
                Go ahead and choose something delicious!
            </p>
            <img class="empty-basket-shoppingcart" src="./icons/shoppingcart.png" alt="shoppingcart because basket is emptyyy">
            `
}

function totalBasketTemplate(totalPrice, subTotal, deliveryCost) {
    return `    <div>
                    <table>
                        <tr>
                            <th>Subtotal</th>
                            <th>${subTotal.toFixed(2)}€</th>
                        </tr>
                        <tr>
                            <th>Delivery</th>
                            <th>${deliveryCost === 0 ? "free" : deliveryCost.toFixed(2) + "€"}</th>
                        </tr>
                    </table>
                    <div class="seperator"></div>
                    <table>
                        <tr>
                            <th>Total</th>
                            <th>${totalPrice.toFixed(2)}€</th>
                        </tr>
                    </table>
                </div>
                <button class="buy-now-btn" onclick="orderFood()">Buy now (${totalPrice.toFixed(2)}€)</button>
            `
}