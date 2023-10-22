export function getCartFromLocalStorage() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

export function displayCart() {
    var cart = getCartFromLocalStorage();

    // Hiển thị giỏ hàng trên giao diện
    var cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = 'Giỏ hàng của bạn:<br>';

    for (var i = 0; i < cart.length; i++) {
        cartContainer.innerHTML += cart[i].name + ' - $' + cart[i].price + '<br>';
    }
}

export function getUserFromLocalStorage() {
    var user = JSON.parse(localStorage.getItem('user')) || [];
    return user;
}
