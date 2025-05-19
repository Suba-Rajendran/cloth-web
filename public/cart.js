const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-container");
let total = 0;

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty 😢</p>";
} else {
  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="100" />
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      </div>
    `;
  });

  document.getElementById("total-price").innerHTML = `<h2>Total: ₹${total}</h2>`;
}

function clearCart() {
  localStorage.removeItem("cart");
  window.location.reload();
}
