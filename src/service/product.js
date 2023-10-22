import { componentHeader } from "../component/header.js";
import { componentFooter } from "../component/footer.js";

import { getCartFromLocalStorage } from "../component/cookie.js";


componentHeader();
componentFooter();

const apiProduct = "http://localhost:3000/products";
const formProduct = document.getElementById("formProduct");

async function getProducts() {
  const response = await fetch(apiProduct);
  const products = await response.json();

  let htmlCotent = "";
  products.map((item) => {
    htmlCotent += `<div class="card-product group scrollCard">
                                <div class="absolute justify-center h-[246px]">
                                    <a href="../../public/pages/product_detail.html?id=${item.id}"><img class="w-full h-full object-cover" src="${(item.images).slice(3)}" alt="${item.name}"></a>
                                </div>
                                <div class="hidden animate-fadeIn group-hover:flex flex-col gap-2 absolute w-10 h-[86px] right-3 top-3">
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg class="group hover:fill-red-600  xmlns=" http:="" www.w3.org="" 2000="" svg"="" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path class="group-hover:stroke-red-600" d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z" stroke="#1A1A1A" stroke-width="1.5"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute left-4 top-64">
                                    <span
                                        class="text-sm transition-all duration-200 ease-linear group-hover:text-success-dark text-content-700">Green
                                        ${item.name}</span>
                                </div>
                                <div class="absolute left-4 top-[280px]">
                                    <span class="text-base font-medium">$${(item.price)/1000}</span>
                                    <span class="text-sm line-through text-content-400">$${(item.prince_sale)/1000 || ''}</span>
                                </div>
                                <div class="absolute left-4 top-[304px]">
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#CCCCCC" />
                                    </svg>
                                </div>
                                <div class="add-card group/add-card">
                                    <a href="#" class="add-card-items group-hover/add-card:bg-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                                viewBox="0 0 20 21" fill="none">
                                                <path
                                                    class="transition-all duration-200 ease-linear group-hover/add-card:stroke-white"
                                                    d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                                    stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                    </a>
                                </div>
                            </div>`;
  });

  formProduct.innerHTML = htmlCotent;
}

getProducts();

// Show model cart
function showModelCart() {
    // render UI item to cart
    displayCart();
  // Model cart
  const icon_ShowCart = document.getElementById("icon_ShowCart");
  const icon_close_ModelCart = document.getElementById("closeModelCart");
  const model_cart = document.getElementById("model_cart");

  icon_close_ModelCart.addEventListener("click", () => {
    model_cart.classList.add("hidden");
  });

  model_cart.addEventListener("click", (e) => {
    if (e.target === model_cart) {
      model_cart.classList.add("hidden");
    }
  });

  icon_ShowCart.addEventListener("click", () => {
    model_cart.classList.remove("hidden");
  });
};

window.showModelCart = showModelCart;

// update quantity icon cart
const updateQuantityIconCart = () => {
  const cart = getCartFromLocalStorage();
  const quantityCart = document.getElementById("quantityCart");
  const totalHeader = document.getElementById("totalHeader");

  const subTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price * item.quantity);
  }, 0);

  quantityCart.innerText = cart.length;
  totalHeader.innerText = `$${subTotal}`;
};

// handle button delete product from cart
const handleBtnDeleteProduct = (id) => {
  const cart = getCartFromLocalStorage();
  const cartAfterDelete = cart.filter((item) => item.id != id);
  localStorage.setItem("cart", JSON.stringify(cartAfterDelete));
  updateQuantityIconCart();
  displayCart();
};

var displayCart = () => {
  const cart = getCartFromLocalStorage();
  const cartModel = document.getElementById("displayCart");

  let htmlContent = "";
  // Hiển thị giỏ hàng trên giao diện
  for (let value of cart) {
    htmlContent += `<div class="flex flex-row items-center w-full h-[100px] gap-3">
                        <img class="object-cover h-[100px] w-[100px] basis-1/4" src="../${value.image.slice(
                          29
                        )}" alt="${value.name}">

                        <div class="basis-2/4">
                            <h4 class="text-sm  leading-[1.5]">${
                              value.name
                            }</h4>
                            <p class="text-xs font-semibold leding-[1.2]"><span class="text-content-500 leading-[1.5] font-normal">
                            ${value.quantity} x</span> $${value.price}</p>
                        </div>

                        <span onclick="handleBtnDeleteProduct(${
                          value.id
                        })" class="cursor-pointer">
                          <svg class="basis-1/4 icon_delete cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_629_6652)">
                            <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" stroke-miterlimit="10"/>
                            <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_629_6652">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        </span>
                    </div>`;
  }
  cartModel.innerHTML = htmlContent;

  // Tổng tiền và tổng sản phẩm
  const totalUI = document.getElementById("total");
  let total = cart.reduce((acc, item) => {
    return acc + Number(item.price * item.quantity);
  }, 0);
  totalUI.innerHTML = `<span class="leading-[1.5]">${cart.length} products</span>
                    <span class="font-semibold leading-[1.2]">$${total}</span>`;
};

function goCart() {
    window.location.href = "./cart.html";
}

function goCheckOut() {
    window.location.href = "./checkout.html";
}

window.goCart = goCart;
window.goCheckOut = goCheckOut;
window.handleBtnDeleteProduct = handleBtnDeleteProduct;

// filter products by category
const categorySelect = document.getElementById("category");

async function filterProductCategory() {
    const formProduct = document.getElementById("formProduct");
    const categorySelected = categorySelect.value;
    
    const response = await fetch(`http://localhost:3000/products?category=${categorySelected}`);
    const products = await response.json();

    let htmlContent = "";

    products.map((item) => {
    htmlContent += `<div class="card-product group scrollCard">
                                <div class="absolute justify-center h-[246px]">
                                    <a href="../../public/pages/product_detail.html?id=${item.id}"><img class="w-full h-full object-cover" src="${(item.images).slice(3)}" alt="${item.name}"></a>
                                </div>
                                <div class="hidden animate-fadeIn group-hover:flex flex-col gap-2 absolute w-10 h-[86px] right-3 top-3">
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg class="group hover:fill-red-600  xmlns=" http:="" www.w3.org="" 2000="" svg"="" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path class="group-hover:stroke-red-600" d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z" stroke="#1A1A1A" stroke-width="1.5"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute left-4 top-64">
                                    <span
                                        class="text-sm transition-all duration-200 ease-linear group-hover:text-success-dark text-content-700">Green
                                        ${item.name}</span>
                                </div>
                                <div class="absolute left-4 top-[280px]">
                                    <span class="text-base font-medium">$${(item.price)/1000}</span>
                                    <span class="text-sm line-through text-content-400">$${(item.prince_sale)/1000 || ''}</span>
                                </div>
                                <div class="absolute left-4 top-[304px]">
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#CCCCCC" />
                                    </svg>
                                </div>
                                <div class="add-card group/add-card">
                                    <a href="#" class="add-card-items group-hover/add-card:bg-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                                viewBox="0 0 20 21" fill="none">
                                                <path
                                                    class="transition-all duration-200 ease-linear group-hover/add-card:stroke-white"
                                                    d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                                    stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                    </a>
                                </div>
                            </div>`;
  });

  formProduct.innerHTML = htmlContent;
}

categorySelect.addEventListener("change", filterProductCategory);

// filter products by rating
const ratingSelect = document.getElementById("rating");

async function filterProductRating() {
    const formProduct = document.getElementById("formProduct");
    const ratingSelected = ratingSelect.value;
    
    const response = await fetch(`http://localhost:3000/products?_sort=${ratingSelected}&_order=desc&_limit=5`);
    const products = await response.json();

    let htmlContent = "";

    products.map((item) => {
    htmlContent += `<div class="card-product group scrollCard">
                                <div class="absolute justify-center h-[246px]">
                                    <a href="../../public/pages/product_detail.html?id=${item.id}"><img class="w-full h-full object-cover" src="${(item.images).slice(3)}" alt="${item.name}"></a>
                                </div>
                                <div class="hidden animate-fadeIn group-hover:flex flex-col gap-2 absolute w-10 h-[86px] right-3 top-3">
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg class="group hover:fill-red-600  xmlns=" http:="" www.w3.org="" 2000="" svg"="" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path class="group-hover:stroke-red-600" d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z" stroke="#1A1A1A" stroke-width="1.5"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute left-4 top-64">
                                    <span
                                        class="text-sm transition-all duration-200 ease-linear group-hover:text-success-dark text-content-700">Green
                                        ${item.name}</span>
                                </div>
                                <div class="absolute left-4 top-[280px]">
                                    <span class="text-base font-medium">$${(item.price)/1000}</span>
                                    <span class="text-sm line-through text-content-400">$${(item.prince_sale)/1000 || ''}</span>
                                </div>
                                <div class="absolute left-4 top-[304px]">
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#CCCCCC" />
                                    </svg>
                                </div>
                                <div class="add-card group/add-card">
                                    <a href="#" class="add-card-items group-hover/add-card:bg-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                                viewBox="0 0 20 21" fill="none">
                                                <path
                                                    class="transition-all duration-200 ease-linear group-hover/add-card:stroke-white"
                                                    d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                                    stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                    </a>
                                </div>
                            </div>`;
  });

  formProduct.innerHTML = htmlContent;
}

ratingSelect.addEventListener("change", filterProductRating);

// filter products by price
const priceSelect = document.getElementById("price");

async function filterProductPrice() {
    const formProduct = document.getElementById("formProduct");
    const priceSelected = priceSelect.value;
    
    const response = await fetch(`http://localhost:3000/products?price_gte=${priceSelected}`);
    const products = await response.json();

    let htmlContent = "";

    products.map((item) => {
    htmlContent += `<div class="card-product group scrollCard">
                                <div class="absolute justify-center h-[246px]">
                                    <a href="../../public/pages/product_detail.html?id=${item.id}"><img class="w-full h-full object-cover" src="${(item.images).slice(3)}" alt="${item.name}"></a>
                                </div>
                                <div class="hidden animate-fadeIn group-hover:flex flex-col gap-2 absolute w-10 h-[86px] right-3 top-3">
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg class="group hover:fill-red-600  xmlns=" http:="" www.w3.org="" 2000="" svg"="" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path class="group-hover:stroke-red-600" d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z" stroke="#1A1A1A" stroke-width="1.5"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="flex items-center justify-center w-10 h-10 border rounded-full group-hover:bg-white basis-1/2">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute left-4 top-64">
                                    <span
                                        class="text-sm transition-all duration-200 ease-linear group-hover:text-success-dark text-content-700">Green
                                        ${item.name}</span>
                                </div>
                                <div class="absolute left-4 top-[280px]">
                                    <span class="text-base font-medium">$${(item.price)/1000}</span>
                                    <span class="text-sm line-through text-content-400">$${(item.prince_sale)/1000 || ''}</span>
                                </div>
                                <div class="absolute left-4 top-[304px]">
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#FF8A00" />
                                    </svg>
                                    <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                        viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M6.20672 9.44078L8.5711 10.9385C8.87335 11.1298 9.24835 10.8452 9.15872 10.4923L8.47585 7.80541C8.45656 7.73057 8.45878 7.6518 8.48227 7.57816C8.50575 7.50453 8.54954 7.43902 8.6086 7.38916L10.7288 5.62478C11.0071 5.39303 10.8638 4.93066 10.5057 4.90741L7.7371 4.72741C7.66255 4.72212 7.59105 4.69577 7.5309 4.65142C7.47075 4.60707 7.42444 4.54656 7.39735 4.47691L6.3646 1.87666C6.33648 1.80276 6.28656 1.73916 6.22146 1.69428C6.15636 1.6494 6.07916 1.62537 6.0001 1.62537C5.92103 1.62537 5.84383 1.6494 5.77873 1.69428C5.71364 1.73916 5.66372 1.80276 5.6356 1.87666L4.60285 4.47691C4.57581 4.54663 4.52952 4.60722 4.46937 4.65164C4.40922 4.69606 4.33768 4.72246 4.2631 4.72778L1.49447 4.90778C1.13672 4.93066 0.992723 5.39303 1.27135 5.62478L3.3916 7.38953C3.45059 7.43936 3.49434 7.50481 3.51782 7.57837C3.5413 7.65193 3.54356 7.73062 3.52435 7.80541L2.89135 10.2973C2.78372 10.7207 3.2341 11.0623 3.59635 10.8324L5.79385 9.44078C5.85561 9.40152 5.92728 9.38066 6.00047 9.38066C6.07366 9.38066 6.14533 9.40152 6.2071 9.44078H6.20672Z"
                                            fill="#CCCCCC" />
                                    </svg>
                                </div>
                                <div class="add-card group/add-card">
                                    <a href="#" class="add-card-items group-hover/add-card:bg-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                                viewBox="0 0 20 21" fill="none">
                                                <path
                                                    class="transition-all duration-200 ease-linear group-hover/add-card:stroke-white"
                                                    d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                                                    stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                    </a>
                                </div>
                            </div>`;
  });

  formProduct.innerHTML = htmlContent;
}

priceSelect.addEventListener("change", filterProductPrice);




