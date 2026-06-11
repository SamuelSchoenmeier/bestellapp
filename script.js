const ramenImg = [
    "Tonkotsu ramen image.jpg",
    "spicy miso ramen.jpg",
    "shoyu ramen.jpg",
    "shio ramen.jpg"
];

const ramenAlt = [
    "Tonkotsu Ramen",
    "Spicy Miso Ramen",
    "Shoyu Ramen",
    "Shio Ramen"
];


const noodleImg = [
    "Yaki Udon-img.jpg",
    "Yakisoba-img.jpg",
    "Savory Zaru Soba-img.jpg",
    "Tempura Udon-img.jpg"
];

const noodleAlt = [
    "Yaki Udon",
    "Yakisoba",
    "Savory Zaru Soba",
    "Tempura Udon"
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

let basket = [];


function init() {
    renderRamenMenu();
    rendernoodleMenu();
    renderSushiMenu();

    renderEmptyBasket();
}


function renderRamenMenu() {
    let contentRamenRef = document.getElementById("ramen_menu");
    contentRamenRef.innerHTML = "";

    for (let ramenIndex = 0; ramenIndex < ramenImg.length; ramenIndex++) {
        contentRamenRef.innerHTML += renderRamenTemplate(ramenIndex);
    }
}

function rendernoodleMenu() {
    let contentNoodleRef = document.getElementById("noodle_menu");
    contentNoodleRef.innerHTML = "";

    for (let noodleIndex = 0; noodleIndex < noodleImg.length; noodleIndex++) {
        contentNoodleRef.innerHTML += renderNoodleTemplate(noodleIndex);
        
    }
}

function renderSushiMenu() {
    let contentSushiRef = document.getElementById("sushi_menu");
    contentSushiRef.innerHTML = "";

    for (let sushiIndex = 0; sushiIndex < sushiImg.length; sushiIndex++) {
        contentSushiRef.innerHTML += renderSushiTemplate(sushiIndex);
    }
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
    let emptyBasketRef = document.getElementById("empty_basket");

    basketRef.innerHTML = "";
    emptyBasketRef.innerHTML = "";

    if (basket.length === 0){
        renderEmptyBasket();

        document.getElementById("total_basket").innerHTML ="";

        return;
    }

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        let totalPrice = basket[basketIndex].price * basket[basketIndex].quantity;

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
}

function decreaseQuantity (basketIndex) {
    basket[basketIndex].quantity--;

    if (basket[basketIndex].quantity <= 0) {
        basket.splice(basketIndex, 1);
    }

    renderBasket();
}

function getDishQuantity(btnName) {
    let item = basket.find(
        basketItem => basketItem.name === btnName);
    return item ? item.quantity : 0;
}


function orderFood() {
    const orderFoodRef = document.getElementById("ordered_food_dialog");

    orderFoodRef.showModal();

    setTimeout(() => {
        orderFoodRef.close()

        basket = [];

        renderBasket();
    },  4000);

}

function closeOrderedFood() {
    const orderFoodRef = document.getElementById("ordered_food_dialog");

    orderFoodRef.close();
}