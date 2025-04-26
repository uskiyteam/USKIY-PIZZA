// script.js

let cart = [];
let total = 0;

function addToCart(pizza, price) {
  cart.push({ pizza, price });
  total += price;

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.pizza} - ${item.price} сум`;
    cartList.appendChild(li);
  });

  totalElement.textContent = total;
}