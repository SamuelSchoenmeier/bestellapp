function renderRamenTemplate(ramenIndex) {
    return `    <div class="content menu-content">
                    <img 
                        class="ramen-menu-img"
                        src="/img/${ramenImg[ramenIndex]}"
                        alt="${ramenAlt[ramenIndex]}"/>
                    
                    <div class="menu-txt">
                        <div class="menu-headline">
                            <h4>${ramenAlt[ramenIndex]}</h4>
                            <h4 class="menucart-price">${ramen[ramenIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${ramen[ramenIndex].ingredients}</p>
                        </div>
                        <button onclick="addRamenToBasket(${ramenIndex})" class="menu-btn">
                        ${
                            getDishQuantity(ramen[ramenIndex].name) > 0
                                ? `<p class="added-to-basket">Added ${getDishQuantity(ramen[ramenIndex].name)}</p>`
                                : `<p class="add-to-basket">Add to Basket</p>`
                        }
                        </button>
                    </div>
                </div>`
}

function renderNoodleTemplate(noodleIndex) {
    return `    <div class="content menu-content">
                    <img 
                        class="ramen-menu-img"
                        src="/img/${noodleImg[noodleIndex]}"
                        alt="${noodleAlt[noodleIndex]}"/>
                    
                    <div class="menu-txt">
                        <div class="menu-headline">
                            <h4>${noodleAlt[noodleIndex]}</h4>
                            <h4 class="menucart-price">${noodels[noodleIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${noodels[noodleIndex].ingredients}</p>
                        </div>
                        <button class="menu-btn" onclick="addNoodleToBasket(${noodleIndex})">
                        ${
                            getDishQuantity(noodels[noodleIndex].name) > 0
                                ? `<p class="added-to-basket">Added ${getDishQuantity(noodels[noodleIndex].name)}</p>`
                                : `<p class="add-to-basket">Add to Basket</p>`
                        }
                        </button>
                    </div>
                </div>`
}

function renderSushiTemplate(sushiIndex) {
    return `    <div class="content menu-content">
                    <img 
                        class="ramen-menu-img"
                        src="/img/${sushiImg[sushiIndex]}"
                        alt="${sushiAlt[sushiIndex]}"/>
                    
                    <div class="menu-txt">
                        <div class="menu-headline">
                            <h4>${sushiAlt[sushiIndex]}</h4>
                            <h4 class="menucart-price">${sushis[sushiIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${sushis[sushiIndex].ingredients}</p>
                        </div>
                        <button class="menu-btn" onclick="addSushiToBasket(${sushiIndex})">
                        ${
                            getDishQuantity(sushis[sushiIndex].name) > 0
                                ? `<p class="added-to-basket">Added ${getDishQuantity(sushis[sushiIndex].name)}</p>`
                                : `<p class="add-to-basket">Add to Basket</p>`
                        }
                        </button>
                    </div>
                </div>`
}



//          /\__/\
//        =(  '.' )=  |
//          |`[]``\  /
//          |_n_n_| /


function renderBasketTemplate(basketIndex) {
    return `    <div class="menu-in-basket">
                    <h4>${basket[basketIndex].quantity} x ${basket[basketIndex].name}</h4>
                    <div class="order-dish">
                        <div class="dish-info">
                            <button class="delete-order-btn" onclick="decreaseQuantity(${basketIndex})">
                                ${
                                    basket[basketIndex].quantity === 1
                                        ? `<img class="delete-order-img" src="/icons/deletebasket-devault.png" alt="delete-order">`
                                        :`<span class="minus-sign">-</span>`
                                }
                            </button>

                            <p>${basket[basketIndex].quantity}</p>

                            <button onclick="increaseQuantity(${basketIndex})" class="add-to-order"><img src="/icons/+.png"></button>
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
            <img class="empty-basket-shoppingcart" src="/icons/shoppingcart.png" alt="shoppingcart because basket is emptyyy">
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