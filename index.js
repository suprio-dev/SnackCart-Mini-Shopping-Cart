let products = document.querySelector("#productContainer");
let cart = document.querySelector("#cart");
let cartTotal = document.querySelector("#cartTotal");
let yourCartItems = document.querySelector("#cartItems");
let checkoutBtn = document.querySelector("#checkoutBtn");
let clearCartBtn = document.querySelector("#clearCartBtn");


let cartBox = [];

products.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === "BUTTON")
        addToCart(e);

});

// ADD TO CART

function addToCart(e) {

    let product = {
        category: e.target.closest("article").querySelector("h3").textContent.trim(),
        speciality: e.target.closest("article").querySelector("p").textContent.trim(),
        cost: e.target.closest("article").querySelector("span").textContent.replace("₹", "").trim(),
        img: e.target.closest("article").querySelector("#item-img").textContent.trim(),
        id: e.target.closest("article").querySelector("button").dataset.id
    };


    cartBox.push(product);

    cart.innerHTML = `<button
                id="cart"
                class="relative px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                🛒 Cart
                <span
                    id="cartCount"
                    class="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full bg-orange-500">
                    ${cartBox.length}
                </span>
            </button>`;

    totalCost();
    yourCart(e, product);

}

// TOTAL PRICE 

let totalPrice = 0;

function totalCost() {

    cartBox.forEach((product) => {
        totalPrice += Number(product.cost);
    });

    cartTotal.innerHTML = `<span id="cartTotal" class="text-2xl font-bold text-orange-500">
                    ₹${totalPrice}
                </span>`;

}

//CART

function yourCart(e, product) {
    if (cartBox.length === 1)
        yourCartItems.innerHTML = "";
    yourCartItems.className = "flex flex-wrap justify-evenly gap-y-6";
    yourCartItems.innerHTML += `<article
                class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition">

                <div class="h-40 rounded-xl bg-amber-100 flex items-center justify-center text-7xl">
                    ${product.img}
                </div>

                <div class="mt-5">
                    <h3 class="text-xl font-bold">
                        ${product.category}
                    </h3>

                    <p class="text-sm text-slate-500 mt-1">
                        ${product.speciality}
                    </p>

                    <div class="flex items-center justify-between mt-5">
                        <span class="text-xl font-bold">
                            ${e.target.closest("article").querySelector("span").textContent.trim()}
                        </span>
                        <button
        class="remove-from-cart px-3 py-2 rounded-lg border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition"
        data-id="${product.id}">
        Remove
    </button>
                    </div>
                    
                </div>
            </article>`;

}


//REMOVE FROM CART 

yourCartItems.addEventListener('click', (e) => {

    if (e.target.tagName === "BUTTON") {
        let id = e.target.dataset.id;
        let newCartBox = cartBox.filter((product) => {
            return product.id !== id;
        })
        cartBox = newCartBox;
        e.target.closest("article").remove();
        cart.innerHTML = `<button
                id="cart"
                class="relative px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                🛒 Cart
                <span
                    id="cartCount"
                    class="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full bg-orange-500">
                    ${cartBox.length}
                </span>
            </button>`;
        totalPrice = 0;
        totalCost();

    }

})

// CLEAR CART
clearCartBtn.addEventListener('click', (e) => {
    cart.innerHTML = `<button
                id="cart"
                class="relative px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                🛒 Cart
                <span
                    id="cartCount"
                    class="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full bg-orange-500">
                    ${cartBox.length}
                </span>
            </button>`;
    cartBox = [];
    yourCartItems.innerHTML = `<div id="cartItems" class="space-y-3">

                <div id="emptyCart" class="py-10 text-center text-slate-400">
                    <div class="text-5xl mb-3">
                        🛒
                    </div>

                    <p class="font-medium">
                        Your cart is empty
                    </p>

                    <p class="text-sm mt-1">
                        Add some delicious snacks!
                    </p>
                </div>

            </div>`;
    cart.innerHTML = `<button
                id="cart"
                class="relative px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                🛒 Cart
                <span
                    id="cartCount"
                    class="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full bg-orange-500">
                    ${cartBox.length}
                </span>
            </button>`;
    totalPrice = 0;
    totalCost();
})

//ORDER CONFIRMATION

function checkOut() {

    checkoutBtn.addEventListener('click', (e) => {
        if (cartBox.length === 0) {
            yourCartItems.innerHTML = `<div class="w-full min-h-[300px] flex items-center justify-center px-4">

    <div class="text-center max-w-md">

        <!-- Icon -->
        <div class="mx-auto w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center shadow-inner">
            <span class="text-5xl">🛒</span>
        </div>

        <!-- Heading -->
        <h2 class="mt-6 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Your cart is feeling a little empty!
        </h2>

        <!-- Message -->
        <p class="mt-3 text-slate-500 leading-relaxed">
            Looks like you haven't added anything yet.
            Grab your favourite snacks and make your cart happy! 🍔🍟
        </p>

        <!-- Button -->
        <a
            href="#productContainer"
            class="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-0.5 active:scale-95 transition-all duration-500">
            Browse Snacks 🍿
        </a>

    </div>

</div>`;
        }

        else {
            e.target.closest("a").innerHTML = `<a href="checkout.html">
                <button id="checkoutBtn"
                    class="w-full mt-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 active:scale-[0.99] transition">
                    Checkout
                </button>
            </a>`;
        }

    })
}

checkOut();