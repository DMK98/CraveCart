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
const cardList=document.querySelector(".menu-card-list");

cartIcon.addEventListener("click", () => {
    cartTab.classList.add("cart-tab-active");
})
closeBtn.addEventListener("click", () => {
    cartTab.classList.remove("cart-tab-active");
})


let productList = [];

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
            <a href="" class="add-cart-btn btn">Add to Cart</a>
            `;
        cardList.appendChild(orderCard)    
    })
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