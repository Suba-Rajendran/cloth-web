// script.js

async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();

    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Clear if already filled

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');

      productCard.innerHTML = `
        <img src="assets/images/${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button onclick="addToCart('${product._id}')">Add to Cart</button>
      `;

      container.appendChild(productCard);
    });

  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

function addToCart(productId) {
  // For now, just log. We'll build real cart soon.
  console.log(`Add to cart clicked for ID: ${productId}`);
}

// Load products when page loads
window.onload = loadProducts;

