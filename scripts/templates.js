function renderRamenTemplate(ramenIndex) {
    return `    <div class="content menu-content">
                    <img 
                        class="ramen-menu-img"
                        src="/img/${ramenImg[ramenIndex]}"
                        alt="${ramenAlt[ramenIndex]}"/>
                    
                    <div class="menu-txt">
                        <div class="menu-headline">
                            <h4>${ramenAlt[ramenIndex]}</h4>
                            <h4>${ramen[ramenIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${ramen[ramenIndex].ingredients}</p>
                        </div>
                        <button onclick="addRamenToBasket(${ramenIndex})" class="menu-btn"></button>
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
                            <h4>${noodels[noodleIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${noodels[noodleIndex].ingredients}</p>
                        </div>
                        <button class="menu-btn" onclick="addNoodleToBasket(${noodleIndex})"></button>
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
                            <h4>${sushis[sushiIndex].price} €</h4>
                        </div>
                        <div class="menu-ingredients">
                            <p>${sushis[sushiIndex].ingredients}</p>
                        </div>
                        <button class="menu-btn" onclick="addSushiToBasket(${sushiIndex})"></button>
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
                            <button class="delete-order-btn"><img src="/icons/deletebasket-devault.png" alt="delet-order"></button>
                            <p>1</p>
                            <button class="add-to-order"><img src="icons/+.png"></button>
                        </div>
                        <p>${(basket[basketIndex].price * basket[basketIndex].quantity).toFixed(2)} €</p>
                    </div>
                </div>`
}

function emptyBasketTemplate() {
    return `<p>
                Nothing here yet.
                Go ahead and choose something delicious!
            </p>
            <img src="/icons/shoppingcart.png" alt="shoppingcart because basket is emptyyy">
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
                            <th>Delivery free</th>
                            <th>${deliveryCost === 0 ? "free" : deliveryCost.toFixed(2) + "€"}</th>
                        </tr>
                    </table>
                    <div class="seperator"></div>
                    <table>
                        <tr>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </table>
                </div>
                <button onclick="orderFood()">Buy now (${totalPrice.toFixed(2)}€)</button>    
            `
}