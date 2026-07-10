let basket = [];

function init() {
    menus.forEach(menu=>{
        renderMenu(menu.id,menu.data,menu.category);
    });

    renderEmptyBasket();
}


function renderMenu(containerId, menuData, category) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    menuData.forEach((item,index)=>{
        container.innerHTML += renderMenuTemplate(item,index,category);
    });
}

//          /\__/\      
//         =( '.' )=  |
//          |`[]``\  /
//          |_n_n_| / 


function renderEmptyBasket() {
    let contentRef = document.getElementById("empty_basket");
    contentRef.innerHTML = "";
    contentRef.innerHTML = emptyBasketTemplate();
}

function renderBasket() {
    let basketRef = document.getElementById("basket_content");
    let basketContentRef = document.getElementById("whole_basket");
    let emptyBasketRef = document.getElementById("empty_basket");

    basketRef.innerHTML = "";
    emptyBasketRef.innerHTML = "";

    if (basket.length === 0){
        basketContentRef.style.display = "";
        renderEmptyBasket();
        document.getElementById("total_basket").innerHTML ="";
        return;
    }

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        basketRef.innerHTML += renderBasketTemplate(basketIndex);
    }


        menus.forEach(menu =>
            renderMenu(menu.id, menu.data, menu.category)
        );
    renderTotalPrice();
}


function renderTotalPrice() {
    let totalRef = document.getElementById("total_basket");

    let subTotal = 0;

    totalRef.innerHTML = "";

    for (let totalIndex = 0; totalIndex < basket.length; totalIndex++) {
        subTotal += basket[totalIndex].price * basket[totalIndex].quantity
    }

    let deliveryCost = subTotal >= 15 ? 0 : 2;
    let totalPrice = subTotal + deliveryCost;

    totalRef.innerHTML += totalBasketTemplate(totalPrice, subTotal, deliveryCost);
}


function addToBasket (category ,index) {
    let menu;

    if (category == "ramen") {
        menu = ramen;
    } else if (category == "noodels") {
        menu = noodels;
    } else {
        menu = sushis;
    }

    const item = menu[index];

    document.getElementById("whole_basket").classList.remove("basket-hidden");

    let existingItem = basket.find(
        basketItem => basketItem.name == item.name
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        basket.push(
            {
                name: item.name,
                price:item.price,
                quantity: 1
            }
        );
    }

    menus.forEach(menu =>
        renderMenu(menu.id, menu.data, menu.category)
    );
    renderBasket();
}

function increaseQuantity(basketIndex) {
    basket[basketIndex].quantity++;

    menus.forEach(menu =>
        renderMenu(menu.id, menu.data, menu.category)
    );
    renderBasket();
}

function decreaseQuantity (basketIndex) {
    basket[basketIndex].quantity--;

    if (basket[basketIndex].quantity <= 0) {
        basket.splice(basketIndex, 1);
    }

    menus.forEach(menu =>
        renderMenu(menu.id, menu.data, menu.category)
    );
    renderBasket();
}

function getDishQuantity(btnName) {
    let item = basket.find(
        basketItem => basketItem.name === btnName);
    return item ? item.quantity : 0;
}

function removeDish(basketIndex) {
    basket.splice(basketIndex, 1);

    menus.forEach(menu =>
        renderMenu(menu.id, menu.data, menu.category)
    );
    renderBasket();
}

function orderFood() {
    const orderFoodRef = document.getElementById("ordered_food_dialog");

    orderFoodRef.showModal();

    basket = [];

    if (window.innerWidth > 803) {
        document.getElementById("whole_basket").classList.add("basket-hidden");
    } else {
        closeRespBAsket();
    }

    menus.forEach(menu =>
        renderMenu(menu.id, menu.data, menu.category)
    );
    renderBasket();

    setTimeout(() => {
        orderFoodRef.close()
    },  2000);
}

function closeOrderedFood() {
    const orderFoodRef = document.getElementById("ordered_food_dialog");

    orderFoodRef.close();
}

function toggleRespBasket() {
    document
        .getElementById("whole_basket")
        .classList.add("show");

    document
        .getElementById("resp_menu_bar")
        .classList.remove("responsive-menu-bar");

    document.body.classList.add("no-scroll");
}

function closeRespBAsket() {
    document
        .getElementById("whole_basket")
        .classList.remove("show");

    document
        .getElementById("resp_menu_bar")
        .classList.add("responsive-menu-bar");

    document.body.classList.remove("no-scroll");
}