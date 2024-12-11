document.getElementById('add-to-cart').addEventListener('click', function() {
    let button = document.getElementById('add-to-cart');
    button.textContent = "Added to Cart";
    button.disabled = true;
  });
  
  document.getElementById('like-button').addEventListener('click', function() {
    alert('You liked this product!');
  });
  
