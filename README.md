# 🛒 SnackCart

### A simple mini shopping cart built with JavaScript.

Add your favorite snacks to the cart, manage cart items, view the total price, and complete a simple checkout flow — all through a responsive frontend interface.

**Live Demo:** [SnackCart](https://suprio-dev.github.io/SnackCart-Mini-Shopping-Cart/)

---

## ✨ Features

- Browse available snack products
- Add products to the shopping cart
- Display cart item count
- View individual cart items
- Calculate the total cart price
- Remove items from the cart
- Dynamic cart updates
- Simple checkout flow
- Order confirmation screen
- Responsive dark glassmorphism UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| HTML5 | Structure |
| Tailwind CSS | Styling & responsive UI |
| JavaScript | Cart logic & DOM manipulation |

---

## 🔄 How It Works
```text
Browse Snacks
      ↓
 Add to Cart
      ↓
 Product Data
      ↓
   Cart Array
      ↓
 Update Cart UI
      ↓
Calculate Total
      ↓
   Checkout
      ↓
Order Confirmed
```

Each product is represented as an object containing its relevant information, which is then added to the cart array when the user clicks **Add to Cart**.

The cart interface is dynamically updated whenever items are added or removed.

---

## 🛒 Cart System

SnackCart uses a JavaScript array to manage the current cart items.

Product information such as the **name, price, image, category, and ID** is stored in objects before being added to the cart.

Event delegation is used on the product container to handle product interactions efficiently.

```javascript
productContainer.addEventListener("click", (e) => {
    // Handle product actions
});
```

The cart count and total price are recalculated whenever the cart changes.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners
- Event delegation
- `dataset`
- JavaScript objects
- Arrays
- User interactions
- Dynamic DOM updates
- Cart logic
- Price calculations
- Responsive UI design

---

## 🚀 Run Locally
```bash
git clone https://github.com/suprio-dev/SnackCart-Mini-Shopping-Cart.git
cd SnackCart-Mini-Shopping-Cart
```

Open `index.html` in your browser.

No build tools or installation required.

---

## 📌 Project Status

**Completed — v1.0**

This project focuses on practicing the fundamentals of JavaScript-powered shopping cart functionality.

More features may be added as the project evolves.