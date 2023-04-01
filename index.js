let cart = [];

let checkoutTimeout = null;

function addToCart(itemName, itemPrice) {
    cart.push({name: itemName, price: itemPrice});
    updateCart();
    
    // If the checkout timeout was previously set, clear it and set a new one
    if (checkoutTimeout) {
        clearTimeout(checkoutTimeout);
    }
    checkoutTimeout = setTimeout(function() {
        if (cart.length > 0) {
            alert("Please checkout your cart!");
        }
    }, 2 * 60 * 1000); // 2 minutes in milliseconds
}
// get all cart buttons
const cartButtons = document.querySelectorAll('.cart-btn');

// add event listener to each cart button
cartButtons.forEach(cartButton => {
  cartButton.addEventListener('click', () => {
    alert('Item added to cart');
  });
});

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let total = 0;
    cartItems.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = cart[i].name + " - ₹" + cart[i].price.toFixed(2);
        cartItems.appendChild(li);
        total += cart[i].price;
    }
    cartTotal.innerHTML = total.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        cart=[];
        updateCart();
        alert("Thank you for your order!");
        if (checkoutTimeout) {
            clearTimeout(checkoutTimeout);
        }
    } else {
        alert("cart is empty!");
    }
}
