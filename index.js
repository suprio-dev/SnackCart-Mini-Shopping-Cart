let products = document.querySelector("#productContainer");
let cart = document.querySelector("#cart");
let cartTotal = document.querySelector("#cartTotal");
let yourCartItems = document.querySelector("#cartItems");


let cartBox = [];

products.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === "BUTTON")
        addToCart(e);

});


function addToCart(e) {

    let product = {
        category: e.target.closest("article").querySelector("h3").textContent.trim(),
        speciality: e.target.closest("article").querySelector("p").textContent.trim(),
        cost: e.target.closest("article").querySelector("span").textContent.replace("₹", "").trim(),
        img: e.target.closest("article").querySelector("#item-img").textContent.trim(),
        id: e.target.closest("article").dataset.id
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

let totalPrice = 0;

function totalCost() {

    cartBox.forEach((product) => {
        totalPrice += Number(product.cost);
        console.log(typeof totalPrice);
    });

    cartTotal.innerHTML = `<span id="cartTotal" class="text-2xl font-bold text-orange-500">
                    ₹${totalPrice}
                </span>`;

}


function yourCart(e, product) {
    if (cartBox.length === 1)
        yourCartItems.innerHTML = "";
    yourCartItems.className = "flex flex-wrap justify-evenly";
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
        class="remove-from-cart px-3 py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition"
        data-id="${product.id}">
        Remove
    </button>
                    </div>
                    
                </div>
            </article>`;
}