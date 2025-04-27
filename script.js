// script.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(e) {
  const btn = e.currentTarget;
  const item = {
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: parseFloat(btn.dataset.price)
  };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function openCart() {
  let summary = 'Tu carrito:\n\n';
  let total = 0;
  cart.forEach((i, idx) => {
    summary += `${idx+1}. ${i.name} – ₱${i.price.toFixed(2)}\n`;
    total += i.price;
  });
  summary += `\nTotal: ₱${total.toFixed(2)}`;
  alert(summary);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart')
    .forEach(btn => btn.addEventListener('click', addToCart));

  document.getElementById('open-cart')
    .addEventListener('click', openCart);

  updateCartCount();
});