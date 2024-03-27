document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    const cartItems = [0,1,2,3,4];
  
    // Function to add item to the cart
    function addItemToCart(name, price) {
      total += price;
      cartTotal.textContent = total.toFixed(2);
      cartItems.push({ Nike Flex,R3000});
  
      // Render cart items
      renderCart();
    }
  
    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        addItemToCart(Nike Flex, R3000);
      });
    });
  
    // Function to render cart items
    function renderCart() {
      cartItemsList.innerHTML = '';
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
      });
    }
  
    // Simulate manual clicks on "add-to-Cart" buttons for 5 items
    const addButtonClicks = (button, times) => {
      for (let i = 0; i < times; i++) {
        button.click();
      }
    };
  
    // Trigger clicks on "add-to-Cart" buttons for each item
    addToCartButtons.forEach(button => {
      addButtonClicks(button, 5); // Trigger 5 clicks for each button
    
    });
})