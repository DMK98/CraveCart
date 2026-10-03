// review swiper navigation
var swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '#prev',
        prevEl: '#next',
    },
});


const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".menu-card-list");
const cartList=document.querySelector(".cart-list")
;
cartIcon.addEventListener("click", () => {
    cartTab.classList.add("cart-tab-active");
})
closeBtn.addEventListener("click", () => {
    cartTab.classList.remove("cart-tab-active");
})


let productList = [];
let cartProduct=[];

const showCards = () => {
    productList.forEach((product) => {
        const orderCard = document.createElement('div');
        orderCard.classList.add("menu-order-card");
        orderCard.innerHTML = `
            <div class="order-card-image">
                <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="" class="add-cart-btn btn order-card-btn">Add to Cart</a>
            `;
        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector(".order-card-btn");
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addTocart(product);
        })
    })
}

const addTocart = (product) => {
    const existingProduct=cartProduct.find(item=>item.id===product.id);
    if(existingProduct){
        alert("item already in your cart!");
        return;
    }
    cartProduct.push(product)

    const cartItem = document.createElement("div");
    cartItem.classList.add("cartlist-item-container");
    cartItem.innerHTML = `
       
                            <div class="cart-item-image">
                                <img src="${product.image}" alt="burger">
                            </div>
                            <div class="detail">
                                <h4>${product.name}</h4>
                                <h4 class="item-total">${product.price}</h4>
                            </div>
                            <div class="flex">
                                <a href="#" class="quantity-btn">
                                    <i class="fa-solid fa-circle-minus"></i>
                                </a>
                                <h4 class="quantity-value">1</h4>
                                <a href="" class="quantity-btn">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </a>
                            </div>
                       
        `;
        cartList.appendChild(cartItem);
        
}

const initApp = () => {
    fetch("products.json").then(response => response.json()).then
        (data => {
            productList = data;
            console.log(productList);
            showCards()

        })
}
initApp()