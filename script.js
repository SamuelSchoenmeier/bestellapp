const ramenImg = [
    "Tonkotsu-ramen-image.jpg",
    "spicy-miso-ramen.jpg",
    "shoyu-ramen.jpg",
    "shio-ramen.jpg"
];

const ramenAlt = [
    "Tonkotsu-Ramen",
    "Spicy-Miso-Ramen",
    "Shoyu-Ramen",
    "Shio-Ramen"
];


const noodleImg = [
    "Yaki-Udon-img.jpg",
    "Yakisoba-img.jpg",
    "Savory-Zaru-Soba-img.jpg",
    "Tempura-Udon-img.jpg"
];

const noodleAlt = [
    "Yaki-Udon",
    "Yakisoba",
    "Savory-Zaru-Soba",
    "Tempura-Udon"
];


const sushiImg = [
    "Temaki.jpg",
    "Nigiri-img.jpg",
    "Maki.jpg",
    "Inside-Out-Rolls-img.jpg"
];

const sushiAlt = [
    "Temaki",
    "Nigiri",
    "Maki",
    "Inside-Out-Rolls"
];

const menus = [
    { id: "ramen_menu", data: ramen, template: renderRamenTemplate },
    { id: "noodle_menu", data: noodle, template: renderNoodleTemplate },
    { id: "sushi_menu", data: sushi, template: renderSushiTemplate }
];

let basket = [];

function init() {
    menus.forEach(menu => renderMenu(menu.id, menu.data, menu.template));

    renderEmptyBasket();
}


function renderMenu(containerId, menuData, templateFunction) {
    let contentRef = document.getElementById(containerId);
    contentRef.innerHTML = "";

    menuData.forEach((item, index)=> {
        contentRef.innerHTML += templateFunction(item, index)
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



function addRamenToBasket(ramenIndex) {
    addToBasket(ramen[ramenIndex]);
}

function addNoodleToBasket(noodleIndex) {
    addToBasket(noodels[noodleIndex]);
}

function addSushiToBasket(sushiIndex) {
    addToBasket(sushis[sushiIndex]);
}

function addToBasket (item) {
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

    renderBasket()
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();
}

function increaseQuantity(basketIndex) {
    basket[basketIndex].quantity++;

    renderBasket();
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();
}

function decreaseQuantity (basketIndex) {
    basket[basketIndex].quantity--;

    if (basket[basketIndex].quantity <= 0) {
        basket.splice(basketIndex, 1);
    }

    renderBasket();
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();
}

function getDishQuantity(btnName) {
    let item = basket.find(
        basketItem => basketItem.name === btnName);
    return item ? item.quantity : 0;
}

function removeDish(basketIndex) {
    basket.splice(basketIndex, 1);

    renderBasket();
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();
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


    renderBasket();
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();

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