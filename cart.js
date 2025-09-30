// src/cart.js
export function addToCart(cart, item) {
  return [...cart, item];
}

export function removeFromCart(cart, itemId) {
  return cart.filter(item => item.id !== itemId);
}
